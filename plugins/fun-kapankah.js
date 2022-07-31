let handler = async (m, { conn }) => conn.reply(m.chat, `
*Question:* ${m.text}
*Answer:* ${(10).getRandom()} ${['second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'decade', ' century'].getRandom()} again...
   `.trim(), m, m.mentionedJid ? {
     mentions: m.mentionedJid
} : { })

handler.help = ['', 'kah'].map(v => 'when' + v + ' <text>?')
handler.tags = ['shells', 'fun']
handler.customPrefix = /(\?$)/
handler.command = /^when(what)?$/i

export default handler