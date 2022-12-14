import db from '../lib/database.js'

let handler = async(m, { conn, text }) => {
     if (!text) throw 'Who wants to be banned?'
     let who
     if (m.isGroup) who = m.mentionedJid[0]
     else who = m.chat
     if (!who) throw 'Tag one'
     let users = db.data.users
     users[who].banned = true
     conn.reply(m.chat, `successfully banned`, m)
}
handler.help = ['ban @user']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.rowner = true

export default handler