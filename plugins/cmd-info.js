import db from '../lib/database.js'

export default Object.assign(async function handler(m, { conn, text, isOwner }) {
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw `Reply the sticker!`
    let sticker = db.data.sticker[hash]
    if (!(hash in db.data.sticker)) return conn.sendButton(m.chat, 'The sticker does not exist in database.', wm, null, [['List Command', '.listcmd']], m )
    let caption = `
*Text* : ${sticker.text}
*Create* : ${new Date(sticker.at - (3600000 * 5)).toLocaleString()}
*Locked* : ${sticker.locked ? 'Yes' : 'No'}
*Name* : ${conn.getName(sticker.creator)}
*Number* : ${isOwner ? '@' : ''}${parseInt(sticker.creator)}
${sticker.mentionedJid.length > 0 ? `*Cmd Mention* :
${sticker.mentionedJid.map((v, i) => `No. *${i + 1}*:\n*Mention Name* : ${conn.getName(v)}\n*Mention Number* : ${parseInt(v)}\n*Mention Jid* : ${v}`).join('\n\n')}` : ''}
`.trim()
   conn.sendListM(m.chat, {
        titleRows: 'Delete sticker command?',
        titleText: '\n *「 INFO STICKER COMMAND 」*\n',
        textText: caption,
        footerText: wm,
        buttonText: 'Click Here'
    },
    [ {
        title: 'Delete',
        rowId: '.delcmd ' + hash,
        description: ''
      }
    ],m)
}, {
help: ['cmd'].map(v => 'info' + v + ' <reply>'),
tags: ['database'],
command: ['infocmd']
})