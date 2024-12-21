/*
      HUNTER
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

global.namaowner = "HUNTER HACK3R"
global.owner = "3197010587051"
global.namabot = "HUNTER"
global.botname = "HUNTER"
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
global.save = "HUNTER"
global.keyopenai = `sk-proj-EXdCaNbBfwrOJaqCjcTDT3BlbkFJyFvdbMAMopdT2vaEhuZj`
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = ""
global.author = "Sticker By HUNTER"

global.namastore = "HUNTER"
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
       text: "*Show Me Text*",
       link: "*Where is the Link*",
   },
   error: {
       fitur: "*Ask Hassan*", 
   },
   only: {
       group: "*Only For Groups*",
       private: "*Oly For Private Chats*",
       owner: "*Only For HUNTER*",
       admin: "*Only For HUNTER*",
       badmin: "*Only For HUNTER*",
       premium: "*Only For HUNTER*",
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
