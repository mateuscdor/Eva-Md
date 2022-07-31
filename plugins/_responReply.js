import db from '../lib/database.js'
import { webp2png } from '../lib/webp2mp4.js'
let handler = m => m

handler.before = async function (m, { conn, isOwner }) {
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys) return
    if (/(REPORT|REQUEST|INVITING|ERROR|MESSAGE)!/i.test(m.quoted.text)) {
        m.react('↖️')
        conn.fakeReply(m.quoted.mentionedJid[0], `*MESSAGE!*\n\nFrom : @${m.sender.split`@`[0]}\n\nMessage : ${m.text}\ n`, m.quoted.mentionedJid[0], `${m.quoted.text.split`Message :`[1]}`)
    }
    if (m.quoted.text.includes('STICKER')) {
        if (db.data.chats[m.chat].stiker) return
        let mime = (m.msg || m).mimetype
        if (!/webp|video|image/.test(mime)) return
        m.react('⏱️')
        let med = await m.download()
        conn.sendSticker(m.chat, med, m, { packname: global.packname, author: global.author })
    }
    if (m.quoted.text.includes('NOBACKGROUND')) {
        let mime = (m.msg || m).mimetype
        if (/video/.test(mime)) return
        let q = m.quoted
        let media
        try {
          let mime = (q.msg || q).mimetype || ''
          if (/webp/.test(mime)) {
              if (q.seconds) throw `Sorry gif sticker media doesn't support `
              let webp = await q.download()
              media = await webp2png(webp)
          } else media = await q.download()
        } catch {
          if (isUrl(m.text.split(' ')[0])) media = m.text.split(' ')[0]
          else return
        }
        m.react('⏱️')
        let res = API('violet', '/api/media/removebg', { img: media }, 'apikey')
        conn.sendFile(m.chat, res, 'removebg.jpg', wm, m)
    }
}
export default handler

function isUrl(text) {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}