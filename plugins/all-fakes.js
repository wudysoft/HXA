/* Recoded By HinataBot */
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import knights from 'knights-canvas'
export async function before(m, { conn } ) {
/* Siapa */
	let who
	try { who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender }
		catch (e) { who = m.sender ? m.sender : conn.user.jid && conn.user.jid ? conn.user.jid : '0@s.whatsapp.net' }
/* Namanya */
	let name = await conn.getName(who)
	
/* Hiasan */
		let emo = ['๐ฟ', '๐ป', 'โก', '๐ฆ', '๐', '๐', '๐ช', '๐', '๐', '๐ฎ', '๐งง', '๐ท๏ธ', '๐ฎ', '๐', '๐', '๐', '๐ซ', '๐', '๐', 'โจ', 'โ๏ธ', '๐', '๐๏ธ', '๐น']
		
		let ini_kotak = ['โถ','โ','โซนโซบ','โฐ','โ','โฆ','โญ','โฌ','โ','โ'].getRandom()
		let ini_titik = ['โ','โญ','เฌ','โโข','โณปโณป','โข','โฌ','โโป','โญ','แฏฌ','โ','แญป','ยป','ใ','ใ','โฅ','โ','โ','โ','โช'].getRandom()
		let ini_garis = ['โโโโ','โโโ','โโโโ','โโโโ','โโโโโ','โโโโโ','โโโโโ','โโโโโ','โโโโโโโ','โโโโ'].getRandom()
		let ini_panjang = ['โโโโโโโโ','โโโโโโ','โโโโโโโโ','โโโโโโโโ','โโโโโโโโโโ','โโโโโโโโโโ','โโโโโโโโโโ','โโโโโโโโโโ','โโโโโโโโโโโโโโ','โโโโโโโโ'].getRandom()
		let ini_L = ['โ','โ','โ','โ','โ','โ','โฐ'].getRandom()
		let ini_I = ['โ','โ','โ','โ','โ','โ','โ','โ','โ'].getRandom()
		let ini_atas = ini_kotak + ini_garis + 'ใ'
		let ini_kiri = ini_I + ini_titik
		let ini_bawah = ini_L + ini_panjang + ini_kotak
		let ini_kanan = 'ใ' + ini_garis + ini_kotak
		
		/* Thumbnail */
		let gh = 'https://raw.githubusercontent.com/wudysoft/RestApi/master/data/'
		let a_ = await fetch(gh + 'waifu.json')
		let link_waifu = await a_.json()
		let b_ = await fetch(gh + 'Mountain.json')
		let c_ = await fetch(gh + 'GameWallp.json')
		let link_game = await c_.json()
		let d_ = await fetch(gh + 'cosplay.json')
		let e_ = await fetch(gh + 'loli.json')
		let f_ = await fetch(gh + 'yuri.json')
		let g_ = await fetch(gh + 'neko.json')
		let h_ = await fetch(gh + 'cosplayloli.json')
		let i_ = await fetch(gh + 'hentai.json')
		let j_ = await fetch(gh + 'hinata.json')
		let k_ = await fetch(gh + 'Technology.json')
		let k__ = await k_.json()
		let l_ = await fetch(gh + 'kucing.json')
		let l__ = await l_.json()
		let m_ = await fetch(gh + 'naruto.json')
		let m__ = await m_.json()
		let n_ = await fetch(gh + 'CyberSpace.json')
		let n__ = await n_.json()
		let o_ = await fetch(gh + 'profil.json')
		let o__ = await o_.json()
		
	let sapa = ['สแดษช', 'แดสแดสแด', 'แดสแดแด', 'สแดสแด', 'ษดสแดษดษด'].getRandom()
	let curr = ['IDR','RSD','USD'].getRandom()
	let pp
	try { pp = await conn.profilePictureUrl(who, 'image') }
	catch (e) { pp = o__.getRandom() }
	
    /* jpegThumbnail */
    let _situm = await conn.resize(link_game.getRandom(), 300, 150)
    let sipp = await conn.resize(pp, 150, 150)
    
    /* Fake Knights */
		let imagea = await new knights.Jo().setImage(pp).toBuild();
		let dataa = imagea.toBuffer();
		let imageb = await new knights.Patrick().setAvatar(pp).toAttachment();
		let datab = imageb.toBuffer();
		let imagec = await new knights.Bonk().setAvatar1(pp).setAvatar2(pp).toBuild();
		let datac = imagec.toBuffer();
		let imaged = await new knights.Burn().setAvatar(pp).toAttachment();
		let datad = imaged.toBuffer();
		let _kn = [dataa, datab, datac, datad].getRandom()
		
		/* Hiasan */
		global.emojis = emo.getRandom()
		global.dmenut = ini_atas
		global.dmenub = ini_kiri
		global.dmenub2 = ini_kiri
		global.dmenuf = ini_bawah
		global.cmenut = ini_atas
		global.cmenuh = ini_kanan
		global.cmenub = ini_kiri
		global.cmenuf = ini_bawah
		global.pmenus = ini_titik
		global.dashmenu = ini_titik + ' *D A S B O A R D* ' + ini_titik
		global.htki = ini_atas
		global.htka = ini_kanan
		global.htjava = ini_titik
		
		/* Thumbnail */
		global.hwaifu = link_waifu
		global.hbeach = await b_.json()
		global.thumbnailUrl = link_game
		global.hoppai = await d_.json()
		global.hloli = await e_.json()
		global.hyuri = await f_.json()
		global.hneko = await g_.json()
		global.hLokun = await h_.json()
		global.hbunny = await i_.json()
		global.thumbs = await j_.json()
		global.thumb = k__.getRandom()
		global.imagebot = l__.getRandom()
		global.thumbdoc = n__.getRandom()
		global.logo = m__.getRandom()
		
		/* Begin */
		global.ucapan = ucapkan()
		global.ephemeral = '86400'
		
		/* Fake adReply */
		global.adReplyS = {
		fileLength: fsizedoc, seconds: fsizedoc,
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
						showAdAttribution: true,
						title: author,
						body: '๐ ' + sapa + ' แดแดแด :3 ' + name,
						mediaUrl: sgc,
						description: botdate,
						previewType: 'PHOTO',
						thumbnail: await(await fetch(pp)).buffer(),
						sourceUrl: sgh
				}
			}
		}
		global.adReply = {
		fileLength: fsizedoc, seconds: fsizedoc,
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
						body: botdate,
						containsAutoReply: true,
						mediaType: 1,
						mediaUrl: sgc,
						renderLargerThumbnail: true,
						showAdAttribution: true,
						sourceId: author,
						sourceType: 'PDF',
						previewType: 'PDF',
						sourceUrl: sgc,
						thumbnail: await(await fetch(pp)).buffer(),
						thumbnailUrl: pp,
						title: '๐ ' + sapa + ' แดแดแด :3 ' + name
				}
			}
		}
		global.fakeig = {
		fileLength: fsizedoc, seconds: fsizedoc,
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: sig,
						mediaType: 'VIDEO',
						description: '๐๐ผ๐น๐น๐ผ๐: ' + sig,
						title: '๐ ' + sapa + ' แดแดแด :3 ' + name,
						body: botdate,
						thumbnailUrl: pp,
						sourceUrl: sgc
					}
				}
			}
			global.fakefb = {
			fileLength: fsizedoc, seconds: fsizedoc,
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: sfb,
						mediaType: 'VIDEO',
						description: '๐๐ผ๐น๐น๐ผ๐: ' + sfb,
						title: '๐ ' + sapa + ' แดแดแด :3 ' + name,
						body: botdate,
						thumbnailUrl: pp,
						sourceUrl: sfb
					}
				}
			}
			global.faketik = {
			fileLength: fsizedoc, seconds: fsizedoc,
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: snh,
						mediaType: 'VIDEO',
						description: '๐๐ผ๐น๐น๐ผ๐: ' + snh,
						title: '๐ ' + sapa + ' แดแดแด :3 ' + name,
						body: botdate,
						thumbnailUrl: pp,
						sourceUrl: snh
					}
				}
			}
			global.fakeyt = {
			fileLength: fsizedoc, seconds: fsizedoc,
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: syt,
						mediaType: 'VIDEO',
						description: '๐๐ผ๐น๐น๐ผ๐: ' + syt,
						title: '๐ ' + sapa + ' แดแดแด :3 ' + name,
						body: botdate,
						thumbnailUrl: pp,
						sourceUrl: syt
					}
				}
			}
			
			/* Fake Reply */
		let fpayment = {
				key: {
					participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
				},
				message: {
					requestPaymentMessage: {
						currencyCodeIso4217: curr,
						amount1000: fsizedoc,
						requestFrom: '0@s.whatsapp.net',
						noteMessage: {
							extendedTextMessage: {
								text: '๐ ' + sapa + ' แดแดแด :3 ' + name
							}
						},
						expiryTimestamp: fsizedoc,
						amount: {
							value: fsizedoc,
							offset: fsizedoc,
							currencyCode: curr
						}
					}
				}
			}
			let fpoll = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				pollCreationMessage: {
					name: '๐ ' + sapa + ' แดแดแด :3 ' + name
				}
			}
		}
		let ftroli = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				orderMessage: {
					itemCount: fsizedoc,
					status: 1,
					surface: 1,
					message: botdate,
					orderTitle: author,
					sellerJid: '0@s.whatsapp.net'
				}
			}
		}
		let fkontak = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				contactMessage: {
					displayName: author,
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${who.split('@')[0]}:${who.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`,
					jpegThumbnail: sipp,
					thumbnail: sipp,
					sendEphemeral: true
				}
			}
		}
		let fvn = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				audioMessage: {
					mimetype: 'audio/ogg; codecs=opus',
					seconds: fsizedoc,
					ptt: true
				}
			}
		}
		let fvid = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				videoMessage: {
					title: author,
					h: 'Hmm',
					seconds: fsizedoc,
					caption: '๐ ' + sapa + ' แดแดแด :3 ' + name,
					jpegThumbnail: sipp
				}
			}
		}
		let ftextt = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				extendedTextMessage: {
					text: '๐ ' + sapa + ' แดแดแด :3 ' + name,
					title: botdate,
					jpegThumbnail: sipp
				}
			}
		}
		let fliveLoc = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				liveLocationMessage: {
					caption: '๐ ' + sapa + ' แดแดแด :3 ' + name,
					h: botdate,
					jpegThumbnail: sipp
				}
			}
		}
		let ftoko = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				productMessage: {
					product: {
						productImage: {
							mimetype: 'image/jpeg',
							jpegThumbnail: sipp
						},
						title: '๐ ' + sapa + ' แดแดแด :3 ' + name,
						description: botdate,
						currencyCode: 'IDR',
						priceAmount1000: fsizedoc,
						retailerId: 'Ghost',
						productImageCount: 1
					},
					businessOwnerJid: '0@s.whatsapp.net'
				}
			}
		}
		let fdocs = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				documentMessage: {
					title: author,
					jpegThumbnail: sipp
				}
			}
		}
		let fgif = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				videoMessage: {
					title: '๐ ' + sapa + ' แดแดแด :3 ' + name,
					h: 'Hmm',
					seconds: fsizedoc,
					gifPlayback: true,
					caption: botdate,
					jpegThumbnail: sipp
				}
			}
		}
		let _pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'].getRandom()
		let _pft = [fdocs, fgif, fkontak, fliveLoc, fpayment, fpoll, ftextt, ftoko, ftroli, fvid, fvn].getRandom()
		
		/* Global Fake */
		global.doc = _pdoc
		global.fakes = _pft
		global.knimg = _kn
		global.tumhiho = _situm
		
		/* Ends */
}

function ucapkan() {
	let waktunya = moment.tz('Asia/Jakarta').format('HH')
	let ucapin = 'Selamat malam ๐'
	if(waktunya >= 1) {
		ucapin = 'Selamat Pagi ๐ฟ'
	}
	if(waktunya >= 4) {
		ucapin = 'Selamat pagi ๐'
	}
	if(waktunya > 10) {
		ucapin = 'Selamat siang โ๏ธ'
	}
	if(waktunya >= 15) {
		ucapin = 'Selamat sore ๐'
	}
	if(waktunya >= 18) {
		ucapin = 'Selamat malam ๐'
	}
	if(waktunya >= 24) {
		ucapin = 'Selamat Begadang ๐ฟ'
	}
	return ucapin
}