let handler = async(m, { conn, text, args, usedPrefix, command }) => {

  if (!args[0]) return m.reply(`Example : ${usedPrefix + command} neon helo
   *List Efek:*
bear
berry
blackpink
blood
broken
carbon
christmas
circuit
devil
discovery
dropwater
embossed
fiction
firework
glossy
glue
gradient
greenhorror
harrypotter
imglitch
light
magma
metallic
neon
paper
skeleton
sketch
stone
transformer
videogame`)

  let thm = args[0]
  let text1 = args.slice(1).join(' ')
        let images = global.API('xcdr', `/api/textpro/${thm}`, { text: text1 }, 'apikey')
        let caption = `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${thm}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], fakes, adReply)
            }

handler.command = /^(textpro|textprome)$/i

export default handler