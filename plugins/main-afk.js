import db from '../lib/database.js'

let handler = async(m, { conn, usedPrefix, text }) => {
   let user = db.data.users[m.sender]
   user.afk = + new Date
   user.afkReason = text
   let caption = `\n               *「 AFK MODE 」*\n
${sYm} *Name* : ${m.name}
${sYm} *Tag* : @${m.sender.split('@')[0]}
${sYm} *Reason* : ${text ? text : 'No reason'}
`
   conn.sendButton(m.chat, caption, wm, fla + "afk mode", [[`Menu`, `${usedPrefix}menu`]], m, { mentions: [m.sender], asLocation: true })
}
handler.help = ['afk '].map(v => v + '[option]')
handler.tags = ['main']
handler.command = /^afk$/i

handler.desc = ['*AFK* stands for _Away From Keyboard_. In Indonesian, the term means go away from the keyboard (laptop pc or mobile phone)']

export default handler