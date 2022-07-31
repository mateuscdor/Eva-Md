import db from '../lib/database.js'

let handler = async(m, { text, isOwner }) => {
     let hash = text
     if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
     if (!hash) throw `Reply the sticker!`
     let sticker = db.data.sticker
     if (!(hash in sticker)) throw 'The sticker does not exist in the database.'
     if (sticker[hash] && sticker[hash].locked && !isOwner) throw 'You do not have permission to delete this sticker command.'
     delete sticker[hash]
     m.reply(`Success!`)
}

handler.help = ['cmd'].map(v => 'del' + v + ' <reply>')
handler.tags = ['database']
handler.command = ['delcmd']

handler.limit = true

export default handler