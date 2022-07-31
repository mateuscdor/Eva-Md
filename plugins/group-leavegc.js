import Connection from '../lib/connection.js'
let handler = async(m, { conn, args, command }) => {
    let chat = Object.keys(Connection.store.chats).filter(v => v.endsWith('g.us'))
    if (command.endsWith('all') || command.endsWith('semua')) {
        for (let id of chat) { // loop
            await conn.groupLeave(id)
            await delay(2000) // pause 2 seconds
        }
        await m.reply('Sucess!')
    } else if (args[0] || args.length > 5) {
        let ada = chat.find(bot => bot == args[0])
        if (!ada) throw  'wrong id/bot does not exist in that group'
        await conn.groupLeave(args[0])
        await m.reply('Sucess!')
    } else {
        if (!m.isGroup) return global.dfail('group', m, conn)
        await conn.groupLeave(m.chat)
    }

}

handler.help = ['gc', 'gcall', 'group'].map(v => 'leave' + v)
handler.tags = ['group']
handler.command = /^leaveg(c|ro?up)(all|all)?$/i

handler.rowner = true

export default handler

const delay = time => new Promise(res => setTimeout(res, time))