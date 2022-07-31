import db from '../lib/database.js'

let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {
     let err = `*Example* : reply to sticker with command *${usedPrefix + command}* ${usedPrefix}menu`
     if (!m.quoted) throw err
     if (!m.quoted.fileSha256) throw err
     if (!text) throw err
     let sticker = db.data.sticker
     let hash = m.quoted.fileSha256.toString('base64')
     if (sticker[hash] && sticker[hash].locked && !isOwner) throw 'You do not have permission to modify this sticker command.'
     sticker[hash] = {
         text,
         mentionedJid: m.mentionedJid,
         creator: m.sender,
         at: + new Date,
         locked: false,
     }
     conn.sendButton(m.chat, 'Success!', wm, null, [['List Sticker Command', '.listcmd']], m)
}

handler.help = ['setcmd'].map(v => v + ' <reply>')
handler.tags = ['database']
handler.command = ['setcmd']
handler.limit = true

export default handler