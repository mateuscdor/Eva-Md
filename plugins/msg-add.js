const { proto } = (await import('@adiwajshing/baileys')).default
import db from '../lib/database.js'

let handler = async(m, { conn, command, usedPrefix, text }) => {
     let M = proto.WebMessageInfo
     if (!m.quoted) throw `Reply message with command *${usedPrefix + command}*`
     if (!text) throw `Usage:${usedPrefix + command} <text>\n\nExample:\n${usedPrefix + command} test`
     let msgs = db.data.msgs
     if (text in msgs) throw `'${text}' has been registered!`
     msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
     m.reply(`Successfully added message '${text}'\n\nAccess by typing its name`.trim())
}
handler.help = ['msg'].map(v => 'add' + v + ' <text>')
handler.tags = ['database']
handler.command = /^addmsg$/

export default handler