let dns = require('dns')

const isInternetOnline = () => {
    return new Promise((resolve , reject) => {
        dns.lookup('api.mail.tm', function (error) {
            if (error && error.code == "ENOTFOUND") {
                reject(false);
            } else {
                resolve(true);
            }
        })
    })

}

export default isInternetOnline

