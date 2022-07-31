import { readFileSync, watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = JSON.parse(readFileSync('./src/owner.json')) // Change/add owner number 
global.mods = JSON.parse(readFileSync('./src/moderator.json')) // Moderator?
global.prems = JSON.parse(readFileSync('./src/premium.json')) // Premium user has unlimited limit 

global.packname = 'ΣVΛ'
global.author = 'ΣVΛ-SudoAnirudh𝗅'
global.wm = 'ΣVΛ'
global.sYm = '•'

global.APIs = { // API Prefix
//======= name: 'https://website' ========//
  nrtm: 'https://nurutomo.herokuapp.com',
  lolhum: 'https://api.lolhuman.xyz',
  xteam: 'https://api.xteam.xyz', 
  xcoder: 'https://api-xcoders.xyz',
  violet: 'https://violetics.pw',
  yog: 'https://yog-apikey.herokuapp.com'
}
global.APIKeys = { // APIKey Here
//======= 'https://website': 'apikey' =======//
  'https://api.lolhuman.xyz': 'Papah-Chan', //https://api.lolhuman.xyz/api/attp2?text=.attp2&apikey=Syahrulidhamz30
  'https://api.xteam.xyz': 'benniismaelapikey',
  'https://api-xcoders.xyz': 'frhn',
  'https://violetics.pw': '0b55-fada-712f',
  'https://yog-apikey.herokuapp.com': 'YogGanz'
}

let list = `Angka
Asahotak
Caklontong 
Family100
Koboy
Siapakahaku
Suitbot
Susunkata
Tebakgambar
Tebakkata
Tebaklirik
Tekateki`
let jsongame = list.split('\n')
let game = []
for (let name of jsongame) {
     game.push({
       title: name,
       rowId: '.' + name,
     })
}
global.gamelist = {
    title: 'Please Choose Your Favorite Game!',
    rows: game
}
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      name: '🐤',
      age: '🌴',
      premium: '🔥',
      tag: '🐋',
      number: '✨',
      wame: '🌹',
      rank: '🔱',
      before: '🕊',
      after: '🦅',
      atm: '🏧',
      warning: '⚠️',
      level: '🧬',
      limit: '🌌',
      health: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}
