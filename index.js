const axios = require('axios')
const chalk = require('chalk')
const moment = require('moment-timezone')
const { smsg, kyun } = require('./lib/myfunc.js')
const { color, bgcolor, KonsolLog } = require('./lib/color.js')
const { sleep } = require ('./lib/myfunc(1).js')

module.exports = zaki = async (zaki, msg, m) => {
	try {
        var budy = (typeof m.text == 'string' ? m.text : '')
	    const from = m.key.remoteJid
        const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        const pushname = m.pushName || 'undefined'
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	
	    const ownerNumber = [`6285786448589@s.whatsapp.net`]
	    const isOwner = ownerNumber.includes(m.sender)
	    const groupMetadata = m.isGroup ? await zaki.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
 
        if (m.message) {
        	console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', time + ' WIB', chalk.green(budy || m.mtype), 'from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat' ))
        }
        
        //Auto Read
        zaki.readMessages([m.key])
        //Auto ketik
        zaki.sendPresenceUpdate('composing', m.chat) 
        let setting = '15745166618'
        dataa = await fetch(`https://api.countapi.xyz/hit/FaxBot${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`)
			jumlahharian = `${dataa.value}`
			if (new Date() * 1 - setting.status > 1000) {
				await zaki.setStatus(`Sim-Simi | Runtime:  | request: ${jumlahharian}`)
				setting.status = new Date() * 1
			}
        
            // anticall auto block
    zaki.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    //let pa7rick = await ALYA.sendContact(callerId, global.owner)
    zaki.sendMessage(callerId, { text: `Sistem otomatis block!\nJangan menelpon bot!\nSilahkan Hubungi Owner Untuk Dibuka !`}, { quoted : msg })
    await sleep(8000)
    await zaki.updateBlockStatus(callerId, "block")
    }
    })
        
         
               try {
                    if (!m.isGroup && !isMedia && !m.key.fromMe) {
	                simi = await fetch(`https://simsimi.info/api/?text=${budy}&lc=id`)
					let res = await simi.json()
                    zaki.sendMessage(from, { text: `${res.message}` }, {quoted: msg})
                    }
                    } catch {
                    zaki.sendMessage(from, { text: 'Maaf aku tidak mengerti maksudmuu, Tolong ajari aku' }, {quoted: msg})
                    }
                    
                    if (budy.startsWith('>')){
                    if (!isOwner && !m.key.fromMe) return
                    console.log(color('[ EVAL ]','yellow'), budy.slice(2))
                    try {
                    let evaled = await eval(budy.slice(2))
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    await m.reply(evaled)
                    } catch (err) {
                    await m.reply(String(err))
                    }
                    }

} catch (e){
	console.log(e)
	}
}
