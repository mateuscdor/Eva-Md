import db from '../lib/database.js'

let handler = async(m, { command }) => {
     if (!m.quoted) throw 'Reply sticker!'
     if (!m.quoted.fileSha256) throw 'Reply the sticker!'
     let hash = m.quoted.fileSha256.toString('hex')
     let sticker = db.data.sticker
     if (!(hash in sticker)) throw 'The sticker does not exist in the database.'
     sticker[hash].locked = !/^un/i.test(command)
     m.reply('Success!')
}
handler.help = ['un', ''].map(v => v + 'lockcmd')
handler.tags = ['database']
handler.command = /^(un)?lockcmd$/i

handler.premium = true

export default handler