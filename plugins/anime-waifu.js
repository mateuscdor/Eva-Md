import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
    m.react('⏱️')
    let res = await (await fetch('https://api.waifu.pics/sfw/waifu')).json()
    conn.sendButton(m.chat, `${sYm} *Anime* : ${command}`, wm, res.url, [['Next', usedPrefix + command]], m)                    
}

handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu)$/i
handler.register = true
handler.limit = true

export default handler
