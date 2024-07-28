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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_16_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTg1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDkxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NSxcbiAgICAgICAgNixcbiAgICAgICAgMzcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICA0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA3NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMTksXG4gICAgICAgIDk0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDUwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODEsXG4gICAgICAgIDc3LFxuICAgICAgICAzOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgODAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2LFxuICAgICAgICA5MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDUwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgODgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyLFxuICAgICAgICA2OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEsXG4gICAgICAgIDYxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRUCswZGVLVnkzWXJoTm5GRmJaaXNCbnl4RnB4aFBQSnZSRjE2Wmo3TFhRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrTFJpcWtRMVMwZWNVc1o3NGY5M0t3XCIsXG4gIFwicGhvbmVJZFwiOiBcImFhOWRhODk0LTE5ZDMtNDQyMi04Y2UzLWQ0MzRkN2ZjYTcyOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDUsXG4gICAgICAyMzMsXG4gICAgICA5NixcbiAgICAgIDE3NSxcbiAgICAgIDE0NyxcbiAgICAgIDExOSxcbiAgICAgIDExNixcbiAgICAgIDgwLFxuICAgICAgOTIsXG4gICAgICAxODAsXG4gICAgICAxNzYsXG4gICAgICAxNDksXG4gICAgICA4NixcbiAgICAgIDU3LFxuICAgICAgMTI5LFxuICAgICAgMjQ3LFxuICAgICAgMzIsXG4gICAgICA3MCxcbiAgICAgIDE4OCxcbiAgICAgIDk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNixcbiAgICAgIDI1MCxcbiAgICAgIDI0OCxcbiAgICAgIDMxLFxuICAgICAgODIsXG4gICAgICAxMDQsXG4gICAgICAyMTQsXG4gICAgICA4NSxcbiAgICAgIDE4NyxcbiAgICAgIDE1LFxuICAgICAgMjQ5LFxuICAgICAgMTIzLFxuICAgICAgMTc0LFxuICAgICAgMTUxLFxuICAgICAgMTgyLFxuICAgICAgMTQyLFxuICAgICAgMTQ3LFxuICAgICAgMzUsXG4gICAgICAyMjIsXG4gICAgICAyMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ0VYTURXOVZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwODExNzA1NjU6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUdW5kZXggRW50ZXJwcmlzZVwiLFxuICAgIFwibGlkXCI6IFwiMTU3MjMwNjQ5MzQ4MjY2OjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0szL2tLc0NFSjZ5bXJVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQzlzR1V2Vlk1YTE1cHZDODhtL3c4akpObXdlTkRsbHpPYXNjdDVjb1FFUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJOM2lsZG9YYXlhbnp3dkFVSlpBblRoSEtlRDJ1WThWTjMvYndNQ0FjMHFyR0Q0eTB5b1VRemZoRk1CWW1HTkltZjFDTDRVNVpjN1I3VkMvVUhUTkhCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhM0YyKzRQaG9oOW5lMllCcVVnNFVCMW93UXJYVnZxNmFVdnVDeTFIaG1UM1JtVUh2VGYxRFpHM3kvbDl2ci9QaVNZejVhMjNmVmhUb05OeWJNV21BUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDgxMTcwNTY1OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxOTQyMTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQbkRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBuRC5qc29uIjogIntcImtleURhdGFcIjpcImZLbmg2bHVxRzREeEorUlNMWXBkUUlwVW80SjlzTTlpY1pRdlZJSWczYWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjI3MzI2ODkyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
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
