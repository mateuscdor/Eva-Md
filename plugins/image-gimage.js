import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
    const res = await googleImage(text)
    conn.sendFile(m.chat, res.getRandom(), 'gimage.jpg', `
*── 「 GOOGLE IMAGE 」 ──*

Result from *${text}*
`.trim(), m)
}
handler.help = ['image <query>', 'img <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(img|image)$/i

export default handler