import { JSDOM } from 'jsdom'
import FormData from 'form-data'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import qs from 'qs'
import Jimp from 'jimp'

export default { 
aiovideodl,
aiovideodlv2,
searchrepo,
cerpen, 
filmapik, 
ssweb, 
emoji, 
hoax, 
sfilesearch, 
happymod, 
servermc, 
gempa, 
mediafire,
telegraph, 
ghstalk, 
komiku, 
lirik,
lirikv2, 
katabijak, 
covid, 
otaku, 
shoppe, 
inews, 
jalantikus, 
kompasnews, 
tribunnews, 
tafsirsurah, 
surah, 
listsurah, 
stickersearch, 
drakor, 
mangatoons, 
webtoons, 
wattpaduser, 
wattpad, 
film, 
pinterest, 
jadwalsholat, 
jadwaltv, 
jadwalbola, 
character, 
manga, 
anime, 
soundcloud, 
xnxxsearch, 
xnxxdl, 
herodetails, 
herolist, 
playstore, 
tiktokporn, 
hentai, 
quotesanime, 
wallpaper, 
wikimedia, 
resize,  
facebook,  
quotes, 
igdl,
igdlv2, 
igstory, 
igstoryv2,
snaptik, 
tiktok, 
twitter, 
twitterv2, 
joox, 
pin 
}

async function resize(buffer, ukur1, ukur2) {
    return new Promise(async(resolve, reject) => {
        var baper = await Jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
}

async function searchrepo(repo) {
    return new Promise( async (resolve, reject) => {
        await axios.get(`https://api.github.com/search/repositories?q=${repo}`)
            .then(response => {
                if(response.status == 200){
                    const results = response.data.items
                    
                    let data = {}
                    data.code = response.status
                    data.message = "ok"
                    data.totalCount = response.data.total_count
                    data.items = []
                    data.creator = "Zhirrr" // ( https://github.com/ZefianAlfian )

                    if(data.totalCount != 0){
                        results.forEach((res) => {
                            data.items.push({
                                id: res.id,
                                nodeId: res.node_id,
                                nameRepo: res.name,
                                fullNameRepo: res.full_name,
                                url_repo: res.html_url,
                                description: res.description,
                                git_url: res.git_url,
                                ssh_url: res.ssh_url,
                                clone_url: res.clone_url,
                                svn_url: res.svn_url,
                                homepage: res.homepage,
                                stargazers: res.stargazers_count,
                                watchers: res.watchers,
                                forks: res.forks,
                                defaultBranch: res.default_branch,
                                language: res.language,
                                isPrivate: res.private,
                                isFork: res.fork,
                                createdAt: res.created_at,
                                updatedAt: res.updated_at,
                                pushedAt: res.pushed_at,
                                author: {
                                    username: res.owner.login,
                                    id_user: res.owner.id,
                                    avatar_url: res.owner.avatar_url,
                                    user_github_url: res.owner.html_url,
                                    type: res.owner.type,
                                    isSiteAdmin: res.owner.site_admin
                                }
                            })
                        })
                    }else{
                        data.items = "Repositories not found"
                    }

                    resolve(data)
                }else{
                    reject({
                        code: 500,
                        success: false,
                        message: "Error Server"
                    })
                }
            })
            .catch(err => {
                reject(err)
            })
    })
 }

async function emoji(emoticon) {
const emojii = encodeURI(`${emoticon}`)
var link = await axios.get(`https://emojipedia.org/${emojii}/`)
var $ = cheerio.load(link.data)
var apple = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(1) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
var google = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(2) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
var samsung = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(3) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
var microsoft = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(4) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
var whatsapp = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(5) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
var twitter = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(6) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
var facebook = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(7) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
var jooxpixel = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(8) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
var openmoji = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(9) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
var emojidex = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(10) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
var messager = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(11) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
var LG = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(12) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
var HTC = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(13) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
var mozilla = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(14) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
const result = {
app: apple,
go: google,
sa: samsung,
mi: microsoft,
wa: whatsapp,
tw: twitter,
fb: facebook,
pi: jooxpixel,
op: openmoji,
ed: emojidex,
mes: messager,
lg: LG,
htc: HTC,
moz: mozilla
}
return result
}

function aiovideodl(link) {
    return new Promise((resolve, reject) => {
        axios({
            url: 'https://aiovideodl.ml/',
            method: 'GET',
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "PHPSESSID=69ce1f8034b1567b99297eee2396c308; _ga=GA1.2.1360894709.1632723147; _gid=GA1.2.1782417082.1635161653"
            }
        }).then((src) => {
            let a = cheerio.load(src.data)
            let token = a('#token').attr('value')
            axios({
                url: 'https://aiovideodl.ml/wp-json/aio-dl/video-data/',
                method: 'POST',
                headers: {
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    "cookie": "PHPSESSID=69ce1f8034b1567b99297eee2396c308; _ga=GA1.2.1360894709.1632723147; _gid=GA1.2.1782417082.1635161653"   
                },
                data: new URLSearchParams(Object.entries({ 'url': link, 'token': token }))
            }).then(({ data }) => {
                resolve({ status: src.status, creator: 'SudoAnirudh.', hasil: data })
            })
        })
    })
}

async function aiovideodlv2(url) {
    return new Promise((resolve, reject) => {
        axios({
         url: 'https://aiovideodl.ml/', 
         method: 'GET',
         headers: {
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          "cookie": "PHPSESSID=3893d5f173e91261118a1d8b2dc985c3; _ga=GA1.2.792478743.1635388171;"
          }
          }).then((data) => {
            let a = cheerio.load(data.data)
            let token = a('#token').attr('value')
            const options = {
                method: 'POST',
                url: `https://aiovideodl.ml/wp-json/aio-dl/video-data/`,
                headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8","user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36","cookie": "PHPSESSID=3893d5f173e91261118a1d8b2dc985c3; _ga=GA1.2.792478743.1635388171;"
                },
                formData: {
                url: url,
                token: token
                }
            };
            request(options, async function(error, response, body) {
                if (error) throw new Error(error)
                let res = JSON.parse(body)
                res.status = 200
                res.author = "Acel"
                resolve(res);
            });
        })
    })
}

function quotes(input) {
    return new Promise((resolve, reject) => {
        fetch('https://jagokata.com/kata-bijak/kata-' + input.replace(/\s/g, '_') + '.html?page=1')
            .then(res => res.text())
            .then(res => {
                const $ = cheerio.load(res)
                let data = []
                $('div[id="main"]').find('ul[id="citatenrijen"] > li').each(function (index, element) {
                    let x = $(this).find('div[class="citatenlijst-auteur"] > a').text().trim()
                    let y = $(this).find('span[class="auteur-beschrijving"]').text().trim()
                    let z = $(element).find('q[class="fbquote"]').text().trim()
                    data.push({ author: x, bio: y, quote: z })
                })
                data.splice(2, 1)
                if (data.length == 0) return resolve({ creator: '@SudoAnirudh', status: false })
                resolve({ creator: '@SudoAnirudh', status: true, data })
            }).catch(reject)
    })
}

function joox(query) {
    return new Promise((resolve, reject) => {
        const time = Math.floor(new Date() / 1000)
        axios.get('http://api.joox.com/web-fcgi-bin//web_search?lang=id&country=id&type=0&search_input=' + query + '&pn=1&sin=0&ein=29&_=' + time)
            .then(({ data }) => {
                let result = []
                let hasil = []
                let promoses = []
                let ids = []
                data.itemlist.forEach(result => {
                    ids.push(result.songid)
                });
                for (let i = 0; i < data.itemlist.length; i++) {
                    const get = 'http://api.joox.com/web-fcgi-bin/web_get_songinfo?songid=' + ids[i]
                    promoses.push(
                        axios.get(get, {
                            headers: {
                                Cookie: 'wmid=142420656; user_type=1; country=id; session_key=2a5d97d05dc8fe238150184eaf3519ad;'
                            }
                        })
                            .then(({ data }) => {
                                const res = JSON.parse(data.replace('MusicInfoCallback(', '').replace('\n)', ''))
                                hasil.push({
                                    lagu: res.msong,
                                    album: res.malbum,
                                    penyanyi: res.msinger,
                                    publish: res.public_time,
                                    img: res.imgSrc,
                                    mp3: res.mp3Url
                                })
                                Promise.all(promoses).then(() => resolve({
                                    creator: "@SudoAnirudh",
                                    status: true,
                                    data: hasil,
                                }))
                            }).catch(reject)
                    )
                }
            }).catch(reject)
    })
}

function tiktok(url) {
    return new Promise(async (resolve, reject) => {
        axios.get('https://ttdownloader.com/', {
            headers: {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061"
            }
        })
            .then(({ data }) => {
                const $ = cheerio.load(data)
                let token = $('#token').attr('value')
                let config = {
                    'url': url,
                    'format': '',
                    'token': token
                }
                axios('https://ttdownloader.com/req/', {
                    method: 'POST',
                    data: new URLSearchParams(Object.entries(config)),
                    headers: {
                        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                        "cookie": "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061"
                    }
                })
                    .then(({ data }) => {
                        const $ = cheerio.load(data)
                        resolve({
                            nowm: $('div:nth-child(2) > div.download > a').attr('href'),
                            wm: $('div:nth-child(3) > div.download > a').attr('href'),
                            audio: $('div:nth-child(4) > div.download > a').attr('href')
                        })
                    })
            })
            .catch(reject)
    })
}

async function snaptik(url) {
  try {
    let results = {}
    if (/v[tm]\.tiktok\.com/g.test(url)) {
      let res = await axios.get(url)
      url = res.request.res.responseUrl
    }
    let key = await axios.get(`https://api.snaptik.site/video-key?video_url=${url}`)
    key = JSON.parse(JSON.stringify(key.data, null, 2))
    if (key.status !== 'success') throw key
    let data = await axios.get(`https://api.snaptik.site/video-details-by-key?key=${key.data.key}`)
    data = JSON.parse(JSON.stringify(data.data, null, 2))
    if (data.status !== 'success') throw data
    results = {
      author: { ...data.data.author },
      description: data.data.description,
      video: {
        with_watermark: `https://api.snaptik.site/download?key=${data.data.video.with_watermark}&type=video`,
        no_watermark: `https://api.snaptik.site/download?key=${data.data.video.no_watermark}&type=video`,
        no_watermark_raw: data.data.video.no_watermark_raw
      },
      music: `https://api.snaptik.site/download?key=${data.data.music}&type=music`
    }
    return results
  } catch (e) {
    throw `Sorry invalid url or private video`
  }
}
 
function twitter(url) {
    return new Promise((resolve, reject) => {
        let params = new URLSearchParams()
        params.append('URL', url)
        fetch('https://twdown.net/download.php', { method: 'POST', body: params })
            .then(res => res.text())
            .then(res => {
                const $ = cheerio.load(res);
                let data = []
                $('div.container').find('tbody > tr > td').each(function (index, element) {
                    let x = $(this).find('a').attr('href')
                    if (x !== '#') {
                        if (typeof x !== 'undefined') {
                            data.push({ url: x })
                        }
                    }
                })
                if (data.length == 0) return resolve({ status: false })
                resolve({ status: true, data })
            }).catch(reject)
    })
}

async function twitterv2(link) {
	return new Promise((resolve, reject) => {
		let config = {
			'URL': link
		}
		axios.post('https://twdown.net/download.php',qs.stringify(config),{
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "_ga=GA1.2.1388798541.1625064838; _gid=GA1.2.1351476739.1625064838; __gads=ID=7a60905ab10b2596-229566750eca0064:T=1625064837:RT=1625064837:S=ALNI_Mbg3GGC2b3oBVCUJt9UImup-j20Iw; _gat=1"
			}
		})
		.then(({ data }) => {
		const $ = cheerio.load(data)
		resolve({
				desc: $('div:nth-child(1) > div:nth-child(2) > p').text().trim(),
				thumb: $('div:nth-child(1) > img').attr('src'),
				HD: $('tbody > tr:nth-child(1) > td:nth-child(4) > a').attr('href'),
				SD: $('tr:nth-child(2) > td:nth-child(4) > a').attr('href'),
				audio: 'https://twdown.net/' + $('tr:nth-child(4) > td:nth-child(4) > a').attr('href')
			})
		})
	.catch(reject)
	})
}

function igdl(url) {
    return new Promise(async (resolve, reject) => {
        axios.request({
            url: 'https://www.instagramsave.com/download-instagram-videos.php',
            method: 'GET',
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
            }
        })
            .then(({ data }) => {
                const $ = cheerio.load(data)
                const token = $('#token').attr('value')
                let config = {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
                        "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
                        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    },
                    data: {
                        'url': url,
                        'action': 'post',
                        'token': token
                    }
                }
                axios.post('https://www.instagramsave.com/system/action.php', qs.stringify(config.data), { headers: config.headers })
                    .then(({ data }) => {
                        resolve(data.medias)
                    })
            })
            .catch(reject)
    })
}

async function igdlv2(Link) {
	const hasil = []
	const Form = {
		url: Link,
		submit: ""
	}
	await axios(`https://downloadgram.org/`, {
		method: "POST",
		data:  new URLSearchParams(Object.entries(Form)),
		headers: {
			"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
			"accept-language": "en-US,en;q=0.9,id;q=0.8",
			"cache-control": "max-age=0",
			"content-type": "application/x-www-form-urlencoded",
			"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
			"cookie": "_ga=GA1.2.1695343126.1621491858; _gid=GA1.2.28178724.1621491859; __gads=ID=8f9d3ef930e9a07b-2258e672bec80081:T=1621491859:RT=1621491859:S=ALNI_MbqLxhztDiYZttJFX2SkvYei6uGOw; __atuvc=3%7C20; __atuvs=60a6eb107a17dd75000; __atssc=google%3B2; _gat_gtag_UA_142480840_1=1"
		},
		referrerPolicy: "strict-origin-when-cross-origin",
	}).then(async res => {
		const $ = cheerio.load(res.data)
		let url = $('#downloadBox').find('a').attr('href');
		await axios(Link, {
			method: "GET",
			data: null,
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"accept-language": "en-US,en;q=0.9,id;q=0.8",
				"cache-control": "max-age=0",
				"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				"cookie": "ig_did=08A3C465-7D43-4D8A-806A-88F98384E63B; ig_nrcb=1; mid=X_ipMwALAAFgQ7AftbrkhIDIdXJ8; fbm_124024574287414=base_domain=.instagram.com; shbid=17905; ds_user_id=14221286336; csrftoken=fXHAj5U3mcJihQEyVXfyCzcg46lHx7QD; sessionid=14221286336%3A5n4czHpQ0GRzlq%3A28; shbts=1621491639.7673564; rur=FTW"
			},
			referrerPolicy: "strict-origin-when-cross-origin"
		}).then(respon => {
			const ch = cheerio.load(respon.data)
			let title = ch('title').text().trim()
			const result = {
				link: url,
				desc: title,
				LinkAwal: Link
			}
			hasil.push(result)
		})
	})
	return hasil[0]
}

function igstory(username) {
    return new Promise(async (resolve, reject) => {
        axios.request({
            url: 'https://www.instagramsave.com/instagram-story-downloader.php',
            method: 'GET',
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
            }
        })
            .then(({ data }) => {
                const $ = cheerio.load(data)
                const token = $('#token').attr('value')
                let config = {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
                        "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
                        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    },
                    data: {
                        'url': 'https://www.instagram.com/' + username,
                        'action': 'story',
                        'token': token
                    }
                }
                axios.post('https://www.instagramsave.com/system/action.php', qs.stringify(config.data), { headers: config.headers })
                    .then(({ data }) => {
                        resolve(data.medias)
                    })
            })
            .catch(reject)
    })
}

async function igstoryv2(username) {
  let { data } = await axios.get(`https://www.instadownloader.org/data.php?username=${username}&t=${new Date * 1}`)
  const $ = cheerio.load(data)
  let results = []
  $('body > center').each(function (i, el) {
    results.push({
      url: $(el).find('a.download-btn').attr('href'),
      type: $(el).find('video').html() ? 'video' : 'image'
    })
  })
  return results
 }

function pin(url) {
    return new Promise((resolve, reject) => {
        function rand() {
            return `${Math.floor(Math.random() * 1000000)}`
        }
        let params = new URLSearchParams()
        params.append('url', url)
        fetch('https://www.expertsphp.com/facebook-video-downloader.php', { method: 'POST', body: params })
            .then(res => res.text())
            .then(res => {
                const $ = cheerio.load(res)
                let y = 'pinterest_' + rand() + '.mp4'
                let x = $('video').find('source').attr('src')
                let data = { file: y, url: x }
                if (typeof x == 'undefined') return resolve({ status: false })
                resolve({ status: true, data })
            }).catch(reject)
    })
}

let is = {
    headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    }
}

function _token(host) {
    return new Promise(async (resolve, reject) => {
        axios.request({
            url: host, method: 'GET', headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
            }
        }).then(({ data }) => {
            let $ = cheerio.load(data)
            let token = $('#token').attr('value')
            resolve(token)
        })
    })
}

function facebook(urls) {
    return new Promise(async (resolve, reject) => {
       const data = await axios({
           url: 'https://downvideo.net/',
           method: 'GET',
           headers: {
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
           }
       })
       const $ = cheerio.load(data.data)
       const token = $('#token').attr('value')
       const getPost = await axios({
           url: 'https://downvideo.net/download.php',
           method: 'POST',
           headers: {
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
            "cookie": '_gid=GA1.2.1321544464.1633811193; _ga=GA1.2.1392580783.1633811193; __gads=ID=c73de99d7fa5c467-226981f63ecc00f1:T=1633811193:RT=1633811193:S=ALNI_MaC9fW2mqfT2hm7zODcNNffab1XLg'
           },
           data: new URLSearchParams(Object.entries({ 'URL': urls, 'token': token }))
       })
       const c = cheerio.load(getPost.data)
       const hasil = {
            author: c('div.row').find('div.col-md-12:nth-child(1)').text(),
            title: c('div.row').find('div.col-md-12:nth-child(3) > p').text(),
            thumb: c('div.row').find('div.col-md-12:nth-child(2) > img').attr('src'),
            link_high: c('div.row').find('div.col-md-3 > a').eq(0).attr('href') || c('div.row').find('#sd > a').attr('href') || '',
            link_normal: c('div.row').find('div.col-md-3 > a').eq(1).attr('href') || ''
       }
       resolve({ status: getPost.status, creator: '@SudoAnirudh', hasil: hasil })
    })
}

function wallpaper(title, page) {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.besthdwallpaper.com/search?CurrentPage=${page}&q=${title}`)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('div.grid-item').each(function (a, b) {
                hasil.push({
                    title: $(b).find('div.info > a > h3').text(),
                    type: $(b).find('div.info > a:nth-child(2)').text(),
                    image: $(b).find('img').attr('src')
                })
            })
            resolve(hasil)
        })
    })
}

function wikimedia(title) {
    return new Promise((resolve, reject) => {
        axios.get(`https://commons.wikimedia.org/w/index.php?search=${title}&title=Special:MediaSearch&go=Go&type=image`)
        .then((res) => {
            let $ = cheerio.load(res.data)
            let hasil = []
            $('.sdms-search-results__list-wrapper > div > a').each(function (a, b) {
                hasil.push({
                    title: $(b).find('img').attr('alt'),
                    source: $(b).attr('href'),
                    image: $(b).find('img').attr('src') || $(b).find('img').attr('src')
                })
            })
            resolve(hasil)
        })
    })
}

function tiktokporn() {
    return new Promise((resolve, reject) => {
        axios.get('https://tikporntok.com/?random=1')
        .then((res) => {
            const $ = cheerio.load(res.data)
            const hasil = {}
            hasil.title = $('article > h1').text()
            hasil.source = $('article > div.video-wrapper.vxplayer').attr('data-post') || 'Web Not Response'
            hasil.thumb = $('article > div.video-wrapper.vxplayer > div.vx_el').attr('data-poster') || 'https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png'
            hasil.desc = $('article > div.intro').text()
            hasil.upload = $('article > div.single-pre-meta.ws.clearfix > time').text()
            hasil.like = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(1) > span').text()
            hasil.dislike = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(2) > span').text()
            hasil.favorite = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(3) > span').text()
            hasil.views = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(4) > span').text()
            hasil.tags = $('article > div.post-tags').text()
            hasil.video = $('article > div.video-wrapper.vxplayer > div.vx_el').attr('src') || $('article > div.video-wrapper.vxplayer > div.vx_el').attr('data-src') || 'https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png'
            resolve(hasil)
        })
    })
}

function hentai() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}

async function katabijak(input) {
return new Promise((resolve, reject) => {
fetch('https://jagokata.com/kata-bijak/kata-' + input.replace(/\s/g, '_') + '.html?page=1')
.then(res => res.text())
.then(res => {
const $ = cheerio.load(res)
let data = []
$('div[id="main"]').find('ul[id="citatenrijen"] > li').each(function (index, element) {
let auttor = $(this).find('div[class="citatenlijst-auteur"] > a').text().trim()
let biyyo = $(this).find('span[class="auteur-beschrijving"]').text().trim()
let quot = $(element).find('q[class="fbquote"]').text().trim()
data.push({ 
author: auttor, 
bio: biyyo, 
quote: quot 
})
})
data.splice(2, 1)
if (data.length == 0) return resolve({ 
status: false 
})
resolve({ 
status: true, 
data 
})
}).catch(reject)
})
}

async function cerpen() {
	try {
	const link = await axios.get("http://cerpenmu.com/")
	const c = cheerio.load(link.data)
	let kumpulan = []
	c('#sidebar > div').each(function (real, ra) {
		c(ra).find('ul > li').each(function (i, rayy) {
			let random = c(rayy).find('a').attr('href')
			kumpulan.push(random)
		})
	})
	var acak = kumpulan[Math.floor(Math.random() * (kumpulan.length))]
	let Otw = await axios.get(`${acak}`)
	const C = cheerio.load(Otw.data)
	let otw = []
	C('#content > article > article').each(function (a, b) {
		let random = C(b).find('h2 > a').attr('href')
		otw.push(random)
	})
	var Acak = otw[Math.floor(Math.random() * (otw.length))]
	let Link = await axios.get(`${Acak}`)
	let $ = cheerio.load(Link.data)
	let judul = $('#content').find('article > h1').text().trim()
	let karangan = $('#content').find('article > a:nth-child(2)').text().trim()
	let Isi = []
	$('#content > article > p').each(function (wm, Ra) {
		let isi = $(Ra).text().trim()
		Isi.push(isi)

	})
	let cerita = []
	for (let i of Isi) {
		cerita += i
	}
	const data = {
	 res: {
			Judul: judul,
			Penulis: karangan,
			sumber: Acak,
			cerita: cerita
		}
	}
	return data
} catch (err) {
	const res404 = {
		status: 500,
		author: 'MechaBots',
		Pesan: 'Udah Ga work?:/ cp: 082149344210'
	}
	return res404
}
}

function quotesanime() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

function playstore(name) {
	return new Promise((resolve, reject) => {
		axios.get('https://play.google.com/store/search?q='+ name +'&c=apps')
		.then(({ data }) => {
			const $ = cheerio.load(data)
			let ln = [];
			let nm = [];
			let dv = [];
			let lm = [];
			const result = [];
			$('div.wXUyZd > a').each(function(a,b){
				const link =  'https://play.google.com' + $(b).attr('href')
				ln.push(link);
			})
			$('div.b8cIId.ReQCgd.Q9MA7b > a > div').each(function(d,e){
				const name = $(e).text().trim()
				nm.push(name);
			})
			$('div.b8cIId.ReQCgd.KoLSrc > a > div').each(function(f,g){
				const dev = $(g).text().trim();
				dv.push(dev)
			})
			$('div.b8cIId.ReQCgd.KoLSrc > a').each(function(h,i){
				const limk = 'https://play.google.com' + $(i).attr('href');
				lm.push(limk);
			})			
		for (let i = 0; i < ln.length; i++){
			result.push({
				name: nm[i],
				link: ln[i],
				developer: dv[i],
				link_dev: lm[i]
			})
	}
		resolve(result)
		})
	.catch(reject)
	})
}

function herolist() {
            return new Promise((resolve, reject) => {
                  Axios.get('https://mobile-legends.fandom.com/wiki/Mobile_Legends:_Bang_Bang_Wiki')
                  .then(({ data }) => {
                       const $ = cheerio.load(data)
                       let data_hero = []
                       let url = []
                       $('div > div > span > span > a').get().map((result) => {
                            const name = decodeURIComponent($(result).attr('href').replace('/wiki/',''))
                            const urln = 'https://mobile-legends.fandom.com' + $(result).attr('href')
                            data_hero.push(name)
                            url.push(urln)
                       })
                       resolve({ status: 200, hero: data_hero })
                  }).catch((e) => reject({ status: 404, message: e.message }))
             })
        }
function herodetails(name) {
             return new Promise((resolve, reject) => {
                  var splitStr = name.toLowerCase().split(' ');
                  for (var i = 0; i < splitStr.length; i++) {
                       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
                  }
                  const que = splitStr.join(' ')
                  Axios.get('https://mobile-legends.fandom.com/wiki/' + que)
                  .then(({ data }) => {
                       const $ = cheerio.load(data)
                       let mw = []
                       let attrib = []
                       let skill = []
                       const name = $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td > table > tbody > tr > td > font > b').text() 
                       $('.mw-headline').get().map((res) => {
                            const mwna = $(res).text()
                            mw.push(mwna)
                       })
                       $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td').get().map((rest) => {
                            const haz = $(rest).text().replace(/\n/g,'')
                            attrib.push(haz)
                       })
                       $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td > div.progressbar-small.progressbar > div').get().map((rest) => {
                            skill.push($(rest).attr('style').replace('width:',''))
                       })
                       Axios.get('https://mobile-legends.fandom.com/wiki/' + que + '/Story')
                       .then(({ data }) => {
                            const $ = cheerio.load(data)
                            let pre = []
                            $('#mw-content-text > div > p').get().map((rest) => {
                                 pre.push($(rest).text())
                            })
                            const story = pre.slice(3).join('\n')
                            const items = []
                            const character = []
                            $('#mw-content-text > div > aside > section > div').get().map((rest) => {
                                 character.push($(rest).text().replace(/\n\t\n\t\t/g, '').replace(/\n\t\n\t/g,'').replace(/\n/g,''))
                            })
                            $('#mw-content-text > div > aside > div').get().map((rest) => {
                                 items.push($(rest).text().replace(/\n\t\n\t\t/g, '').replace(/\n\t\n\t/g,'').replace(/\n/g,''))
                            })
                            const img = $('#mw-content-text > div > aside > figure > a').attr('href')
                            const chara = character.slice(0,2)
                            const result = { 
                                 status: 200,
                                 hero_name: name + ` ( ${mw[0].replace('CV:',' CV:')} )`,
                                 entrance_quotes: attrib[2].replace('Entrance Quotes','').replace('\n',''),
                                 hero_feature: attrib[attrib.length - 1].replace('Hero Feature',''),
                                 image: img,
                                 items: items,
                                 character: {
                                      chara
                                 },
                                 attributes: {
                                      movement_speed: attrib[12].replace('● Movement Speed',''),
                                      physical_attack: attrib[13].replace('● Physical Attack',''),
                                      magic_power: attrib[14].replace('● Magic Power',''),
                                      attack_speed: attrib[15].replace('● Attack Speed',''),
                                      physical_defense: attrib[16].replace('● Physical Defense',''),
                                      magic_defense: attrib[17].replace('● Magic Defense',''),
                                      basic_atk_crit_rate: attrib[18].replace('● Basic ATK Crit Rate',''),
                                      hp: attrib[19].replace('● HP',''),
                                      mana: attrib[20].replace('● Mana',''),
                                      ability_crit_rate: attrib[21].replace('● Ability Crit Rate',''),
                                      hp_regen: attrib[22].replace('● HP Regen',''),
                                      mana_regen: attrib[23].replace('● Mana Regen','')
                                 },
                                 price: {
                                      battle_point: mw[1].split('|')[0].replace(/ /g,''),
                                      diamond: mw[1].split('|')[1].replace(/ /g,''),
                                      hero_fragment: mw[1].split('|')[2] ? mw[1].split('|')[2].replace(/ /g,'') : 'none'
                                 },
                                 role: mw[2],
                                 skill: {
                                      durability: skill[0],
                                      offense: skill[1],
                                      skill_effects: skill[2],
                                      difficulty: skill[3]
                                 },
                                 speciality: mw[3],
                                 laning_recommendation: mw[4],
                                 release_date: mw[5],
                                 background_story: story
                            }
                            resolve(result)
                       }).catch((e) => reject({ status: 404, message: e.message }))
                  }).catch((e) => reject({ status: 404, message: e.message }))
             })
        }
        
function xnxxsearch(query) {
	return new Promise((resolve, reject) => {
		const baseurl = 'https://www.xnxx.com'
		fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, {method: 'get'})
		.then(res => res.text())
		.then(res => {
			let $ = cheerio.load(res, {
				xmlMode: false
			});
			let title = [];
			let url = [];
			let desc = [];
			let results = [];

			$('div.mozaique').each(function(a, b) {
				$(b).find('div.thumb').each(function(c, d) {
					url.push(baseurl+$(d).find('a').attr('href').replace("/THUMBNUM/", "/"))
				})
			})
			$('div.mozaique').each(function(a, b) {
				$(b).find('div.thumb-under').each(function(c, d) {
					desc.push($(d).find('p.metadata').text())
					$(d).find('a').each(function(e,f) {
					    title.push($(f).attr('title'))
					})
				})
			})
			for (let i = 0; i < title.length; i++) {
				results.push({
					title: title[i],
					info: desc[i],
					link: url[i]
				})
			}
			resolve({
				code: 200,
				status: true,
				result: results
			})
		})
		.catch(err => reject({code: 503, status: false, result: err }))
	})
}

function xnxxdl(URL) {
	return new Promise((resolve, reject) => {
		fetch(`${URL}`, {method: 'get'})
		.then(res => res.text())
		.then(res => {
			let $ = cheerio.load(res, {
				xmlMode: false
			});
			const title = $('meta[property="og:title"]').attr('content');
			const duration = $('meta[property="og:duration"]').attr('content');
			const image = $('meta[property="og:image"]').attr('content');
			const videoType = $('meta[property="og:video:type"]').attr('content');
			const videoWidth = $('meta[property="og:video:width"]').attr('content');
			const videoHeight = $('meta[property="og:video:height"]').attr('content');
			const info = $('span.metadata').text();
			const videoScript = $('#video-player-bg > script:nth-child(6)').html();
			const files = {
				low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
				high: videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],
				HLS: videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1],
				thumb: videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1],
				thumb69: videoScript.match('html5player.setThumbUrl169\\(\'(.*?)\'\\);' || [])[1],
				thumbSlide: videoScript.match('html5player.setThumbSlide\\(\'(.*?)\'\\);' || [])[1],
				thumbSlideBig: videoScript.match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);' || [])[1],
			};
			resolve({
				status: 200,
				result: {
					title,
					URL,
					duration,
					image,
					videoType,
					videoWidth,
					videoHeight,
					info,
					files
				}
			})
		})
		.catch(err => reject({code: 503, status: false, result: err }))
	})
}

async function soundcloud(url) {
    return new Promise((resolve, reject) => {
        axios({url: 'https://aiovideodl.ml/',method: 'GET',headers: {"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36","cookie": "PHPSESSID=3893d5f173e91261118a1d8b2dc985c3; _ga=GA1.2.792478743.1635388171;"}}).then((data) => {
            let a = cheerio.load(data.data)
            let token = a('#token').attr('value')
            const options = {
                method: 'POST',
                url: `https://aiovideodl.ml/wp-json/aio-dl/video-data/`,
                headers: {"content-type": "application/x-www-form-urlencoded; charset=UTF-8","user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36","cookie": "PHPSESSID=3893d5f173e91261118a1d8b2dc985c3; _ga=GA1.2.792478743.1635388171;"
                },
                formData: {url: url,token: token}
            };
            request(options, async function(error, response, body) {
                if (error) throw new Error(error)
                let res = JSON.parse(body)
                res.status = 200
                res.author = "Acel"
                resolve(res);
            });
        })
    })
}

function anime(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.anime-planet.com/anime/all?name=${query}`)
            .then(({
                data
            }) => {
                const hasil = []
                const $ = cheerio.load(data)
                $('#siteContainer > ul.cardDeck.cardGrid > li ').each(function (a, b) {
                        let result = {
                            status: 200,
                            author: '@SudoAnirudh',
                            judul: $(b).find('> a > h3').text(),
                            link: 'https://www.anime-planet.com' + $(b).find('> a').attr('href'),
                            thumbnail: 'https://www.anime-planet.com' + $(b).find('> a > div.crop > img').attr('src')
                        };
                        hasil.push(result);
                    });
                resolve(hasil)
            })
            .catch(reject)
    })
}

function manga(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.anime-planet.com/manga/all?name=${query}`)
            .then(({
                data
            }) => {
                const hasil = []
                const $ = cheerio.load(data)
                $('#siteContainer > ul.cardDeck.cardGrid > li ').each(function (a, b) {
                        let result = {
                            status: 200,
                            author: '@SudoAnirudh',
                            judul: $(b).find('> a > h3').text(),
                            link: 'https://www.anime-planet.com' + $(b).find('> a').attr('href'),
                            thumbnail: 'https://www.anime-planet.com' + $(b).find('> a > div.crop > img').attr('src')
                        };
                        hasil.push(result);
                    });
                resolve(hasil)
            })
            .catch(reject)
    })
}

function character(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.anime-planet.com/characters/all?name=${query}`)
            .then(({
                data
            }) => {
                const hasil = []
                const $ = cheerio.load(data)
                $('#siteContainer > table > tbody > tr').each(function (a, b) {
                        let result = {
                            status: 200,
                            author: '@SudoAnirudh',
                            character: $(b).find('> td.tableCharInfo > a').text(),
                            link: 'https://www.anime-planet.com' + $(b).find('> td.tableCharInfo > a').attr('href'),
                            thumbnail: $(b).find('> td.tableAvatar > a > img').attr('src').startsWith('https://') ? $(b).find('> td.tableAvatar > a > img').attr('src') : 'https://www.anime.planet.com' + $(b).find('> td.tableAvatar > a > img').attr('src')
                        };
                        hasil.push(result);
                    });
                resolve(hasil)
            })
            .catch(reject)
    })
}

function jadwalbola() {
    return new Promise((resolve, reject) => {
        axios.get('https://m.bola.net/jadwal_televisi/')
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                $('#main_mid_headline_sub_topic').each(function(a, b) {
                    let result = {
                    status: 200,
                    author: '@SudoAnirudh',
                    jadwal: $(b).find(' > div.main_mid_headline_topic > div > a').text(),
                    tanggal: $(b).find(' > div.main_mid_headline_topic_grouped_time_list').text().split('\n')[1].split('                            ')[1],
                    jam: $(b).find(' > div.main_mid_headline_topic > span').text(),
                    url: $(b).find(' > div.main_mid_headline_topic > div > a').attr('href'),
                    thumb: $(b).find(' > div.main_mid_headline_topic > img').attr('src')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

function jadwaltv() {
    return new Promise((resolve, reject) => {
        axios.get('http://www.dokitv.com/jadwal-acara-tv')
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                $('#tabeljadwaltv > tbody > tr ').each(function(a, b) {
                    let result = {
                    status: 200,
                    author: '@SudoAnirudh',
                    acara: $(b).find('> td:nth-child(2)').text(),
                    channel: $(b).find('> td > a').text(),
                    jam: $(b).find('> td.jfx').text(),
                    source: $(b).find('> td > a').attr('href')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

function jadwalsholat(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://umrotix.com/jadwal-sholat/${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                $('body > div > div.main-wrapper.scrollspy-action > div:nth-child(3) ').each(function(a, b) {   
                    let result = {
                    status: 200,
                    author: '@SudoAnirudh',
                    tanggal: $(b).find('> div:nth-child(2)').text(),
                    imsyak: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(1) > p:nth-child(2)').text(),
                    subuh: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(2) > p:nth-child(2)').text(),
                    dzuhur: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(3) > p:nth-child(2)').text(),
                    ashar: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(4) > p:nth-child(2)').text(),
                    maghrib: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(5) > p:nth-child(2)').text(),
                    isya: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(6) > p:nth-child(2)').text()
                }
                resolve(result)
                })
            })
            .catch(reject)
    })
}

function pinterest(query) {
    return new Promise((resolve, reject) => {
         axios(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`).then((data) => {
                const random = data.data.resource_response.data.results[Math.floor(Math.random() * (data.data.resource_response.data.results.length))]
                var result = [];
                result = {
                        status: 200,
                        author: '@SudoAnirudh',
                        url: random.images.orig.url
                }
                resolve(result)
            }).catch(reject)
        })
    }
   
function film(query) {
	return new Promise((resolve, reject) => {
		axios.get(`http://167.99.31.48/?s=${query}`)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const hasil = [];
				$('#content > div > div.los').each(function (a, b) {
                    $(b).find('article').each(function (c, d) {
                        const judul = $(d).find('div > a > div.addinfox > header > h2').text()
                        const quality = $(d).find('div > a > div > div > span').text()
                        const type = $(d).find('div > a > div.addinfox > div > i.type').text()
                        const upload = $(d).find('div > a > div.addinfox > div > span').text()
                        const link = $(d).find('div > a').attr('href');
                        const thumb = $(d).find('div > a > div > img').attr('src');
                        const result = {
                            status: 200,
                        	author: '@SudoAnirudh',
                            judul: judul,
                            quality: quality,
                            type: type,
                            upload: upload,
                            link: link,
                            thumb: thumb,
                        };
                        hasil.push(result);
                    });
                });
				resolve(hasil)
			})
			.catch(reject)
	})
}

function wattpad(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.wattpad.com/search/${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('div.story-card-data.hidden-xxs > div.story-info ').each(function(a, b) {
                    $('ul.list-group > li.list-group-item').each(function(c,d) {
                    let result = {
                    status: 200,
                    author: '@SudoAnirudh',
                    judul: $(b).find('> div.title').text(),
                    dibaca: $(b).find('> ul > li:nth-child(1) > div.icon-container > div > span.stats-value').text(),
                    divote: $(b).find('> ul > li:nth-child(2) > div.icon-container > div > span.stats-value').text(),
                    bab: $(b).find('> ul > li:nth-child(3) > div.icon-container > div > span.stats-value').text(),
                    waktu: $(b).find('> ul > li:nth-child(4) > div.icon-container > div > span.stats-value').text(),
                    url:'https://www.wattpad.com' + $(d).find('a').attr('href'),
                    thumb: $(d).find('img').attr('src'),
                    description: $(b).find('> div.description').text().replace(/\n/g,'')
                }
                hasil.push(result)
                })
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

function wattpaduser(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.wattpad.com/user/${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                $('#app-container > div > header ').each(function(a, b) {
                    $('#profile-about > div > div ').each(function(c, d) {
                    let result = {
                    status: 200,
                    author: '@SudoAnirudh',
                    username: $(b).find('> div.badges > h1').text().trim(),
                    works: $(b).find('> div.row.header-metadata > div:nth-child(1) > p:nth-child(1)').text(),
                    reading_list: $(b).find('> div.row.header-metadata > div.col-xs-4.scroll-to-element > p:nth-child(1)').text(),
                    followers: $(b).find('> div.row.header-metadata > div.col-xs-4.on-followers > p.followers-count').text(),
                    joined: $(d).find('> ul > li.date.col-xs-12.col-sm-12 > span').text().trim().replace('Joined',''),
                    pp_picture: `https://img.wattpad.com/useravatar/${query}.128.851744.jpg`,
                    about: $(d).find('> div.description > pre').text() ? $(d).find('> div.description > pre').text() : 'Not found'
                }
                resolve(result)
                })
                })
            })
            .catch(reject)
    })
}

function webtoons(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.webtoons.com/id/search?keyword=${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#content > div.card_wrap.search._searchResult > ul > li ').each(function(a, b) {
                    let result = {
                    status: 200,
                    author: '@SudoAnirudh',
                    judul: $(b).find('> a > div > p.subj').text(),
                    like: $(b).find('> a > div > p.grade_area > em').text(),
                    creator: $(b).find('> a > div > p.author').text(),
                    genre: $(b).find('> a > span').text(),
                    thumbnail: $(b).find('> a > img').attr('src'),
                    url: 'https://www.webtoons.com' + $(b).find('> a').attr('href')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

function mangatoons(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://mangatoon.mobi/en/search?word=${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#page-content > div.search-page > div > div.comics-result > div.recommended-wrap > div > div ').each(function(a, b) {
                    let result = {
                    status: 200,
                    author: '@SudoAnirudh',
                    judul: $(b).find('> div.recommend-comics-title > span').text(),
                    genre: $(b).find('> div.comics-type > span').text().trim(),
                    link: 'https://mangatoon.mobi' + $(b).find('> a').attr('href'),
                    thumbnail: $(b).find('> a > div > img').attr('src')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

function drakor(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://drakorasia.blog//?s=${query}&post_type=post`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#post > div ').each(function(a, b) {
                    let result = {
                    status: 200,
                    author: '@SudoAnirudh',
                    judul: $(b).find('> div.title.text-center.absolute.bottom-0.w-full.py-2.pb-4.px-3 > a > h2').text().trim(),
                    years: $(b).find('> div.title.text-center.absolute.bottom-0.w-full.py-2.pb-4.px-3 > div.category.text-gray.font-normal.text-white.text-xs.truncate > a').text(),
                    genre: $(b).find('> div.title.text-center.absolute.bottom-0.w-full.py-2.pb-4.px-3 > div.genrenya.text-center.text-white.text-opacity-75.text-xs.mt-1').text().trim(),
                    thumbnail: $(b).find('> div.thumbnail > a > img').attr('src'),
                    url: $(b).find('> div.title.text-center.absolute.bottom-0.w-full.py-2.pb-4.px-3 > a').attr('href')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

function stickersearch(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://getstickerpack.com/stickers?query=${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const source = [];
                const link = [];
                $('#stickerPacks > div > div:nth-child(3) > div > a').each(function(a, b) {
                    source.push($(b).attr('href'))
                })
                axios.get(source[Math.floor(Math.random() * source.length)])
                    .then(({
                        data
                    }) => {
                        const $$ = cheerio.load(data)
                        $$('#stickerPack > div > div.row > div > img').each(function(c, d) {
                            link.push($$(d).attr('src').replace(/&d=200x200/g,''))
                        })
                            let result = {
                            status: 200,
                            author: '@SudoAnirudh',
                            title: $$('#intro > div > div > h1').text(),
                            sticker_url: link
                        }
                        resolve(result)
                    })
            }).catch(reject)
    })
}

function listsurah() {
            return new Promise((resolve, reject) => {
                  axios.get('https://litequran.net/')
                  .then(({ data }) => {
                       const $ = cheerio.load(data)
                       let listsurah = []
                       $('body > main > section > ol > li > a').each(function(a, b) {
                    listsurah.push($(b).text())
                })
                        let result = {
                        status: 200,
                        author: '@SudoAnirudh',
                        listsurah: listsurah
                       }
                       resolve(result)
                  }).catch(reject)
             })
        }

function surah(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://litequran.net/${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = []
                $('body > main > article > ol > li').each(function(a, b) {
                    let result = {
                    status: 200,
                    author: '@SudoAnirudh',
                    arab: $(b).find('> span.ayat').text(),
                    latin: $(b).find('> span.bacaan').text(),
                    translate: $(b).find('> span.arti').text()
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

function tafsirsurah(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://tafsirq.com/topik/${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = []
                $('body > div:nth-child(4) > div > div.col-md-6 > div ').each(function(a, b) {
                    let result = {
                    status: 200,
                    author: '@SudoAnirudh',
                    surah: $(b).find('> div.panel-heading.panel-choco > div > div > a').text(),
                    tafsir: $(b).find('> div.panel-body.excerpt').text().trim(),
                    type: $(b).find('> div.panel-heading.panel-choco > div > div > span').text(),
                    source: $(b).find('> div.panel-heading.panel-choco > div > div > a').attr('href')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

function jalantikus(query) {
return new Promise((resolve, reject) => {
axios.get(`https://jalantikus.com/search/articles/${query}/`).then( tod => {
const $ = cheerio.load(tod.data)
let hasil = []
$("div.post-block-with-category").each(function(c, d) {
let title = $(d).find("a.post-block-with-category__link").text()
let category = $(d).find("a.post-info__category-link").text()
let date = $(d).find("time").text()
link = `https://jalantikus.com${$(d).find("a").attr('href')}`
const Data = {
title: title,
category: category,
date: date,
link: link
}
hasil.push(Data)
})
resolve(hasil)
}).catch(reject)
})
}

function tribunnews() {
return new Promise((resolve, reject) => {
axios.get(`https://www.tribunnews.com/news`).then( tod => {
const $ = cheerio.load(tod.data)
let hasil = []
$("li.p1520.art-list.pos_rel").each(function(c, d) {
let title = $(d).find("div.mr140 > h3 > a.f20.ln24.fbo.txt-oev-2").text().trim()
let thumb = $(d).find("div.fr.mt5.pos_rel > a > img.shou2.bgwhite").attr('src')
let desc = $(d).find("div.grey2.pt5.f13.ln18.txt-oev-3").text().trim()
let date = $(d).find("div.grey.pt5 > time.foot.timeago").text().trim()
link = $(d).find("div.fr.mt5.pos_rel > a").attr('href')
const Data = {
title: title,
thumb: thumb,
desc: desc,
date: date,
link: link
}
hasil.push(Data)
})
resolve(hasil)
}).catch(reject)
})
}

function kompasnews() {
    return new Promise((resolve, reject) => {
        axios.get(`https://news.kompas.com/`)
            .then(({
               data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('body > div > div.container.clearfix > div:nth-child(3) > div.col-bs10-7 > div:nth-child(3) > div.latest.ga--latest.mt2.clearfix > div > div ').each(function(a, b) {
                    let result = {
                    status: 200,
                    author: '@SudoAnirudh',
                    berita: $(b).find('> div > div.article__box > h3').text(),
                    upload_time: $(b).find('> div > div.article__box > div.article__date').text(),
                    type_berita: $(b).find('> div > div.article__boxsubtitle > h2').text(),
                    link: $(b).find('> div > div.article__box > h3 > a').attr('href'),
                    thumbnail: $(b).find('> div > div.article__asset > a > img').attr('data-src'),
                    info_berita: $(b).find('> div > div.article__box > div.article__lead').text()
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}
function inews() {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.inews.id/news`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#news-list > li ').each(function(a, b) {
                    let result = {
                    status: 200,
                    author: '@SudoAnirudh',
                    berita: $(b).find('> a > div > div > div.float-left.width-400px.margin-130px-left > h3').text().trim(),
                    upload_time: $(b).find('> a > div > div > div.float-left.width-400px.margin-130px-left > div.date.margin-10px-left').text().trim().split('|')[0],
                    link: $(b).find('> a').attr('href'),
                    thumbnail: $(b).find('> a > div > div > div.float-left.width-130px.position-absolute > img').attr('data-original'),
                    info_berita: $(b).find('> a > div > div > div.float-left.width-400px.margin-130px-left > p').text()
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

async function shoppe(item, limit) {
	const hasil = []
	await axios.request(`https://shopee.co.id/api/v4/search/search_items?by=relevancy&keyword=${item}&limit=${limit}&newest=0&order=desc&page_type=search&scenario=PAGE_GLOBAL_SEARCH&version=2`, {
		method: "GET",
		data: null,
		headers: {
			"accept": "*/*",
			"accept-language": "en-US,en;q=0.9,id;q=0.8",
			"if-none-match-": "55b03-856cd63f16112f8a43da6096f97ac3fe",
			"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
		}
	}).then(respon => {
		hasil.push(respon.data)
	})
	return hasil[0]
}

async function otaku(querry) {
	try {
	const link = await axios.get(`https://otakudesu.moe/?s=${querry}&post_type=anime`)
	const c = cheerio.load(link.data)
	let id = c('#venkonten > div > div.venser > div > div > ul > li:nth-child(1) > h2 > a').attr('href')
	const Link = await axios.get(id)
	const $ = cheerio.load(Link.data)
	let judul = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(1) > span').text().trim()
	let judulJpn = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(2) > span').text().trim()
	let score = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(3) > span').text().trim()
	let Produser = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(4) > span').text().trim()
	let Type = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(5) > span').text().trim()
	let Status = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(6) > span').text().trim()
	let TotalEpisode = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(7) > span').text().trim()
	let durasi = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(8) > span').text().trim()
	let Rilis = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(9) > span').text().trim()
	let studio = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(10) > span').text().trim()
	let genre = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(11) > span').text().trim()
	let thumb = $('#venkonten > div.venser > div.fotoanime').find('img').attr('src')
	let Sinopsis = $('#venkonten > div.venser > div.fotoanime > div.sinopc').find('p').text().trim()
	let LinkDown = $('#venkonten').find('div.venser > div:nth-child(8) > ul > li:nth-child(4) > span:nth-child(1) > a').attr('href')
	const data = {
		creator: '@SudoAnirudh',
		status: link.status,
		result: {
			judul: judul,
			thumb: thumb,
			japan: judulJpn,
			rating: score,
			produser: Produser,
			type: Type,
			status: Status,
			episode: TotalEpisode,
			durasi: durasi,
			rilis: Rilis,
			studio: studio,
			genre: genre,
			link: LinkDown,
			sinopsis: Sinopsis
		}
	}
	return data
} catch (err) {
	var notFond = {
		creator: '@SudoAnirudh',
		status: link.status,
		Pesan: 'maap banh emror😔'
	}
	return notFond
}
}

function covid() {
	return new Promise(async(resolve, reject) => {
		axios.get('https://covid19.go.id/')
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const hasil = [];
			$('#case > div > div > div > div > div:nth-child(2)').each(function(a,b) {
				const pindo = $(b).find('div:nth-child(3) > strong').text()
				const mindo = $(b).find('div:nth-child(5) > strong').text()
				const sindo = $(b).find('div:nth-child(4) > strong').text()
				const upindo = $(b).find('div.pt-4.text-color-black.text-1').text().trim()
			$('#case > div > div > div > div > div:nth-child(1)').each(function(c,d) {
					const neg = $(d).find('div:nth-child(3) > strong').text() 
					const pglo = $(d).find('div:nth-child(4) > strong').text()
					const nglo = $(d).find('div:nth-child(5) > strong').text()
					const up = $(d).find('div.pt-4.text-color-grey.text-1').text().trim()
				const result = {
					message: 'By Hexagon',
					indo : {
						positif_indo: pindo,
						meninggal_indo: mindo,
						sembuh_indo: sindo,
						update_indo: upindo.split(':')[1]
					},
					global: {
						negara: neg,
						positif: pglo,
						meninggal: nglo,
						update: up.split(':')[1].split('\n')[0]

					}
				}
				hasil.push(result)
				})
			})
			resolve(hasil)
		})
		.catch(reject)
	})
}

function lirik(judul){
	return new Promise(async(resolve, reject) => {
   		axios.get('https://www.musixmatch.com/search/' + judul)
   		.then(async({ data }) => {
   		const $ = cheerio.load(data)
   		const hasil = {};
   		let limk = 'https://www.musixmatch.com'
   		const link = limk + $('div.media-card-body > div > h2').find('a').attr('href')
	   		await axios.get(link)
	   		.then(({ data }) => {
		   		const $$ = cheerio.load(data)
		   		hasil.thumb = 'https:' + $$('div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div').find('img').attr('src')
		  		$$('div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics').each(function(a,b) {
		   hasil.lirik = $$(b).find('span > p > span').text() +'\n' + $$(b).find('span > div > p > span').text()
		   })
	   })
	   resolve(hasil)
   })
   .catch(reject)
   })
}

async function lirikv2(querry) {
	return new Promise(async (resolve, reject) => {
		await axios.request({
			url: "https://www.musixmatch.com/search/" + querry,
			method: "GET",
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"accept-language": "en-US,en;q=0.9,id;q=0.8",
				"cache-control": "max-age=0",
				"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\""
			}
		}).then(async res => {
			const ch = cheerio.load(res.data)
			let Url = ch('#search-all-results').find('div.main-panel > div:nth-child(1) > div.box-content > div > ul > li > div > div.media-card-body > div > h2 > a').attr('href')
			await axios.request({
				url: "https://www.musixmatch.com"+ Url,
				method: "GET",
				data: null,
				headers: {
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"accept-language": "en-US,en;q=0.9,id;q=0.8",
					"cache-control": "max-age=0",
					"if-none-match": "W/\"252c5-LEqIxy/rzHPI2QxgG5//NcL3YjQ\"",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
					'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36'
				}
			}).then(({ data }) => {
				const $ = cheerio.load(data)
				let judul = $('#site > div > div > div > main > div > div > div.mxm-track-banner.top > div > div > div').find('div.col-sm-10.col-md-8.col-ml-9.col-lg-9.static-position > div.track-title-header > div.mxm-track-title > h1').text().trim()
				let artis = $('#site > div > div > div > main > div > div > div > div > div > div > div> div > div > h2 > span').text().trim()
				let thumb = $('#site > div > div > div > main > div > div > div.mxm-track-banner.top > div > div > div').find('div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div > img').attr('src')
				let lirik = []
				$('#site > div > div > div > main > div > div > div.mxm-track-lyrics-container').find('div.container > div > div > div > div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics').each(function (a, b) {
					let isi = $(b).find('span').text().trim()
					lirik.push(isi)
				})
				const result = {
					author: "Mecha-Labs",
                    result: {
						judul: judul.replace('Lyrics', ''),
						penyanyi: artis,
						thumb: "https:" + thumb,
						lirik: lirik[0]
					}
				}
				resolve(result)
			}).catch(reject)
		})
	})
}

function komiku(judul) {
	return new Promise(async(resolve,reject) => {
	axios.get('https://data3.komiku.id/cari/?post_type=manga&s=' + encodeURIComponent(judul))
	.then(({ data }) => {
	const $ = cheerio.load(data)
	const img = []; 
	const or = [];
	const ind = [];
	const up = [];
	const des = [];
	const li = [];
	const ch = [];
	const ch1 = [];
	$('div.daftar').each(function (a,b) {
		img.push($(b).find('img').attr('data-src'))
	$('div.kan').each(function(c,d) {
		or.push($(d).find('h3').text().trim())
		ind.push($(d).find('span.judul2').text())
		li.push('https://komiku.id' + $(d).find('a').attr('href'))
		up.push($(d).find('p').text().trim().split('. ')[0])
		des.push($(d).find('p').text().trim().split('. ')[1])
		ch1.push($(d).find('div:nth-child(5) > a').attr('title'))
	$('div.new1').each(function(e,f) {
		ch.push($(f).find('a').attr('title'))
		})
	})
})
	for (let i = 0 ; i < img.length; i++) {
		resolve({
			image: img[i],
			title: or[i],
			indo: ind[i],
			update: up[i],
			desc: des[i],
			chapter_awal: ch[i],
			chapter_akhir: ch1[i],
			link: li[i]
		})
	}
})
	.catch(reject)
	})
}

function ghstalk(username) {
let url= `https://api.github.com/users/${username}`; 
return axios.get(url)
.then(data => {
return data.data
console.log(data.data)
})
}

async function telegraph(buffer) {
  return new Promise(async (resolve, reject) => {
const { ext } = await fromBuffer(buffer)
let form = new FormData
form.append('file', buffer, 'tmp.' + ext)
let res = await fetch('https://telegra.ph/upload', {
method: 'POST',
body: form
})
let img = await res.json()
if (img.error) throw img.error
let hasil = 'https://telegra.ph' + img[0].src
resolve({hasil})
console.log(hasil)
}).catch(reject)
}

function gempa() {
return new Promise((resolve, reject) => {
axios.get('https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg').then((response) => {
const $ = cheerio.load(response.data)
const urlElems = $('table.table-hover.table-striped')
for (let i = 0; i < urlElems.length; i++) {
const urlSpan = $(urlElems[i]).find('tbody')[0]
if (urlSpan) {
const urlData = $(urlSpan).find('tr')[0]
let Kapan = $(urlData).find('td')[1]
let Letak = $(urlData).find('td')[2]
let Magnitudo = $(urlData).find('td')[3]
let Kedalaman = $(urlData).find('td')[4]
let Wilayah = $(urlData).find('td')[5]
let lintang = $(Letak).text().split(' ')[0]
let bujur = $(Letak).text().split(' ')[2]
let hasil = {
Waktu: $(Kapan).text(),
Lintang: lintang,
Bujur: bujur,
Magnitudo: $(Magnitudo).text(),
Kedalaman: $(Kedalaman).text().replace(/\t/g, '').replace(/I/g, ''),
Wilayah: $(Wilayah).text().replace(/\t/g, '').replace(/I/g, '').replace('-','').replace(/\r/g, '').split('\n')[0],
Map: $('div.row > div > img').attr('src')
}
resolve(hasil);
console.log(hasil)
}
}
})
})
}

function servermc() {
return new Promise((resolve, reject) => {
axios.get(`https://minecraftpocket-servers.com/country/indonesia/`).then( tod => {
const $ = cheerio.load(tod.data)
let hasil = []
$("tr").each(function(c, d) {
let ip = $(d).find("button.btn.btn-secondary.btn-sm").eq(1).text().trim().replace(':19132', '')
let port = '19132'
let versi = $(d).find("a.btn.btn-info.btn-sm").text()
let player = $(d).find("td.d-none.d-md-table-cell > strong").eq(1).text().trim()
const Data = {
ip: ip,
port: port,
versi: versi,
player: player
}
hasil.push(Data)
})
resolve(hasil)
}).catch(reject)
})
}

function happymod(query) {
return new Promise((resolve, reject) => {
axios.get(`https://www.happymod.com/search.html?q=${query}`).then(async tod => {
const $ = cheerio.load(tod.data)
let hasil = []
$("div.pdt-app-box").each(function(c, d) {
let name = $(d).find("a").text().trim();
let icon = $(d).find("img.lazy").attr('data-original');
let link = $(d).find("a").attr('href');
let link2 = `https://www.happymod.com${link}`
const Data = {

icon: icon,
name: name,
link: link2
}
hasil.push(Data)
 })
 resolve(hasil);
}).catch(reject)
});
}

function sfilesearch(query) {
return new Promise((resolve, reject) => {
axios.get(`https://sfile.mobi/search.php?q=${query}&search=Search`).then(async tod => {
const $ = cheerio.load(tod.data)
let hasil = []
$("div.list").each(function(i, cuk) {
let icon = $(cuk).find("img").attr("src");
let link= $(cuk).find("a").attr("href");
let name= $(cuk).find("a").text();
const Data = {
icon: icon,
name: name,
link: link
}
hasil.push(Data)

})
resolve(hasil)
});
});
}

function hoax() {
return new Promise((resolve, reject) => {
axios.get(`https://turnbackhoax.id/`).then( tod => {
const $ = cheerio.load(tod.data)
let hasil = []
$("figure.mh-loop-thumb").each(function(a, b) {
$("div.mh-loop-content.mh-clearfix").each(function(c, d) {
link = $(d).find("h3.entry-title.mh-loop-title > a").attr('href');
let img = $(b).find("img.attachment-mh-magazine-lite-medium.size-mh-magazine-lite-medium.wp-post-image").attr('src');
let title = $(d).find("h3.entry-title.mh-loop-title > a").text().trim();
let desc = $(d).find("div.mh-excerpt > p").text().trim();
let date = $(d).find("span.mh-meta-date.updated").text().trim();
const Data = {

title: title,
thumbnail: img,
desc: desc,
date: date,
link: link
}
hasil.push(Data)
})
})
resolve(hasil)
}).catch(reject)
});
}

function ssweb(url) {
  return new Promise(async(resolve,reject) => {
   await getBuffer(`http://fdz-app.herokuapp.com/api/ssweb/mobile/get_screenshot?url=${url}`).then(res => {
   resolve(res)
  })
.catch(reject)
})
}

async function filmapik(query) {
	try{
	const link = await axios.get(`https://filmapik.website/?s=${query}`);
	const c = cheerio.load(link.data)
	let Id = []
	c('#main > div > div.main-content.main-category > div.movies-list-wrap.mlw-category > div.movies-list.movies-list-full ').each(function (a, b) {
		c(b).find('div').each(function (e, d) {
			let id = c(d).find('a').attr('href')
			Id.push(id)
		})
	})
	let Random = Id[Math.floor(Math.random() * (Id.length))]
	const Link = await axios.get(Random)
	const $ = cheerio.load(Link.data)
	let judul = $('#mv-info').find('div.mvi-content > div.mvic-desc > h3').text().trim()
	let view = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-left > p:nth-child(1)').text().trim()
	let genre = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-left > p:nth-child(2)').text().trim()
	let studio = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-left > p:nth-child(3) > span').text().trim()
	let durasi = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-right > p:nth-child(1) > span').text().trim()
	let TvStatus = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-right > p:nth-child(2) > span').text().trim()
	let network = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-right > div > p:nth-child(5) > a').text().trim()
	let thumb = $('#mv-info').find('div.mvi-content > div.thumb.mvic-thumb > img').attr('src')
	let BintangFilm = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > p > span').text().trim()
	const data = {
		author: '@SudoAnirudh',
		status: link.status,
		result: {
			judul: judul,
			thumb: thumb,
			Link: Random,
			penonton: view.replace('Views: ', ''),
			durasi: durasi,
			genre: genre.replace('Genre: ', ''),
			studio: studio,
			TV: TvStatus,
			network: network,
			bintangFilm: BintangFilm
		}
	}
	return data
} catch (err) {
	var notFond = {
		author: '@SudoAnirudh',
		status: link.status,
		Pesan: 'sorry banh emror🙏'
	}
	return notFond
}
}

async function mediafire(url) {
let query = await axios.get(url) 
let cher = cheerio.load(query.data)
let hasil = []
let link = cher('a#downloadButton').attr('href')
let size = cher('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace(' ', '')
let seplit = link.split('/')
let author = '@SudoAnirudh'
let nama = seplit[5]
let mime = nama.split('.')
mime = mime[1]
hasil.push({ author, nama, mime, size, link })
return hasil
console.log(hasil)
}
