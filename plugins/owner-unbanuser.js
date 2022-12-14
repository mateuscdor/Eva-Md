import db from '../lib/database.js'

let handler = async(m, { conn, text }) => {
     if (!text) throw 'Who wants to be unbanned?'
     let who
     if (m.isGroup) who = m.mentionedJid[0]
     else who = m.chat
     if (!who) throw 'Tag one'
     let users = db.data.users
     users[who].banned = false
     conn.reply(m.chat, `successfully unbanned`, m)
}
handler.help = ['unban @user']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.rowner = true

export default handler