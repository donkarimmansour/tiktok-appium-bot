const fetch = require('node-fetch');

class MailClient {
  
    constructor(...extensions) {
        this.baseURL = "https://api.mail.tm";
        this.token = "";
        this.id = "";
        this.address = "";
        this.extensions = extensions || [];
    }

    async register(address, password) {
        return this.send_("/accounts", "POST", { address, password });
    }

    async login(address, password) {
        var res = await this.send_("/token", "POST", { address, password });
        if (res.status) {
            this.token = res.data.token;
            this.id = res.data.id;
        }
        return res;
    }


    async fetchDomain() {
        return this.send_("/domains");
    }


    async fetchMessages(page = 1) {
        return this.send_(`/messages?page=${page}`);
    }

   
    async fetchMessage(messageId) {
        return this.send_("/messages/" + messageId);
    }

    async deleteMessage(messageId) {
        return this.send_("/messages/" + messageId, "DELETE");
    }


    async read(messageId, seen = true) {
        return this.send_("/messages/" + messageId, "PATCH", { seen })
    }


    async generateAccount() {
        let name = this.makeHash_(5);
        let domain = await this.fetchDomain();

        const username = `${name}@${domain.data[0].domain}`
        const password = "mmmm@1111"

        let registerRes = await this.register(username, password)

        if (!registerRes.status)
            return registerRes;
        else
            registerRes = registerRes.data;

         let loginRes = await this.login(username, password);
        if (!loginRes.status)
            return loginRes;
        else
            loginRes = loginRes.data;

        return {
            status: true,
            data: {
                username,
                password
            }
        }
    }

    makeHash_(size) {
        return Array.apply(0, Array(size))
            .map(function () {
                return (function (charset) {
                    return charset.charAt(Math.floor(Math.random() * charset.length));
                })("abcdefghijklmnopqrstuvwxyz0123456789");
            })
            .join("");
    }

    async send_(path, method = "GET", body) {

        const options = {
            method,
            headers: {
                accept: "application/json",
                authorization: `Bearer ${this.token}`
            }
        };

        if (method === "POST" || method === "PATCH") {
            const contentType = method === "PATCH" ? "merge-patch+json" : "json";
            options.headers["content-type"] = `application/${contentType}`;
            options.body = JSON.stringify(body);
        }

        const res = await fetch(this.baseURL + path, options);
        let data;

        const contentType = res.headers.get("content-type");

        if (contentType && contentType.startsWith("application/json"))
            data = await res.json();
        else
            data = await res.text();

        return {
            status: res.ok,
            message: res.ok ? "ok" : data.message,
            data: data
        };
    }
}

export default new MailClient()
