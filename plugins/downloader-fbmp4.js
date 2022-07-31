import db from '../lib/database.js'
import fetch from 'node-fetch'
import { facebookdl, facebookdlv2, facebookdlv3, savefrom } from '@bochilteam/scraper'

let handler = async(m, { conn, args, text, usedPrefix, command }) => {
   if (!args[0]) throw `*Example* : ${usedPrefix + command} url`
   if (!args[0].match(/(facebook.com|fb.(watch|gg))/gi)) throw `Url is wrong, this command is for downloading Facebook videos!`
   let doc = db.data.chats[m.chat].asDocument
   m.react('⏱️')
   try {
     let res = await savefrom(args[0])
     let { url, meta, thumb, hd, sd, hosting } = res
     let num
     if (hd == 'Bad Url Hash') num = 1
     else num = 0
     let caption = `\n          *「 FACEBOOK MP4 」*\n\n${sYm} *Title* : ${meta.title}\n${sYm} *Quality* : ${url[num].subname}\n${sYm} *Source* : ${meta.source}\n`
     let med = url[num].url
     m.react('✅')
     conn.sendFile(m.chat, med, meta.title + '.mp4', caption, m, 0, { asDocument: doc })
   } catch {
   try {
     let res = await facebookdlv2(args[0])
     let { id, title, description, thumbnail, result } = res
     let { url, quality } = result[0]
     let med = result[0].url ? result[0].url : result[1].url
     let caption = `\n          *「 FACEBOOK MP4 」*\n\n${sYm} *Title* : ${title}\n${sYm} *Quality* : ${quality}\n${sYm} *Source* : ${args[0]}\n`  
     m.react('✅')
     conn.sendFile(m.chat, med, title + '.mp4', caption, m, 0, { asDocument: doc })
   } catch {
   try {
     let res = await facebookdlv3(args[0])
     let { title, thumbnail, result } = res
     let { url, quality } = result[0]
     let med = result[1].url || result[0].url
     let caption = `\n          *「 FACEBOOK MP4 」*\n\n${sYm} *Title* : ${title}\n${sYm} *Quality* : ${quality}\n${sYm} *Source* : ${args[0]}\n`   
     m.react('✅')
     conn.sendFile(m.chat, med, title + '.mp4', caption, m, 0, { asDocument: doc })
   } catch (e) {
     throw e
    }
   }
  }
}
handler.help = ['fbmp4 '].map(v => v + '<url>')
handler.tags = ['downloader']
handler.command = /^(f(ace)?b(ook)?(d(own)?l(oader)?)?(mpp?4|v(ideo)?)?)$/i
handler.limit = true
handler.desc = ['Download Facebook video media, use command *#fbmp4 url* remove < >']

export default handler

//by bit.ly/AcellComel