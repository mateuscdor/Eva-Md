import { execSync } from 'child_process'
import { readdirSync } from 'fs'

let handler = async (m, { conn, text, isROwner }) => {
  m.react('⚡')
  try {
    let stdout = execSync('git remote set-url origin https://github.com/SudoAnirudh/Eva-Md.git && git pull' + (isROwner && text ? ' ' + text : ''))
    // if (isROwner) readdirSync('plugins').map(v => reload('', v))
    conn.sendButton(m.chat, stdout.toString(), 'Node Test or Restart Bot?', 0, [['Restart', '.restart'], ['Node Test', '$ node test']], m)          
  } catch (e) {
    let sel = await conn.reply(m.chat, e, )
    m.react('❌').then(_=> conn.react(m.chat, '❗', sel.key) )
  }
}

handler.help = ['update']
handler.tags = ['host']
handler.command = /^(upd(a|e)te|uo?p?|uoda?e?te?)$/i //sedia payung sebelum hujan meteor 
handler.rowner = true

export default handler
