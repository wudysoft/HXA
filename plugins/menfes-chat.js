async function handler(m, { conn, text, usedPrefix, command, args }) {
	// Batas
    let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[0] ? (args[0].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
	let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || ''
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	let tujuan = `👋 Saya *${conn.user.name}*, Pesan Untuk Kamu
👥 Dari : *PENGIRIM RAHASIA*

${htki} 💌 Pesan ${htka}
${htjava} ${txt}
`
	let cap = `${htki} PESAN RAHASIA ${htka}
Anda Ingin Mengirimkan Pesan ke pacar/sahabat/teman/doi/
mantan?, tapi Tidak ingin tau siapa Pengirimnya?
Kamu bisa menggunakan Bot ini
Contoh Penggunaan: ${usedPrefix + command} ${nomorown} pesan untuknya

Contoh: ${usedPrefix + command} ${nomorown} hai`
let suks = `Mengirim Pesan *${mime ? mime : 'Teks'}*
👥 Dari : @${m.sender.replace(/@.+/, '')}
👥 Untuk : @${mention.replace(/@.+/, '')}

${htki} 💌 Pesan ${htka}
${htjava} ${txt ? txt : 'Pesan Kosong'}
`
    // Batas
    command = command.toLowerCase()
    this.menfes = this.menfes ? this.menfes : {}
    switch (command) {
        case 'menfesleave': {
            let room = Object.values(this.menfes).find(room => room.check(m.sender))
            if (!room) return this.sendButton(m.chat, '*Kamu tidak sedang berada di menfes chat*', author, null, [['Mulai Menfes', '.menfesstart']], null)
            m.reply('Sukses Hapus Menfes')
            let other = room.other(m.sender)
            if (other) await this.sendButton(other, room.b + ' *Meninggalkan chat*', author, null, [['Mulai Menfes', '.menfesstart']], null)
            delete this.menfes[room.id]
            if (command === 'menfesleave') break
        }
        case 'menfesstart': {
            if (Object.values(this.menfes).find(room => room.check(m.sender))) return this.sendButton(m.chat, '*Kamu masih berada di dalam menfes chat, menunggu Balasan*', author, null, [['Hapus Menfes', '.menfesleave']], null)
            let room = Object.values(this.menfes).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                room.b = m.sender
                room.state = 'CHATTING'
                await this.sendButton(room.a, '*Menfes Chat Tersambung!*\nDengan: ' + m.sender, author, null, [['Hapus Menfes', '.menfesleave']], null)
                await this.sendButton(m.sender, '*Menfes Chat Tersambung!*\nDengan: ' + room.a, author, null, [['Hapus Menfes', '.menfesleave']], null)
            } else {
            // Batas
	if (!m.quoted) {
		await conn.sendButton(mention, tujuan, cap, null, [['B A L A S', '.menfesstart']], null)
	} else {
		await conn.sendButton(mention, tujuan, cap, null, [['B A L A S', '.menfesstart']], null)
		let media = q ? await m.getQuotedObj() : false || m
		await conn.copyNForward(mention, media, false).catch(_ => _)
	}
	await conn.sendButton(m.chat, suks, wm, null, [['Tes Bot', 'tes']], m, { mentions: conn.parseMention(suks) })
            // Batas
                let id = + new Date
                this.menfes[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                await this.sendButton(m.chat, '*Menunggu Balasan...*', author, null, [['Hapus Menfes', '.menfesleave']], null)
            }
            break
        }
    }
}
handler.help = ['menfesstart', 'menfesleave']
handler.tags = ['menfes']
handler.command = ['menfesstart', 'menfesleave']

handler.private = true

export default handler