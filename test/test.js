const { TTScraper } = require("tiktok-scraper-ts");


const main = async () => {
    try {
      
        const TikTokScraper = new TTScraper();

        const username = "king_coins"

        let account = { user : {},  videos : [] }

        let ur = await TikTokScraper.user(username)
        ur = { uniqueId : ur.uniqueId , nickname : ur.nickname , bioLink : ur.bioLink , followers : ur.followers , videos : ur.videos , }

    
        let ls = await TikTokScraper.getAllVideosFromUser(username)

        ls = ls.map(async (vd) => {
            let mc = await TikTokScraper.getMusic(vd.directVideoUrl)
            mc = { title : mc.title , playURL : mc.playURL , author : mc.author , duration : mc.duration }
    
            let nvd = await TikTokScraper.noWaterMark(vd.directVideoUrl)    
            return {
                // music : mc,
                video : nvd,
                description: vd.description,
                createdAt: vd.createdAt,
                duration: vd.duration,
                shareCount: vd.shareCount,
                likesCount: vd.likesCount,
                commentCount: vd.commentCount,
                playCount: vd.playCount,
                //author: vd.author,
                directVideoUrl: vd.directVideoUrl
            }
        })

        const vds = await Promise.all(ls)
        account = { user : ur , videos : vds}

        console.log(account)


    } catch (error) {
        console.log(error);

    }
}

main()










// const Mail = require('./mail')

// const user = "mycpa2023@gmail.com"
// const password = "tkorczgupdhvwaks"
// //test@mycpa.33mail.com

// const main = async () => {
//     try {
//         const msgs = await Mail.getVerificationCode(user , password)
//         const Account = await Mail.makeHash(10)
        
//         console.log(msgs);
 
//     } catch (error) {
//         console.log(error);

//     }
// }

// main()

