let handler = async (m, { conn, isROwner, text }) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
  if (conn.user.jid == conn.user.jid) {
  conn.sendButton(m.chat, 'Reactivate bot...', wm, 0, [['Ping', '.ping']]).then(_=> {
    process.send('reset')
  })
} else throw '_eeeeiiiittssss..._'
}

handler.help = ['restart']
handler.tags = ['host']
handler.command = /^(res(tart)?)$/i
handler.owner = true

export default handler