let handler = async(m) => m.reply(`
*Question:* ${m.text}
*Answers:* ${['Yes', 'Probably yes', 'Probably', 'Probably not', 'No', 'No way'].getRandom()}
   `.trim(), null, m.mentionedJid ? {
   mentions: m.mentionedJid
} : {})

handler.help = ['what is <text>?']
handler.tags = ['shells', 'fun']
handler.customPrefix = /(\?$)/
handler.command = /^is$/i

export default handler