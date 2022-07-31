import db from '../lib/database.js'
const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i

export async function before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return 
    let chat = db.data.chats[m.chat]
    let isGroupLink = linkRegex.exec(m.text)
    if (chat.antiLink && isGroupLink && !m.isBaileys && m.isGroup) {
       if (!isBotAdmin) this.sendButton(m.chat, `\n               *「 ANTI LINK 」*\n\n${isAdmin ? `@${m.sender.split('@')[0]} Admin mah bebas ygy :"` : `Link group terdeteksi @${m.sender.split('@')[0]} telah mengirim link group dan ${this.user.name} bukan admin jadi gak bisa ngekick T_T`}\n`, wm, fla + "anti link", [['Off Antilink', '.off antilink']], m, { mentions: [m.sender], asLocation: true })
       if (isBotAdmin) {
          let [_, code] = m.text.match(linkRegex) 
          let thisGroup = await this.groupInviteCode(m.chat) 
          if (code.includes(thisGroup)) throw false  // jika link grup itu sendiri gak dikick
          this.sendButton(m.chat, `\n               *「 ANTI LINK 」*\n\n${isAdmin ? `@${m.sender.split('@')[0]} Admin mah bebas ygy :"` : `Link Group Terdeteksi, @${m.sender.split('@')[0]} telah mengirim link group lain!\n\n${isOwner ? 'Owh yg send link owner gua:" ngapain ngirim link group lain?' : 'cipp dapet jatah kick:v\n'}`}\n`, wm, fla + "anti link", [['Off Antilink']], m, { mentions: [m.sender], asLocation: true }).then(_=> {
            if (!isAdmin && !isOwner) this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
          })
       } 
    }
    return !0
}
