const imaps = require('imap-simple')

const READ_MAIL_CONFIG = {
  imap: {
    user: "",
    password: "",
    host: 'imap.gmail.com', 
    port: 993,
    authTimeout: 10000,
    tls: true,
    tlsOptions: { rejectUnauthorized: false },
  }
}

const getVerificationCode = (user, password) => new Promise(async (resolve, reject) => {
  READ_MAIL_CONFIG.imap.user = user
  READ_MAIL_CONFIG.imap.password = password

  try {

    // WATCH FOR INBOX
    const connection_inbox = await imaps.connect({
      ...READ_MAIL_CONFIG, onmail: async () => {

        await connection_inbox.search(['All'], { bodies: ['HEADER', 'TEXT'], markSeen: false }).then(async messages => {

          const extractMessages = messages.filter(msg =>
             msg.parts[1]?.body['from'][0] === "\"TikTok 'noreply@account.tiktok.com' via 33Mail\" <sender@mailer1.33mail.com>" ? msg : null
          )


          if (extractMessages.length > 0) {
            const uidsToDelete = extractMessages.map(msg => msg.attributes.uid)
            const GetMessage = extractMessages.map(msg => msg.parts[0].body)

            await connection_inbox.moveMessage(uidsToDelete, '[Gmail]/Trash')

            let code = ""

            if (code = /<p[^>]*>(\d{6})<\/p>/.exec(GetMessage[extractMessages.length - 1]) && code[1]) {
              resolve(code)
            } else {
              reject("err!")
            }

          } else {
            reject("err!")
          }

        })

      }
    })
    await connection_inbox.openBox('INBOX')

  } catch (err) {
    reject("err!")
  }

})


const makeHash = size => {
  return Array.apply(0, Array(size)).map(function () {
          return (function (charset) {
              return charset.charAt(Math.floor(Math.random() * charset.length));
          })("abcdefghijklmnopqrstuvwxyz0123456789");
      }).join("");
}


module.exports = { getVerificationCode , makeHash }