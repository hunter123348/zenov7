/*
      Hassan
*///========

const fs = require('fs')
const chalk = require('chalk')
const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

global.namaowner = "𝙈𝙧ܓ𝙃𝙖𝙨𝙨𝙖𝙣"
global.owner = "923107612528"
global.namabot = "𝙈𝙧ܓ𝙃𝙖𝙨𝙨𝙖𝙣"
global.botname = "𝙈𝙧ܓ𝙃𝙖𝙨𝙨𝙖𝙣"
global.simbol = "⌑"
global.autoJoin = false
global.domain = "-"
global.apikey = "-"
global.capikey = "-"
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.dray = fs.readFileSync("./database/menu.mp4")
global.codeInvite = "FwtMxovJqW3Jj55x524hjT"
global.sessionName = 'drayyy' //Gausah Juga
global.save = "𝙈𝙧ܓ𝙃𝙖𝙨𝙨𝙖𝙣"
global.keyopenai = `sk-proj-EXdCaNbBfwrOJaqCjcTDT3BlbkFJyFvdbMAMopdT2vaEhuZj`
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = ""
global.author = "Sticker By 𝙈𝙧ܓ𝙃𝙖𝙨𝙨𝙖𝙣"

global.namastore = "𝙈𝙧ܓ𝙃𝙖𝙨𝙨𝙖𝙣"
global.dana = "088803536269" // NOMER DANA KAMU
global.gopay = "" // NOMER GOPAY KAMU
global.ovo = "" // NOMER OVO KAMU
global.shp = "" // NOMER SHOPE KAMU
global.qris = fs.readFileSync("./database/dray/qris.jpg")
require("./database/youtube.js")

global.autojpmm = `JOIN SINI BANG

LINK LU :`// TEXT JPM LU

const mess = {
   wait: "*Wait..*",
   success: "*Success* ✔",
   save: "*Success Hassan*",
   on: "*Active*", 
   off: "*Not Active*",
   query: {
       text: "*Show Me Text*"
       link: "*Where is the Link*",
   },
   error: {
       fitur: "*Ask Hassan*", 
   },
   only: {
       group: "*Only For Groups*",
       private: "*Oly For Private Chats*",
       owner: "*Only For Hassan*",
       admin: "*Only For Hassan*",
       badmin: "*Only For Hassan*",
       premium: "*Only For Hassan*",
   }
}

global.mess = mess
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
