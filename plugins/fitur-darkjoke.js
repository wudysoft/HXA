import fetch from 'node-fetch'
import bo from 'dhn-api'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
try {
    let listSections = []
	listSections.push(['No. ' + ++index, [
          ['Metode A', usedPrefix + command + ' a', '\nā *By:* ' + author],
          ['Metode B', usedPrefix + command + ' b', '\nā *By:* ' + author]
                  ]])
        if (!args[0]) return conn.sendList(m.chat, htki + ' šŗ Dark Search š ' + htka, `ā” Silakan pilih Dark Search di tombol di bawah...\n*Teks yang anda kirim:* ${args[0]}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `āļø Dark Search Disini āļø`, listSections, m)

if (args[0] == 'a') {
let caption = `*āāāć Random darkjoke ćāāā*
š¤  *Query* : ${command}`
        let images = global.API('xcdr', '/api/random/darkjoke', {}, 'apikey')
        await conn.sendButton(m.chat, caption, wm, images, [['Darkjoke','.darkjoke']] , m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            jpegThumbnail: Buffer.alloc(0), contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: 'š Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
        } 
        if (args[0] == 'b') {
        let res = await bo.Darkjokes()
await conn.sendButton(m.chat, caption, wm, res, [['Darkjoke','.darkjoke']] , m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            jpegThumbnail: Buffer.alloc(0), contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: 'š Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
} catch (e) {
    throw eror
    }
}
handler.help = ['darkjoke']
handler.tags = ['fun']
handler.command = /^(darkjoke)$/i

export default handler
