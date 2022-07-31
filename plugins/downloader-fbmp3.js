import db from '../lib/database.js'
import fetch from 'node-fetch'
import { toAudio, toPTT } from '../lib/converter.js'
import { facebookdl, facebookdlv2, facebookdlv3, savefrom } from '@bochilteam/scraper'

let handler = async(m, { conn, args, text, usedPrefix, command }) => {
   if (!text) throw `*Example* : ${usedPrefix + command} url`
   if (!args[0].match(/(facebook.com|fb.(watch|gg))/gi)) throw `Url is wrong, this command is to download Facebook Audio!`
   let doc = db.data.chats[m.chat].asDocument
   m.react('⏱️')
   try {
     let res = await savefrom(args[0])
     let { url, meta, thumb, hd, sd, hosting } = res
     let caption = `\n *「 FACEBOOK MP3 *\n\n${sYm} *Title* : ${meta.title}\n${sYm} *Quality* : ${url[num].subname}\ n${sYm} *Source* : ${meta.source}\n`
     let num
     if (hd == 'Bad Url Hash') num = 1
     elsenum = 0
     let buf = await(await fetch(url[num].url)).buffer()
     let audio = await toAudio(buf, 'mp4')
     m.react('✅')
     conn.sendFile(m.chat, audio.data, meta.title + '.mp3', caption, m, 0, { asDocument: doc })
   } catch {
   try {
     let res = await facebookdlv2(args[0])
     let { id, title, description, thumbnail, result } = res
     let { url, quality } = result[0]
     let caption = `\n *「 FACEBOOK MP3 」\n\n${sYm} *Title* : ${title}\n${sYm} *Quality* : ${quality}\n${sYm} *Source * : ${args[0]}\n`
     let med = result[0].url ? result[0].url : result[1].url
     let buf = await(await fetch(med)).buffer()
     let audio = await toAudio(buf, 'mp4')
     m.react('✅')
     conn.sendFile(m.chat, audio.data, title + '.mp3', caption, m, 0, { asDocument: doc })
   } catch {
   try {
     let res = await facebookdlv3(args[0])
     let { title, thumbnail, result } = res
     let { url, quality } = result[0]
     let caption = `\n *「 FACEBOOK MP3 」\n\n${sYm} *Title* : ${title}\n${sYm} *Quality* : ${quality}\n${sYm} *Source * : ${args[0]}\n`
     let med = result[1].url || result[0].url
     let buf = await(await fetch(med)).buffer()
     let audio = await toAudio(buf, 'mp4')
     m.react('✅')
     conn.sendFile(m.chat, audio.data, title + '.mp3', caption, m, 0, { asDocument: doc })
   } catch(e) {
     throw e
      }
    }
  }
}

handler.help = ['fbmp3 '].map(v => v + '<url>')
handler.tags = ['downloader']
handler.command = /^(f(ace)?b(ook)?(d(own)?l(oader)?)?(mpp?3|a(udio)?))$/i
handler.limit = true
handler.desc = ['Download Facebook audio media, use the command #fbmp3 url* remove the < >']

export default handler

