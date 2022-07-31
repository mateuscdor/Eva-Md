import db from '../lib/database.js'

export function before(m) {
    let user = db.data.users[m.sender]
    if (user.afk > -1) {
        let fkonn = {key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' }, message: { contactMessage: { displayName: m.name, vcard: `BEGIN: VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${'0@s.whatsapp.net'}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
        let caption = `\n                *「 STOP AFK 」*\n                 
${sYm} *Name* : ${m.name}
${sYm} *Tag* : @${m.sender.split`@`[0]}
${sYm} *Reason* : ${user.afkReason ? user.afkReason : 'No reason'}
${sYm} *During* : ${(new Date - user.afk).toTimeString()}
`
        this.sendButton(m.chat, caption, wm, fla + "stop afk", [[`Menu`, `.menu`]], fkonn, { mentions: [m.sender], asLocation: true })
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let userafk = db.data.users[jid]
        if (!userafk) continue
        let afkTime = userrafk.afk
        if (!afkTime || afkTime < 0) continue
        let reason = userrafk.afkReason || ''
        let caption = `\n *「 IN AFK *\n
Don't tag ${this.getName(jid)}
He's AFK ${reason ? 'with reason' + reason : 'without reason'}
As long as ${(new Date - afkTime).toTimeString()}
`
        this.sendButton(m.chat, caption, wm, fla + "in afk", [[`Menu`, `.menu`]], m, { asLocation: true })
        this.reply(jid, `Hello ${this.getName(jid)} someone was looking for you while you were AFK${user.afkReason ? ': ' + user.afkReason : ''}\n
${sYm} *Name* : ${m.name}
${sYm} *Tag* : @${m.sender.split('@')[0]}
${sYm} *Message* : 👇
`, m, {mentions: [m.sender]}).then(_=> {
        m.copyNForward(jid)
        })
    }
    return true
}