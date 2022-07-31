import db from '../lib/database.js'

let handler = async(m, { conn, isOwner, command }) => {
     /* let caption = `
*HASH LIST*
\`\`\`
${Object.entries(db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `(Locked) ${key}` : key}\n${value.text} ${isOwner ? `@${value.creator.split('@')[0]}` : ''}`).join('\n')}
\`\`\`
`.trim() */
     let b = Object.entries(db.data.sticker).map(([key, value], index) => key)
     let listKey = []
     for (let key of b) {
         listKey.push({
             title: db.data.sticker[key].text,
             rowId: '.infocmd ' + key
         })
     }
     if (b[0]) conn.sendListM(m.chat, { titleRows: 'List Sticker Text', textText: 'Sticker Command', footerText: wm }, listKey, m)
     else m.reply(`No cmd sticker in database!`)
}

handler.help = ['listcmd']
handler.tags = ['database']
handler.command = ['listcmd']

export default handler