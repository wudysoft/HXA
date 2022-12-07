import { mediafiredl } from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file`
try {
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
*💌 Name:* ${filename}
*📊 Size:* ${filesizeH}
*🗂️ Extension:* ${ext}
*📨 Uploaded:* ${aploud}
`.trim()
    m.reply(caption)
    await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
    } catch {
    let res = await fetch(`https://api.lolhuman.xyz/api/mediafire?apikey=${global.lolkey}&url=${args[0]}`)
    let x = await res.json()
    if (!x.result.filename) throw 'Error Gan'
    let caption = `*${htki} mediafire ${htka}*
*💌 Name:* ${x.result.filename}
*🗂️ Extension:* ${x.result.filetype}
*📊 Size:* ${x.result.filesize}
*📨 Uploaded:* ${x.result.uploaded}
    `
    if (x.result.filename) return conn.sendButtonImg(m.chat, logo, caption, author, 'G E T', '.get ' + x.result.link, fakes, adReply)
    }
}
handler.help = ['mediafire']
handler.tags = ['downloader']
handler.command = /^m(ediafire(d(own(load(er)?)?|l))?|f(d(own(load(er)?)?|l))?)$/i

handler.limit = true

export default handler
