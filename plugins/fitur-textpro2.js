let handler = async(m, { conn, text, args, usedPrefix, command }) => {

  if (!args[0]) return m.reply(`Example : ${usedPrefix + command} choror|helo|banh
  *List Efek:*
 pornhub
 choror
 spooky
 layered
 aglitch
 captainamerica`)
  
  let urut = text.split`|`
  let thm = urut[0]
  let text1 = urut[1]
  let text2 = urut[2]
  
        let images = global.API('xcdr', `/api/textpro/${thm}`, { text: text1, text2: text2 }, 'apikey')
        let caption = `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${thm}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], fakes, adReply)
            }
handler.command = /^(textpro2|textprome2)$/i

export default handler