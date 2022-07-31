import db from '../lib/database.js'
import { plugins } from '../lib/plugins.js'
import { xpRange } from '../lib/levelling.js'
import { promises, readFileSync } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
const { resize } = (await import('../lib/scrape.js')).default 
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
const lIm = 'Ⓛ'
const pRm = 'Ⓟ'
let bdy = ['🔖', '🐋', '🕊', '🐤', '🌹', '🌱']
let bdyR = pickRandom(bdy)
let ctg = ['《 %category 》', '〘 %category 〙', '〔 %category 〕']
let ctgr = pickRandom(ctg)

const defaultMenu = {
  before: ``,
  header: `          *${ctgr}*\n`,
  body: `${bdyR} *%cmd* %islimit %isPremium\n`,
  footer: ``,
  after: ``,
}
let handler = async (m, { conn, usedPrefix: _p, command: _c, args, __dirname }) => {
  let em = pickRandom(['🙈', '🤡', '👌', '🐤', '🕊', '🍃', '💨', '📖', '📜', '📬', '〽️'])
  m.react(em)
 
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'agama', 'anime', 'admin', 'grup', 'absen', 'vote', 'anonymous', 'audio', 'downloader', 'database', 'edukasi', 'fun', 'game', 'xp', 'info', 'internet', 'jadibot', 'kerang', 'news', 'nulis', 'nsfw', 'mature', 'maker', 'premium', 'quotes', 'rpg', 'random', 'stiker', 'tools', 'update', 'owner']              
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
      'main': 'MAIN', 
      'agama': 'RELIGION',
      'anime': 'ANIME', 
      'admin': `ADMIN ${opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
      'group': 'GROUP',
      'anonymous': 'ANONYMOUS CHAT', 
      'audio': 'VOICE CHANGER', 
      'downloader': 'DOWNLOADER',
      'database': 'DATABASE',
      'fun': 'FUN',
      'game': 'GAME',
      'xp': 'EXP & LIMIT',
      'info': 'INFO',
      'internet': 'INTERNET',
      'nulis': 'WRITE & LOGO',
      'nsfw': 'NSFW',
      'maker': 'PHOTO & VIDEO MAKER',
      'premium': 'PREMIUM',
      'quotes': 'QUOTES',
      'random': 'RANDOM',
      'sticker': 'STICKER',
      'tools': 'TOOLS',
      'update': 'UPDATE',
      'owner': 'OWNER',
      'advanced': 'ADVANCED',
      'host': 'HOST',
  } 
  if (teks == 'anime') tags = {
    'anime': 'ANIME'
  }
  if (teks == 'admin') tags = {
    'admin': 'ADMIN'
  }
  if (teks == 'grup') tags = {
    'group': 'GROUP'
  }
  if (teks == 'absen') tags = {
    'absen': 'ABSENT'
  }
  if (teks == 'vote') tags = {
    'vote': 'VOTE'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'ANONYMOUS CHAT'
  }
  if (teks == 'audio') tags = {
    'audio': 'VOICE CHANGER'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'DOWNLOADER'
  }
  if (teks == 'database') tags = {
    'database': 'DATABASE'
  }
  if (teks == 'game') tags = {
    'game': 'GAME'
  }
  if (teks == 'xp') tags = {
    'xp': 'EXP & LIMIT'
  }
  if (teks == 'info') tags = {
    'info': 'INFO'
  }
  if (teks == 'internet') tags = {
    'internet': 'INTERNET'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'WRITE & LOGO'
  }
  if (teks == 'maker') tags = {
    'maker': 'PHOTO & VIDEO MAKER'
  }
  if (teks == 'premium') tags = {
    'premium': 'PREMIUM'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'QUOTES'
  }
  if (teks == 'random') tags = {
    'random': 'RANDOM'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'STICKER'
  }
  if (teks == 'tools') tags = {
    'tools': 'TOOLS'
  }
  if (teks == 'update') tags = {
    'update': 'UPDATE'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'advanced': 'Advanced',
    'host': 'Host'
  }
  
  try {  
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let sortedCmd = Object.entries(db.data.stats).map(([key, value]) => {
        return { ...value, name: key }
    }).map(toNumber('total')).sort(sort('total')) 
    let all = 0;
    let sall = 0;
    for (let i of sortedCmd){
        all += i.total
        sall += i.success
    } 
    let { exp, limit, age, money, level, role, registered } = db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, 69)
    let umur = `${age == '-1' ? 'Not Registered' : age + ' Age'}`
    let name = registered ? db.data.users[m.sender].name : conn.getName(m.sender)
    let botName = conn.user.name
    let ownerName = conn.getName(owner[0] + '@s.whatsapp.net')
    let totalcmd = Object.values(plugins).filter(v => v.help).map(v => v.command).length
    let totalreg = Object.values(db.data.users).length
    let rtotalreg = Object.values(db.data.users).filter(user => user.registered == true).length
    let d = new Date(new Date + 3600000)
    let locale = 'en-IN'
    let weton = [
      'Pahing', 
      'Pon', 
      'Wage', 
      'Kliwon', 
      'Legi'
    ][Math.floor(d / 84600000) % 5]
    let wib = moment.tz('Asia/Kolkata').format("HH:mm:ss")
    let wita = moment.tz('Asia/Kolkata').format("HH:mm:ss")
    let wit = moment.tz('Asia/Kolkata').format("HH:mm:ss")
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = _muptime.toTimeString()
    let uptime = msToTime(_uptime)
    let uptimeDate = msToDate(_uptime)
    let ras = `\`\`\`${ucapan()}  @${m.sender.split('@')[0]} 🐤\`\`\`

`
let sel = `●────━───༺༻───━────●
                *《 BOT INFO 》*
⚚ Name : *${botName}*
⚚ Developer : *${ownerName}*
⚚ Library : *Baileys* ( *MD* )
⚚ Language : *JavaScript*
⚚ Version : *^${_package.version}*
⚚ Database : *${db.adapter.url ? "MongoDB" : "Storage System"}*
⚚ Prefix : *Multi Prefix [ ${_p} ]*
⚚ Status : *${opts["self"] ? "Self" : "Public"}*
⚚ Run-Time : *${muptime}*
●────━───༺༻───━────●

❉───────────────────❉
               *《 USER INFO 》*
✯ Name : *${m.name}* / ( *${name}* )
✯ Age : *${umur}*
✯ Api : *wa.me/${parseInt(m.sender)}*
✯ Limit : *${limit}*

❉───────────────────❉
`   
    if (/^(menu|help)$/i.test(_c) && !args[0]) {
        let pp = await conn.profilePictureUrl(conn.user.jid, 'image').catch(_=> "https://telegra.ph/file/24fa902ead26340f3df2c.png")
        let ppbuffer = await (await fetch(pp)).buffer()
        let ppres = await resize(ppbuffer, 250, 300)
        let tul = `${pickRandom(['Hello', 'Hi', 'Hola'])} *${m.name}* 👋`
        let kun = `${tul}\n\nI am *${botName}*\nOne of the WhatsApp Bots who are ready to help you make things easier such as making stickers and others, if you want to request a feature please type #request the message or feature you want!`
        return conn.sendHydrated(m.chat, kun, wm, ppres,  
        'https://www.instagram.com/ani._.rudh_s/', 'INSTAGRAM', null, null,
        [[`OWNER`, _p +  `owner`], [`COMMAND`, _p + `?`], [`DASHBOARD`, _p + `dashboard`]], 
        m, { asLocation: true })
    }
    if (teks == '404') {
        let jsonMenu = []
        for (let menuText of arrayMenu) {
           jsonMenu.push({
              title: 'MENU ' + menuText.toUpperCase(),
	      rowId: _p + _c + ' ' + menuText, 
           })
        }
        let section = [
          {
           title: `List Menu ${botName}`,
           rows: jsonMenu
          },
          {
           title: `Other`,
           rows: [ 
             {title: `GROUP BOT`, rowId: `.groupbot`, description: `Group official whatsapp bot ${conn.user.name}\n COMMING SOON`},
             {title: `RULES BOT`, rowId: `.rules`, description: `Bot rules, to use bots well and wisely`},
             {title: `UPGRADE TO PREMIUM`, rowId: `.upgrade`, description: `Upgrade to premium to use all premium features without limits( WILL BE AVAILABLE SOON )`},
           ]
          }
         ]
         let listMessage = {
           text: `            *Please Select Below!*`,
           buttonText: `Click Here`,
           mentions: [m.sender],
           sections: section
        }
        let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_=> "https://telegra.ph/file/24fa902ead26340f3df2c.png")
      	let buffer = await (await fetch(pp)).buffer()
        let thumbnail = await resize(buffer, 300, 250)
        let sentMsg = await conn.sendButton(m.chat, ras, sel, thumbnail, 
        [['RULES BOT', _p + 'rules'], ['SYMBOL MEANING', _p + 'symbolmeaning']], 
        m, { mentions: [m.sender], asLocation: true })
        return conn.sendMessage(m.chat, listMessage, { quoted: sentMsg })
    }
    let help = Object.values(plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `Presented by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? `*${lIm}*` : '')
                .replace(/%isPremium/g, menu.premium ? `*${pRm}*` : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      ucapan: ucapan(),
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Ready for *${_p}levelup*` : `${max - exp} more XP for levelup`,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, limit, name, umur, money, age, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    conn.reply(m.chat, text, m)
  } catch (e) {
    throw e
  }
}
handler.command = /^(menu|help|allmenu|command|\?)$/i

handler.exp = 3

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(json){
  return json[Math.floor(Math.random() * json.length)]
}

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
      return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}

function msToTime(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function msToDate(ms) {
  let days = Math.floor(ms / (24 * 60 * 60 * 1000))
  let daysms = ms % (24 * 60 * 60 * 1000)
  let hours = Math.floor((daysms) / (60 * 60 * 1000))
  let hoursms = ms % (60 * 60 * 1000)
  let minutes = Math.floor((hoursms) / (60 * 1000))
  let minutesms = ms % (60 * 1000)
  let seconds = Math.floor((minutesms) / (1000))
  return days + " Day " + hours + " Hour " + minutes + " Minute"
}

function ucapan() {
  const time = moment.tz('Asia/Kolkata').format('HH')
  let res = "Good Morning"
   if (time >= 4) {
     res = "Good Morning"
   }
   if (time > 10) {
     res = "Good Afternoon"
   }
   if (time >= 15) {
     res = "Good Afternoon"
   }
   if (time >= 18) {
     res = "Good evening"
   }
   return res
}