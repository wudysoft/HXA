import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command, text, args }) => {
if (!args[0]) throw 'Masukkan Link'
let gw = await fetch('https://malesin.xyz/tiktok?url=' + args[0])
        let males = await gw.json()
        conn.send2ButtonVid(m.chat, males.video, males.title, males.author, `Wm`, `.get ${males.videoWM}`, `Audio`, `.get ${males.audio}`, fakes, adReply)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tiktok)$/i

export default handler

/*
import fetch from 'node-fetch'
import axios from 'axios'
import { tiktok } from "social_media_downloader"
let handler = async (m, { conn, usedPrefix, command, text, args }) => {
if (!args[0]) throw 'Masukkan Link'
try {
let p = await tiktok(args[0])
    if (!p.link) throw 'Can\'t download video!'
    let cap = `*「 T I K T O K 」*
                 ████████▀▀▀████
                 ████████────▀██
                 ████████──█▄──█
                 ███▀▀▀██──█████
                 █▀──▄▄██──█████
                 █──█████──█████
                 █▄──▀▀▀──▄█████
                 ███▄▄▄▄▄███████
──────────────────────────

*📛Nickname:* ${p.dev}
*📒Description:* ${p.description}
*Url:* ${p.url}
`.trim()
conn.send2ButtonVid(m.chat, p.link, cap, author, `No Wm`, `.tiktoknowm ${args[0]}`, `Audio`, `.tiktokaudio ${args[0]}`, fakes, adReply)
} catch (e) {
    throw eror
    }
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^t(iktok(d(own(load(er)?)?|l))?|td(own(load(er)?)?|l))$/i

export default handler
*/