const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_18_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA4NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDksXG4gICAgICAgIDQyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NCxcbiAgICAgICAgNixcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDYwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAzNixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDUzLFxuICAgICAgICAyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTA5LFxuICAgICAgICA1NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDg3LFxuICAgICAgICA3NCxcbiAgICAgICAgMixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTksXG4gICAgICAgIDUzLFxuICAgICAgICA4MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDU2LFxuICAgICAgICA5NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDU4LFxuICAgICAgICA3MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTksXG4gICAgICAgIDYsXG4gICAgICAgIDczLFxuICAgICAgICAyOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNixcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgODEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDM5LFxuICAgICAgICAyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDEyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4LFxuICAgICAgICA1LFxuICAgICAgICAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxODAsXG4gICAgICAgIDgxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPeXQ3ajlPTlNjcW5MZ3ppTm9qT05EbXBNL0lMbXd6OTk1a3RqWG1aVmxBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJM2xfN0JLWlFMaS15a0ltOHo4Q0RRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVhMTY5YzAxLWFjNzMtNDgxYy04ZDE1LTBmYzI5MjY2ZTQ2OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OSxcbiAgICAgIDIyLFxuICAgICAgMjM5LFxuICAgICAgMTMsXG4gICAgICAxODQsXG4gICAgICAxNSxcbiAgICAgIDExNSxcbiAgICAgIDI0NSxcbiAgICAgIDU3LFxuICAgICAgNTUsXG4gICAgICA3MCxcbiAgICAgIDE0NyxcbiAgICAgIDIzMSxcbiAgICAgIDk0LFxuICAgICAgMjUxLFxuICAgICAgMzksXG4gICAgICA3OCxcbiAgICAgIDIzLFxuICAgICAgMjE3LFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQyLFxuICAgICAgMTM0LFxuICAgICAgNDksXG4gICAgICAyMjYsXG4gICAgICAxNSxcbiAgICAgIDQzLFxuICAgICAgMjUsXG4gICAgICAyMDcsXG4gICAgICAxMjksXG4gICAgICAxNzksXG4gICAgICA5NSxcbiAgICAgIDg3LFxuICAgICAgMTE5LFxuICAgICAgMTYwLFxuICAgICAgMTU1LFxuICAgICAgMTM5LFxuICAgICAgMTEsXG4gICAgICAzLFxuICAgICAgMzcsXG4gICAgICA5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXOFpLNkY0R1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA4MTE3MDU2NToxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlTDvMOxZMOqeCBFbnRlcnByaXNlXCIsXG4gICAgXCJsaWRcIjogXCIxNTcyMzA2NDkzNDgyNjY6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVNiaEpFREVON3FyclVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMMEtKdGVKNlRWc0FvVUZmcVlKakhZMUtTQTc1VWFvcnZWajNRK1FQdHprPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9QVnlFOVNQSWFmV01OQkE0aWcyNGFldnduVkdXRVEranRsQ2lYaXpWMnJYZkkxUDdSZG14NXRiVXpaekNoMzlNVDN1ZkJ2c3VmdlhqeVo3YWdQdkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkVia1BScmp5V0JGNWpPak5rQkVlZzhURlM1dVVGWVI1WGVxWTlJbUdWejVQRU9tbXJsNmxvekNKWjdLZ3Btd1YySjBsdmQ5Z05kQS8rcUpYT2RhREJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwODExNzA1NjU6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjUyOTEyMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhnb1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGdvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRzAvYXRUMFpvMW5JYWphTzRzRk0zSEU3b2dXNDd5VjVXTWxkUjZSU09HST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NDEwMjcwMTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjUyOTEyNjcxOFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "" ,/**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
