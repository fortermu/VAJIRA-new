const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'VAJIRA-MD=qBVQlDzD#HQBOK6ckeWL3icjar7BiR72awxlkuY0Gwg3b91MgFRQ' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '923263429027' : process.env.OWNER_NUMBER,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'false' : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || true  ,    
PREFIX: process.env.PREFIX || '.' ,
FOOTER: process.env.FOOTER=== undefined ? '‌_*MALIK-MEHTAB*_': process.env.FOOTER,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.POSTGRESQL_URL,
MAX_SIZE: 1500, 
ALIVE:  process.env.ALIVE  || '_*KITA HUKAM HI MERE AAQAAA!!!*-'  ,    
OWNER_REACT:  process.env.OWNER_REACT  || true  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,        
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,    
ANTI_BAD: process.env.ANTI_BAD || true  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,    
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || true  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,       
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || true  ,
WORK_TYPE: process.env.WORK_TYPE || 'public' ,
ANTI_LINK: process.env.ANTI_LINK || true  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || true  ,
MATHS_AI: process.env.MATHS_AI || true  ,    
WELCOME: process.env.WELCOME || true  ,    
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,    
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,         
LOGO: process.env.LOGO || `https://telegra.ph/file/2fd64c82fb85b1e2891dc.jpg` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,    
ANTI_DELETE : process.env.ANTI_DELETE || true ,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '923263429027' : process.env.DELETEMSGSENDTO        
};
