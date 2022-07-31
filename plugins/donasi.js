let handler =  m => m.reply(`
╭─「 Donation  」
│ • 
│ • 
╰────

╭─「 Donation 」
│ • https:
│ • 
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
