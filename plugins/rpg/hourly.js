var fs = require('fs')
var handler = async (msg, { 
client, text, command, usedPrefix
}) => {
var _timers = (3600000 - (new Date - user.lasthourly))
var timers = Func.clockString(_timers) 
if (new Date - user.lasthourly > 3600000) {
var bufer = await Func.resize(fs.readFileSync('./global/media/rpg/hourly.jpg'), 300, 150)
var buttons = await Func.duaButton('.daily','Daily','.weekly','Weekly')
client.sendImage(msg.from, bufer, `*δΉ H O U R L Y  -  C L A I M*

+ Rp 500 Money π΅
+ 1 Wood πͺ΅
+ 2 Potion π₯€
+ 5 Rock πͺ¨
+ 10 String πΈοΈ
+ 1 Common Crate π¦
`, msg, { asLocation: true, buttons: buttons, headerType: 4, footer: wm })
user.money += 500 * 1
user.wood += 1 * 1
user.potion += 2 * 1
user.rock += 1 * 5
user.string += 2 * 5
user.common += 1 * 1
user.lasthourly = new Date * 1
} else {
client.reply(msg.from, `π© Kamu sudah melakukan hourly, silahkan menunggu satu jam kemudian untuk melakukan hourly lagi.\n\nTimeout : [ *${timers}* ]`, msg)
}
}
handler.tags = ['rpg']
handler.help = ['hourly']
handler.command = /^(hourly)$/i

module.exports = handler
