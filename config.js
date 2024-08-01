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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_41_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA2MixcbiAgICAgICAgMTUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDExLFxuICAgICAgICAyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMixcbiAgICAgICAgODQsXG4gICAgICAgIDU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDk1LFxuICAgICAgICA4MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDcyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4NixcbiAgICAgICAgNTcsXG4gICAgICAgIDMsXG4gICAgICAgIDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDY5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgzLFxuICAgICAgICAyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEzLFxuICAgICAgICA2NixcbiAgICAgICAgMzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDY5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNixcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTczLFxuICAgICAgICAyMzQsXG4gICAgICAgIDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDM1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY4LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgODcsXG4gICAgICAgIDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDk1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDY0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAzNixcbiAgICAgICAgMTEzLFxuICAgICAgICA3NixcbiAgICAgICAgMzUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIMFRYWTUzTk0xMHVBWHhYeVNZY21vSUhMMFN0NGtObTFpRkl6ZnFrTXhFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFUWoyWVZPaVEydVJWU3Zza0NXUUFBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNjZTBkZTg1LTQ2ZWItNGYwNS1hNTA3LWZmOWFlOThjYjMzOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MSxcbiAgICAgIDExNCxcbiAgICAgIDUzLFxuICAgICAgMjMyLFxuICAgICAgMTYxLFxuICAgICAgMjI4LFxuICAgICAgMTksXG4gICAgICAyNTAsXG4gICAgICAxMjcsXG4gICAgICA0MixcbiAgICAgIDk5LFxuICAgICAgMjMyLFxuICAgICAgNTksXG4gICAgICAxMTIsXG4gICAgICAxNTQsXG4gICAgICAxMTQsXG4gICAgICAxOCxcbiAgICAgIDgxLFxuICAgICAgNzYsXG4gICAgICAxMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUyLFxuICAgICAgMjM1LFxuICAgICAgODUsXG4gICAgICA5MSxcbiAgICAgIDQ0LFxuICAgICAgODQsXG4gICAgICAxNzgsXG4gICAgICAxMjYsXG4gICAgICA1NCxcbiAgICAgIDE1MCxcbiAgICAgIDIyLFxuICAgICAgMTU5LFxuICAgICAgNzIsXG4gICAgICA0MyxcbiAgICAgIDIxOSxcbiAgICAgIDY4LFxuICAgICAgNTEsXG4gICAgICAyMTYsXG4gICAgICAzMyxcbiAgICAgIDIwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLWEFRUkhRR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA4MTE3MDU2NToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlTDvMOxZMOqeCBFbnRlcnByaXNlXCIsXG4gICAgXCJsaWRcIjogXCIxNTcyMzA2NDkzNDgyNjY6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVdiaEpFREVLRDFyclVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMMEtKdGVKNlRWc0FvVUZmcVlKakhZMUtTQTc1VWFvcnZWajNRK1FQdHprPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkVPZmFpVkhsQ1FvY1lvWlhqaHJQUDQ0VHcrYlFlcU9BV1RtaWNjTTJXZHVIZFNYQ0FYdmZiT1lhWFFXWTc2NldzTno5QlpnZGY5cG5Bd01tZGwwUUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRWa3VwdzlOTXhIWlk0d0JnMnhWRlpzRVlLbm1EVHlRQVdBVWYxSE4rUDE4WUxEOVJ4dGYvcHZVOWpDWldwK21zVG4yZkd1emlvUSthUWNieWhncUJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwODExNzA1NjU6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjUzMDQ2OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhnb1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGdvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRzAvYXRUMFpvMW5JYWphTzRzRk0zSEU3b2dXNDd5VjVXTWxkUjZSU09HST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NDEwMjcwMTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
