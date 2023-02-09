const Mail = require('./mail')

const user = "mycpa2023@gmail.com"
const password = "tkorczgupdhvwaks"
//test@mycpa.33mail.com

const main = async () => {
    try {
        const msgs = await Mail.getVerificationCode(user , password)
        const Account = await Mail.makeHash(10)
        
        console.log(msgs);
 
    } catch (error) {
        console.log(error);

    }
}

main()

