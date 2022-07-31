import { smsg } from './lib/simple.js'
import { plugins } from './lib/plugins.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'
import Connection from './lib/connection.js'
import printMessage from './lib/print.js'
import Helper from './lib/helper.js'
import db, { loadDatabase } from './lib/database.js'
import Queque from './lib/queque.js'
import moment from 'moment-timezone'

// const { proto } = (await import('@adiwajshing/baileys')).default
const { resize } = (await import('./lib/scrape.js')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))
const readMore = String.fromCharCode(8206).repeat(4001)

global.fla = [                 
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=50&doScale=true&scaleWidth=300&scaleHeight=300&text=",               
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&fontsize=50&doScale=true&scaleWidth=300&scaleHeight=300&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=style-logo&fontsize=50&doScale=true&scaleWidth=300&scaleHeight=300&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=blackbird-logo&fontsize=50&doScale=true&scaleWidth=300&scaleHeight=300&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=genius-logo&fontsize=50&doScale=true&scaleWidth=300&scaleHeight=300&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=cloud-logo&fontsize=50&doScale=true&scaleWidth=300&scaleHeight=300&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=glow-logo&fontsize=50&doScale=true&scaleWidth=300&scaleHeight=300&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=emperor-logo&fontsize=50&doScale=true&scaleWidth=300&scaleHeight=300&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=moon-logo&fontsize=50&doScale=true&scaleWidth=300&scaleHeight=300&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=magazine-logo&fontsize=50&doScale=true&scaleWidth=300&scaleHeight=300&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fun-logo&fontsize=50&doScale=true&scaleWidth=300&scaleHeight=300&text="
]

/**
 * Handle messages upsert
 * @this {import('./lib/connection').Socket}
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.upsert']} chatUpdate
 */
export async function handler(chatUpdate) {
    this.msgqueque = this.msgqueque || new Queque()
    if (!chatUpdate)
        return
    let m = chatUpdate.messages[chatUpdate.messages.length - 1]
    if (!m)
        return
    if (db.data == null)
        await loadDatabase()
    try {
        m = smsg(this, m) || m
        if (!m)
            return
        m.exp = 0
        m.limit = false
        try {
            // TODO: use loop to insert data instead of this
            let user = db.data.users[m.sender]
            if (typeof user !== 'object')
                db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.lastclaim))
                    user.lastclaim = 0
                if (!('registered' in user))
                    user.registered = false
                if (!user.registered) {
                    if (!('name' in user))
                        user.name = m.name
                    if (!isNumber(user.age))
                        user.age = -1
                    if (!isNumber(user.regTime))
                        user.regTime = -1
                }
                
                if (!isNumber(user.afk))
                    user.afk = -1
                if (!('afkReason' in user))
                    user.afkReason = ''
                if (!('banned' in user))
                    user.banned = false
                if (!isNumber(user.warn))
                    user.warn = 0
                if (!isNumber(user.call))
                    user.call = 0
                if (!isNumber(user.level))
                    user.level = 0
                if (!isNumber(user.atm))
                    user.atm = 0
                if (!('role' in user))
                    user.role = 'Beginner'
                if (!('autolevelup' in user))
                    user.autolevelup = true
                if (!('langsimi' in user)) 
                    user.langsimi = ''
                if (!('language' in user)) 
                    user.language = 'en'
                if (!('languageCountry' in user)) 
                    user.languageCountry = 'English'
                if (!('owner' in user)) 
                    user.owner = false
                if (!isNumber(user.ownerTime))
                    user.ownerTime = 0
                if (!('premium' in user)) 
                    user.premium = false
                if (!isNumber(user.premiumTime))
                    user.premiumTime = 0
                if (!('moderator' in user)) 
                    user.moderator = false
                if (!isNumber(user.moderatorTime)) 
                    user.moderatorTime = 0
                if (!('simi' in user)) 
                    user.simi = false 

                if (!isNumber(user.exp))
                    user.exp = 0
                if (!isNumber(user.money))
                    user.money = 0
                if (!isNumber(user.health))
                    user.health = 100
                if (!isNumber(user.limit))
                    user.limit = 10
                if (!isNumber(user.potion))
                    user.potion = 0
                if (!isNumber(user.trash))
                    user.trash = 0
                if (!isNumber(user.wood))
                    user.wood = 0
                if (!isNumber(user.rock))
                    user.rock = 0
                if (!isNumber(user.string))
                    user.string = 0
                if (!isNumber(user.petFood))
                    user.petFood = 0

                if (!isNumber(user.emerald))
                    user.emerald = 0
                if (!isNumber(user.diamond))
                    user.diamond = 0
                if (!isNumber(user.gold))
                    user.gold = 0
                if (!isNumber(user.iron))
                    user.iron = 0

                if (!isNumber(user.common))
                    user.common = 0
                if (!isNumber(user.uncommon))
                    user.uncommon = 0
                if (!isNumber(user.mythic))
                    user.mythic = 0
                if (!isNumber(user.legendary))
                    user.legendary = 0
                if (!isNumber(user.pet))
                    user.pet = 0

                if (!isNumber(user.horse))
                    user.horse = 0
                if (!isNumber(user.horseexp))
                    user.horseexp = 0
                if (!isNumber(user.cat))
                    user.cat = 0
                if (!isNumber(user.catexp))
                    user.catexp = 0
                if (!isNumber(user.fox))
                    user.fox = 0
                if (!isNumber(user.foxhexp))
                    user.foxexp = 0
                if (!isNumber(user.dog))
                    user.dog = 0
                if (!isNumber(user.dogexp))
                    user.dogexp = 0

                if (!isNumber(user.horselastfeed))
                    user.horselastfeed = 0
                if (!isNumber(user.catlastfeed))
                    user.catlastfeed = 0
                if (!isNumber(user.foxlastfeed))
                    user.foxlastfeed = 0
                if (!isNumber(user.doglastfeed))
                    user.doglastfeed = 0

                if (!isNumber(user.armor))
                    user.armor = 0
                if (!isNumber(user.armordurability))
                    user.armordurability = 0
                if (!isNumber(user.sword))
                    user.sword = 0
                if (!isNumber(user.sworddurability))
                    user.sworddurability = 0
                if (!isNumber(user.pickaxe))
                    user.pickaxe = 0
                if (!isNumber(user.pickaxedurability))
                    user.pickaxedurability = 0
                if (!isNumber(user.fishingrod))
                    user.fishingrod = 0
                if (!isNumber(user.fishingroddurability))
                    user.fishingroddurability = 0

                if (!isNumber(user.lastclaim))
                    user.lastclaim = 0
                if (!isNumber(user.lastadventure))
                    user.lastadventure = 0
                if (!isNumber(user.lastfishing))
                    user.lastfishing = 0
                if (!isNumber(user.lastdungeon))
                    user.lastdungeon = 0
                if (!isNumber(user.lastduel))
                    user.lastduel = 0
                if (!isNumber(user.lastmining))
                    user.lastmining = 0
                if (!isNumber(user.lasthunt))
                    user.lasthunt = 0
                if (!isNumber(user.lastweekly))
                    user.lastweekly = 0
                if (!isNumber(user.lastmonthly))
                    user.lastmonthly = 0
            } else
                db.data.users[m.sender] = {
                    exp: 0,
                    lastclaim: 0,
                    registered: false,
                    name: m.name,
                    age: -1,
                    regTime: -1,
                    
                    afk: -1,
                    afkReason: '',
                    banned: false,
                    warn: 0,
                    call: 0,
                    level: 0,
                    role: 'Beginner',
                    autolevelup: true,
                    langsimi: '',
                    language: 'en', 
                    languageCountry: 'English', 
                    owner: false,
                    ownerTime: 0,
                    moderator: false,
                    moderatorTime: 0,
                    premium: false,
                    premiumTime: 0,
                    simi: false,

                    money: 0,
                    health: 100,
                    limit: 10,
                    exp: 0,
                    potion: 10,
                    trash: 0,
                    wood: 0,
                    rock: 0,
                    string: 0,

                    emerald: 0,
                    diamond: 0,
                    gold: 0,
                    iron: 0,

                    common: 0,
                    uncommon: 0,
                    mythic: 0,
                    legendary: 0,
                    pet: 0,

                    horse: 0,
                    horseexp: 0,
                    cat: 0,
                    catngexp: 0,
                    fox: 0,
                    foxexp: 0,
                    dog: 0,
                    dogexp: 0,

                    horselastfeed: 0,
                    catlastfeed: 0,
                    foxlastfeed: 0,
                    doglastfeed: 0,

                    armor: 0,
                    armordurability: 0,
                    sword: 0,
                    sworddurability: 0,
                    pickaxe: 0,
                    pickaxedurability: 0,
                    fishingrod: 0,
                    fishingroddurability: 0,

                    lastclaim: 0,
                    lastadventure: 0,
                    lastfishing: 0,
                    lastdungeon: 0,
                    lastduel: 0,
                    lastmining: 0,
                    lasthunt: 0,
                    lastweekly: 0,
                    lastmonthly: 0,
                }
            let chat = db.data.chats[m.chat]
            if (typeof chat !== 'object')
                db.data.chats[m.chat] = {}
            if (chat) {
            	if (!('asDocument' in chat)) 
                    chat.asDocument = false
                if (!('name' in chat)) 
                    chat.name = await this.getName(m.chat)
                if (!('only' in chat)) 
                    chat.only = false
                if (!isNumber(chat.onlyNumber)) 
                    chat.onlyNumber = 62
                if (!('closeGroup' in chat))
                    chat.closeGroup = false
                if (!isNumber(chat.closeTime)) 
                    chat.closeTime = 23
                if (!('openGroup' in chat)) 
                    chat.openGroup = false
                if (!isNumber(chat.openTime)) 
                    chat.openTime = 5 
                if (!('isBanned' in chat))
                    chat.isBanned = false
                if (!('welcome' in chat))
                    chat.welcome = true
                if (!('detect' in chat))
                    chat.detect = true
                if (!('sWelcome' in chat))
                    chat.sWelcome = ''
                if (!('sBye' in chat))
                    chat.sBye = ''
                if (!('sPromote' in chat))
                    chat.sPromote = ''
                if (!('sDemote' in chat))
                    chat.sDemote = ''
                if (!('delete' in chat))
                    chat.delete = false
                if (!('antidelete' in chat))
                    chat.antidelete = true
                if (!('antiLink' in chat))
                    chat.antiLink = false
                if (!('sticker' in chat))
                    chat.sticker = false
                if (!('antiToxic' in chat))
                    chat.antiToxic = false
                if (!('antivirus' in chat)) 
                    chat.antivirus = true
                if (!('antiviewonce' in chat)) 
                    chat.antiviewonce = true
                if (!('autodownload' in chat)) 
                    chat.autodownload = true
                if (!('getmsg' in chat)) 
                    chat.getmsg = true
                if (!('nsfw' in chat)) 
                    chat.nsfw = false
                if (!('mature' in chat)) 
                    chat.mature = false
                if (!('game' in chat)) 
                    chat.game = true
                if (!('rpg' in chat)) 
                    chat.rpg = true
                if (!('simi' in chat)) 
                    chat.simi = false 
                if (!isNumber(chat.expired))
                    chat.expired = 0
            } else
                db.data.chats[m.chat] = {
                    asDocument: false, 
                    name: await this.getName(m.chat),
                    only: false,
                    onlyNumber: 62,
                    closeGroup: false,
                    closeTime: 23,
                    openGroup: false, 
                    openTime: 5,
                    isBanned: false,
                    welcome: true,
                    detect: true,
                    sWelcome: '',
                    sBye: '',
                    sPromote: '',
                    sDemote: '',
                    delete: false,
                    antidelete: true,
                    antiLink: false,
                    antiToxic: true,
                    antivirus: true,
                    antiviewonce: true,
                    autodownload: true, 
                    getmsg: true, 
                    nsfw: false,
                    mature: false, 
                    game: true, 
                    rpg: true, 
                    simi: false,
                    expired: 0
                }
            let settings = db.data.settings[this.user.jid]
            if (typeof settings !== 'object') db.data.settings[this.user.jid] = {}
            if (settings) {
                 if (!'anon' in settings) settings.anon = true
                 if (!'autoread' in settings) settings.autoread = false
                 if (!'autoreadsw' in settings) settings.autoreadsw = false
                 if (!'autotyping' in settings) settings.autotyping = false
                 if (!'anticall' in settings) settings.anticall = false
                 if (!'antispam' in settings) settings.antispam = true
                 if (!'backup' in settings) settings.backup = false
                 if (!'autocleartmp' in settings) settings.autocleartmp = true
                 if (!'autodownload' in settings) settings.autodownload = true
                 if (!'developerMode' in settings) settings.developerMode = true
                 if (!'delete' in settings) settings.delete = false
                 if (!'antidelete' in settings) settings.antidelete = true
                 if (!'jadibot' in settings) settings.groupOnly = false
                 if (!'nsfw' in settings) settings.nsfw = true
                 if (!'mature' in settings) settings.mature = true
                 if (!'statusUpdate' in settings) settings.statusUpdate = false
                 if (!'antivirus' in settings) settings.antivirus = true
                 if (!'publicjoin' in settings) settings.publicjoin = true
                 if (!'game' in settings) settings.game = true
                 if (!'rpg' in settings) settings.game = true
                 if (!'getmsg' in settings) settings.getmsg = true
             } else 
                 db.data.settings[this.user.jid] = {
                    anon: true,
                    autoread: false, 
                    autoreadsw: false, 
                    autotyping: false, 
                    anticall: false,
                    antispam: true,
                    backup: true,
                    autocleartmp: true, 
                    autodownload: true, 
                    developerMode: true, 
                    delete: false,
                    antidelete: true,
                    jadibot: false,
                    nsfw: true,
                    mature: true,
                    statusUpdate: false,
                    antivirus: true,
                    publicjoin: true,
                    game: true, 
                    rpg: true, 
                    getmsg: true,
             }
        } catch (e) {
            console.error(e)
        }
        const isROwner = [this.decodeJid(this.user.id), ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        if (opts['nyimak'])
            return
        if (opts['self'] && !isROwner)
            return
        if (opts['pconly'] && !m.chat.endsWith('@s.whatsapp.net'))
            return
        if (opts['gconly'] && !m.chat.endsWith('@g.us'))
            return
        if (opts['swonly'] && m.chat !== 'status@broadcast')
            return
        if (typeof m.text !== 'string')
            m.text = ''
	    
        const isOwner = isROwner || m.fromMe
        const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPrems = isOwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        
        if (opts['queque'] && m.text && !m.fromMe && !(isMods || isPrems)) {
            const id = m.id
            this.msgqueque.add(id)
            await this.msgqueque.waitQueue(id)
        }

        if (m.isBaileys)
            return
        m.exp += Math.ceil(Math.random() * 10)

        let usedPrefix
        let _user = db.data?.users?.[m.sender]

        const groupMetadata = (m.isGroup ? await Connection.store.fetchGroupMetadata(m.chat, this.groupMetadata) : {}) || {}
        const ownerGroup = (m.isGroup ? groupMetadata.owner : '') || ''
        const participants = (m.isGroup ? groupMetadata.participants : []) || []
        const user = (m.isGroup ? participants.find(u => this.decodeJid(u.id) === m.sender) : {}) || {} // User Data
        const bot = (m.isGroup ? participants.find(u => this.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
        const isRAdmin = user?.admin == 'superadmin' || false
        const isAdmin = isRAdmin || user?.admin == 'admin' || false // Is User Admin?
        const isBotAdmin = bot?.admin || false // Are you Admin?

        const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')
        for (let name in plugins) {
            let plugin = plugins[name]
            if (!plugin)
                continue
            if (plugin.disabled)
                continue
            const __filename = join(___dirname, name)
            if (typeof plugin.all === 'function') {
                try {
                    await plugin.all.call(this, m, {
                        chatUpdate,
                        __dirname: ___dirname,
                        __filename
                    })
                } catch (e) {
                    // if (typeof e === 'string') continue
                    console.error(e)
                    for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await this.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                            m.reply(`*Plugin:* ${name}\n*Sender:* ${m.sender}\n*Chat:* ${m.chat}\n*Command:* ${m.text}\n\n\`\`\`${format(e)}\`\`\``.trim(), data.jid)
                    }
                }
            }
            /* if (!opts['restrict'])
                if (plugin.tags && plugin.tags.includes('admin')) {
                    // global.dfail('restrict', m, this)
                    continue
                } */
            const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
            let _prefix = plugin.customPrefix ? plugin.customPrefix : this.prefix ? this.prefix : global.prefix
            let match = (_prefix instanceof RegExp ? // RegExp Mode?
                [[_prefix.exec(m.text), _prefix]] :
                Array.isArray(_prefix) ? // Array?
                    _prefix.map(p => {
                        let re = p instanceof RegExp ? // RegExp in Array?
                            p :
                            new RegExp(str2Regex(p))
                        return [re.exec(m.text), re]
                    }) :
                    typeof _prefix === 'string' ? // String?
                        [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
                        [[[], new RegExp]]
            ).find(p => p[1])
            if (typeof plugin.before === 'function') {
                if (await plugin.before.call(this, m, {
                    match,
                    conn: this,
                    ownerGroup,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }))
                    continue
            }
            if (typeof plugin !== 'function')
                continue
            if ((usedPrefix = (match[0] || '')[0])) {
                let noPrefix = m.text.replace(usedPrefix, '')
                let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
                args = args || []
                let _args = noPrefix.trim().split` `.slice(1)
                let text = _args.join` `
                command = (command || '').toLowerCase()
                let fail = plugin.fail || global.dfail // When failed
                let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
                    plugin.command.test(command) :
                    Array.isArray(plugin.command) ? // Array?
                        plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                            cmd.test(command) :
                            cmd === command
                        ) :
                        typeof plugin.command === 'string' ? // String?
                            plugin.command === command :
                            false

                if (!isAccept)
                    continue
                m.plugin = name
                if (m.chat in db.data.chats || m.sender in db.data.users) {
                    let chatx = db.data.chats[m.chat]
                    let userx = db.data.users[m.sender]
		            if (!['owner-unban.js', 'info-creator.js', 'info-listban.js'].includes(name) && chatx && chatx?.isBanned && !isPrems) return // Kecuali ini, bisa digunakan
                    if (!['owner-unban.js', 'info-creator.js', 'info-listban.js'].includes(name) && userx && userx?.banned) return 
                }
                if (plugin.rowner && !isROwner) { // Real Owner
                    fail('rowner', m, this)
                    continue
                }
                if (plugin.owner && !isOwner && !isROwner) { // Owner UserJid
                    fail('owner', m, this)
                    continue
                }
                if (plugin.mods && !isMods) { // Moderator
                    fail('mods', m, this)
                    continue
                }
                if (plugin.premium && !isPrems) { // Premium
                    fail('premium', m, this)
                    continue
                }
                if (plugin.group && !m.isGroup) { // Group Only
                    fail('group', m, this)
                    continue
                } 
                if (plugin.botAdmin && !isBotAdmin) { // You Admin
                    fail('botAdmin', m, this)
                    continue
                }
                if (plugin.admin && !isAdmin && !m.fromOwner && !m.fromMe) { // User Admin
                    fail('admin', m, this)
                    continue
                }
                if (plugin.restrict && !opts['restrict'] && !m.fromOwner && !m.fromMe) { // Restrict
                    fail('restrict', m, this)
                    continue
                } 
                if (plugin.private && m.isGroup) { // Private Chat Only
                    fail('private', m, this)
                    continue
                }
                if (plugin.register == true && _user.registered == false) { // Need register?
                    fail('unreg', m, this)
                    continue
                }
                if (plugin.desc && text.startsWith('-')) { //Plugin description 
                    m.reply(plugin.desc.toString())
                    continue 
                } 
                if (plugin.rpg && !(m.isGroup ? db.data.chats[m.chat].rpg : db.data.settings[this.user.jid].rpg)) { // RPG mode
                    fail('rpg', m, this)
                    continue
                }
                if (plugin.game && !(m.isGroup ? db.data.chats[m.chat].game : db.data.settings[this.user.jid].game)) { // Game mode
                    fail('game', m, this)
                    continue
                }
                if (plugin.nsfw && !(m.isGroup ? db.data.chats[m.chat].nsfw : db.data.settings[this.user.jid].nsfw)) { // NSFW mode
                    fail('nsfw', m, this)
                    continue
                }
                if (plugin.mature && !(m.isGroup ? db.data.chats[m.chat].mature : db.data.settings[this.user.jid].mature)) { // Mature mode
                    fail('mature', m, this)
                    continue
                }
                if (plugin.download && !(m.isGroup ? db.data.chats[m.chat].download : db.data.settings[this.user.jid].download)) { // Download mode
                    fail('download', m, this)
                    continue
                }
                m.isCommand = true
                let xp = 'exp' in plugin ? parseInt(plugin.exp) : 20 // XP Earning per command
                if (xp > 200)
                    m.reply('Ngecit -_-') // Hehehe
                else
                    m.exp += xp
                    if (!isPrems && plugin.limit && db.data.users[m.sender].limit < plugin.limit * 1) {
                        this.sendButton(m.chat, `Your limit is out, please buy via *${usedPrefix}buy*`, wm, null, [['Buy', '#buy1']], m)
                        continue // Limit expired
                    }
                    if (plugin.level > _user.level) {
                        this.sendButton(m.chat, `Required level *${plugin.level}* to use this command. Your level *${_user.level}*`, wm, null, [['Level Up', '#levelup ']], m)
                        continue // If the level has not been reached
                    }
                let extra = {
                    match,
                    usedPrefix,
                    noPrefix,
                    _args,
                    args,
                    command,
                    text,
                    conn: this,
                    ownerGroup,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }
                try {
                    await plugin.call(this, m, extra)
                    if (!isPrems)
                        m.limit = m.limit || plugin.limit || false
                } catch (e) {
                    // Error occured
                    m.error = e
                    console.error(e)
                    if (e) {
                        let text = format(e)
                        for (let key of Object.values(global.APIKeys))
                            text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
                        if (e.name) {
                            let devmode = db.data.settings[this.user.jid].developerMode
                            if (devmode) return this.reply(owner[0]+'@s.whatsapp.net', `*ERROR!*\n\nPesan : ${m.text}\n\n\n\n*Plugin:* ${m.plugin}\n*Sender:* @${m.sender.split`@`[0]}\n*Chat:* ${m.chat}\n*Chat Name:* ${await this.getName(m.chat)}\n*Command:* ${usedPrefix + command} ${args.join(' ')}\n\n\`\`\`${text}\`\`\``.trim(), m, { mentions: [m.sender] })
                            .then(_=> m.react('❌') )
                            else return this.reply(m.chat, text, m)
                        }
                        let ras = await m.reply(text, m.chat, { mentions: this.parseMention(text) })
                        m.react('❌').then(_=> this.react(m.chat, '❗', ras.key) )
                    }
                } finally {
                    // m.reply(util.format(_user))
                    if (typeof plugin.after === 'function') {
                        try {
                            await plugin.after.call(this, m, extra)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    /* if (m.limit)
                        m.reply(+m.limit + ' Limit terpakai') */
                }
                break
            }
        }
    } catch (e) {
        console.error(e)
    } finally {
        if (opts['queque'] && m.text) {
            const id = m.id
            this.msgqueque.unqueue(id)
        }
        //console.log(db.data.users[m.sender])
        let user, stats = db.data.stats
        if (m) {
            if (m.sender && (user = db.data.users[m.sender])) {
                user.exp += m.exp
                user.limit -= m.limit * 1
            }

            let stat
            if (m.plugin) {
                let now = +new Date
                if (m.plugin in stats) {
                    stat = stats[m.plugin]
                    if (!isNumber(stat.total))
                        stat.total = 1
                    if (!isNumber(stat.success))
                        stat.success = m.error != null ? 0 : 1
                    if (!isNumber(stat.last))
                        stat.last = now
                    if (!isNumber(stat.lastSuccess))
                        stat.lastSuccess = m.error != null ? 0 : now
                } else
                    stat = stats[m.plugin] = {
                        total: 1,
                        success: m.error != null ? 0 : 1,
                        last: now,
                        lastSuccess: m.error != null ? 0 : now
                    }
                stat.total += 1
                stat.last = now
                if (m.error == null) {
                    stat.success += 1
                    stat.lastSuccess = now
                }
            }
        }

        try {
            if (!opts['noprint']) await printMessage(m, this)
        } catch (e) {
            console.log(m, m.quoted, e)
        }
        if (db.data.settings[this.user.jid].autoreadsw) if (m.key.remoteJid === 'status@broadcast') this.readMessages([m.key]).then(_=> { console.log(`SW : ${m.name}`) })
            if (db.data.settings[this.user.jid].autoread) {
                if (!m.isGroup) {
                    if (m.isCommand) this.readMessages([m.key])
                } else this.readMessages([m.key])
         } 

    }
}

/**
 * Handle groups participants update
 * @this {import('./lib/connection').Socket}
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate 
 */
 export async function participantsUpdate({ id, participants, action }) {
    if (opts['self']) return
    // if (this.isInit) return
    if (db.data == null) await loadDatabase()
    let chat = db.data.chats[id]
    let ppstres = 'https://telegra.ph/file/01615b2470978183a85ff.jpg'
    let text = ''
    switch (action) {
        case 'add':
        case 'remove':
            if (chat.welcome) {
                let groupMetadata = await this.groupMetadata(id) // Connection.store.fetchGroupMetadata(id, this.groupMetadata)
                for (let user of participants) {
                    let pp = ppstres
                    try {
                        pp = await this.profilePictureUrl(user, 'image')
                    } catch (e) {
			    
                    } finally {
                        let ppbuf = await (await fetch(pp)).buffer()
                        let ppres = await resize(ppbuf, 300, 300)
                        text = (action === 'add' ? (chat.sWelcome || this.welcome || Connection.conn.welcome || 'Welcome, @user!').replace('@subject', await this.getName(id)).replace('@desc', groupMetadata.desc?.toString() || '') :
                            (chat.sBye || this.bye || Connection.conn.bye || 'Bye, @user!')).replace('@user', '@' + user.split('@')[0])
                            if (action == 'add') if (user.includes(this.decodeJid(this.user.jid))) return this.reply(id, `Hello everyone \n\nI am *${this.user. name}* WhatsApp bot that will help you make things easier such as making stickers and others, to use the bot feature please type *#menu*`, { key: {
			    fromMe: false,
			    participant: "0@s.whatsapp.net", 
			    remoteJid: "status@broadcast"
		        },
	                message: {
			  videoMessage: {
                            title: "anu",
                            seconds: "400000271", 
                            gifPlayback: true, 
                            caption: wm,
                            jpegThumbnail: ppres
			  }
		        } 
			}, { mentions: groupMetadata.participants.map(v => v.id) })
            if (action == 'add') if(db.data.chats[id].only) {
                if (!user.startsWith(db.data.chats[id].onlyNumber)) {
                    this.reply(id, `Sorry @${user.split`@`[0]}, this group is for people only *+${global.db.data.chats[id].onlyNumber}* you will be kicked out from this group *Goodbye! *\n`, {
                        key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' }, message: { contactMessage: { displayName: `${this.getName(user)}`, vcard: `BEGIN: VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${user}\nitem1.TEL;waid=${user.split('@')[0]}:${user. split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`}}},
                        { mentions: [user] })
                    await delay(3000)
                                return await this.groupParticipantsUpdate(id, [user], "remove")
                            }
                        }
			let td = pickRandom([
                          'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                          'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 
                          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                          'application/pdf',
                          'text/rtf'
                        ])
                        if (action == 'add') { 
                            const NgeriAtmin = (participants) => {
                            let atminn = []
			      for (let b of participants) {
				   b.admin === "admin" ? atminn.push(b.id) : ''
				   b.admin === "superadmin" ? atminn.push(b.id) : ''
                            }
                            return atminn
                        }
                        let mimin = NgeriAtmin(groupMetadata.participants)
                        let jumatmin = mimin.length
                        let jummember = groupMetadata.participants.length - jumatmin
                        let jumlahnya = jumatmin + jummember
                        let nama = this.getName(user)
                        let tag = user.split('@')[0]
                        let bi 
                        try { 
                           bi = await this.fetchStatus(user)
                           var bio = bi.status
                        } catch { bio = 'Not bio yet'}
                        let d = new Date(new Date + 3600000)
                        let date = d.toLocaleDateString('id', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })
                        let time = moment.tz('Asia/Kolkata').format("HH:mm:ss")
                        var footer = `\n🐤 : ${nama}\n🐋 : @${tag}\n🌹 : ${bio}\n📆 : ${date}\n⏰ : ${time} Asia/Kolkata\n\n👑 Admins : ${jumatmin}\n👥 Members : ${jummember}\n🕊 Total ${jumlahnya} Participants\n`
                        }
                        await this.sendButton(id, text, action === 'add' ? footer : wm, pp, [[action === 'add' ? 'Welcome' : 'Goodbye', '']], {                      
                            key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' }, message: { contactMessage: { displayName: `${this.getName(user)}`, vcard: `BEGIN: VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${user}\nitem1.TEL;waid=${user.split('@')[0]}:${user.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}},
                            { 
                              document: { url: pp },
                              jpegThumbnail: await (await fetch("https://telegra.ph/file/01615b2470978183a85ff.jpg")).buffer(), 
                              fileName: action === 'add' ? `Welcome ${this.getName(user)} 😉` : `Goodbye ${this.getName(user)} 😙`, mimetype: td, fileLength: 9999999999999, pageCount: 9999999999999,
                              ephemeralExpiration: 86400 / 48,
                              mentions: [user],
                              contextInfo: {
                              externalAdReply :{
                                 showAdAttribution: true,
                                 mediaUrl: "https://www.instagram.com/ani._.rudh_s/",
                                 mediaType: 2,
                                 description: '', 
                                 title: this.user.name,
                                 body: wm,
                                 thumbnail: await(await fetch(pp)).buffer(),
                                 sourceUrl: ""
                              }
			   }
                       })
                    }
                }
            }
            break
        case 'promote':
            text = (chat.sPromote || this.spromote || Connection.conn.spromote || '@user ```is now Admin```')
        case 'demote':
            if (!text) text = (chat.sDemote || this.sdemote || Connection.conn.sdemote || '@user ```is no longer Admin```')
            text = text.replace('@user', '@' + participants[0].split('@')[0])
            if (chat.detect) {
                 let pp = ppstres
                 try {
                     pp = await this.profilePictureUrl(participants[0], 'image')
                 } catch (e) {
				
                 } finally {
                      let pbuf = await (await fetch(pp)).buffer()
		      let ppres = await resize(pbuf, 300, 300)
                      this.sendMessage(id, {
                           text: text,
                           mentions: [participants[0]],
                           jpegThumbnail: ppres
                      }, {
                      quoted: {
                        key: {
                            fromMe: false,
                            participant: '0@s.whatsapp.net',
                            remoteJid: "status@broadcast"
                        },
                        message: {
                            conversation: action === 'promote' ? 'Ciee naik jabatan 🐤' : 'Mampus beliau ini turun tahta awikwok 🏃‍♂'
                        }
                     }
                   })
                }
            }
            break
    }
} 

/**
 * Handle groups update
 * @this {import('./lib/connection').Socket}
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate 
 */
export async function groupsUpdate(groupsUpdate, fromMe) {
    if (opts['self'] && fromMe) return
    for (const groupUpdate of groupsUpdate) {
        const id = groupUpdate.id
        if (!id) continue
        let chats = db.data.chats[id], text = ''
        let hid = await this.groupMetadata(id)
        let member = hid.participants.map(v => v.id)
        if (!chats.detect) continue
        if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || Connection.conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc)
        if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || Connection.conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject)
        if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || Connection.conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon)
        if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || Connection.conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke)
        if (groupUpdate.announce == true) text = (chats.sAnnounceOn || this.sAnnounceOn || Connection.conn.sAnnounceOn || '```Group has been closed!```')
        if (groupUpdate.announce == false) text = (chats.sAnnounceOff || this.sAnnounceOff || Connection.conn.sAnnounceOff || '```Group has been open!```')
        if (groupUpdate.restrict == true) text = (chats.sRestrictOn || this.sRestrictOn || Connection.conn.sRestrictOn || '```Group has been only admin!```')
        if (groupUpdate.restrict == false) text = (chats.sRestrictOff || this.sRestrictOff || Connection.conn.sRestrictOff || '```Group has been all participants!```')
        if (!text) continue
        this.sendHydrated(id, "\n               *「 DETECTION 」*\n\n" + text, wm, fla + 'detection', 'People Prank Tutorial 😎', null, null, [[]], null, { asLocation: true, mentions: member })
    }
}

/**
 * @this {import('./lib/connection').Socket}
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.delete']} message 
 */
export async function deleteUpdate(message) {
    if (message.keys && Array.isArray(message.keys)) {
        try {
            for (const key of message.keys) {
                if (key.fromMe) continue
                const msg = Connection.store.loadMessage(key.id)
                if (!msg) continue
                let chat = db.data.chats[msg.key.remoteJid]
                if (!chat.antidelete) continue
                const participant = msg.participant || msg.key.participant || msg.key.remoteJid
                let caption = `
Detected @${participant.split`@`[0]} has deleted message
To turn off this feature, type
*.off antidelete*
`
                this.sendButton(msg.key.remoteJid, await this.trans(caption), wm, fla + "antidelete", [['Off Antidelete', '.off antidelete']], msg, {
                   mentions: [participant], asLocation: true
                }).then(_=> {
                   this.copyNForward(msg.key.remoteJid, msg).catch(e => console.log(e, msg))
                })
            }
        } catch (e) {
            console.error(e)
        }
    }
}

export async function onCall(json) {
    //console.log({ json })
    if (opts['self']) return 
    if (!db.data.settings[this.user.jid].anticall) return
    if (json.content[0].tag == 'offer') { 
        let typeCall = json.content[0].content[0].tag
        let callerId = json.content[0].attrs['call-creator']
        let user = db.data.users[callerId]
        if (user.whitelist) return
        switch (this.callWhitelistMode) {
             case 'mycontact':
             if (callerId in this.contacts && 'short' in this.contacts[callerId]) return
             break
        }
        let kontakk = [
          [
            `${owner[0]}`, 
            `${this.getName(owner[0]+'@s.whatsapp.net')}`,
            `👑 Developer Bot `,
            `🚫 Don't call me 🥺`, 
            `Not yet`,
            `IN India`,
            `You get blocked, so don't just call"`,
            `Folllow ig @ani._.rudh_s for open blocked`
          ], 
        ]
        user.call += 1
         if (user.call == 5) {
             let sentMsg = await this.sendContactArray(callerId, contact)
             this.reply(callerId, `Auto block system, don't call bot please contact owner to open!`, sentMsg).then(_=> {
             this.updateBlockStatus(callerId, 'block')}).then(_=> {
                user.call = 0 }).then(_=> {
                   this.reply(owner[0]+'@s.whatsapp.net', `*NOTIF CALLER BOT!*\n\n@${callerId.split`@`[0]} has called *${this.user .name}*\n\n ${callerId.split`@`[0]}\n`, null, { mentions: [callerId] })
                })
         } else this.sendHydrated(callerId, `Sorry can't receive calls, If you call more than 5, you will be blocked.\n\n${user.call} / 5`, wm, fla + "don't call" , null, null, null, null, [[null, null]], null, { asLocation: true })
     }
}

global.dfail = async (type, m, conn) => {
    let msg = {
        rowner: `This Command Only For @${global.owner[0]}`,
        owner: `This Command Only For @${global.owner[0]}`,
        mods: `This Command Only For *Moderator*`,
        moderator: `This Command is For *Moderator Only*` ,
        prems: `This Command Only For *Premium Users*`,
        premium: `This Command is For *Premium* Users Only`,
        group: `This command can only be used inside *group*`,
        private: `This Command Can Only Be Used In *Private Chat* @${conn.user.jid.split('@')[0]}`,
        admin: `This Command Only For *Admin* Group`,
        botAdmin: `This Command Activates When *Bot* Becomes *Admin*`,
        unreg: `Not yet *Registered,* Please Register By Typing *#register name.age*\n\nExample: *#register ${m.name}.17*`,
        mature: `The *ADULT* feature is not active. Please contact @${global.owner[0]} to activate it`,
        nsfw: `Feature *NSFW* Disabled Please Contact @${global.owner[0]} To Activate`,
        game: `*GAME* Feature Is Off Please Contact @${global.owner[0]} To Activate It`,
        rpg: `The *RPG* feature is not active. Please contact @${global.owner[0]} to activate it`,
        download: `Feature *Downloader* Inactive Please Contact @${global.owner[0]} To Activate It`,
        restrict: `Feature *Admin* Disabled Please Contact @${global.owner[0]} To Enable It`,
      }[type]
    if (msg) return conn.sendButton(m.chat, "\n *「 ACCESS DENIED 」*\n\n" + msg, wm, fla + "access denied", [['Menu', '.menu'] ], m, { asLocation: true, mentions: conn.parseMention(msg) })
}

let file = Helper.__filename(import.meta.url, true)
watchFile(file, async () => {
    unwatchFile(file)
    console.log(chalk.redBright("Update 'handler.js'"))
    if (Connection.reload) console.log(await Connection.reload(await Connection.conn))
}) 

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}


