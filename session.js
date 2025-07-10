//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "session id",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia01QMkJ3YjYxMTZXMHhPTzQzMFl0Y3owa3R2Y0UzanBqS0FxdVU5RHUyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREtnbThpS05vM3ZZYUROeXV6TmVvL0NYTDVMWTRmU082RExEc1JiY3BDRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRT2pqYTNieWRCL0NJZXVBRWdpUXBFc3diZWNZczh0ZWRzQkNtdm5qalZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2TWNpRElQRkZCaG5RVUF4QzMzT2RZTWNhMkRvVGdUSkVLaDRKYjcrTVVRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllFaUxEdWd1QVBrS0dZc1orUW0vK2c2WkhmRGpodFBRUysvVENYNDJTVjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdPOTVDTnViTFBzdVphRWVJNUREZjlTdVhzaEY2MEJnWDcybVRMSGtXeW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0dvVWpUbUtuempodjB0R2d1YWd0ZHoxd1U2S2t5UFZtSXpUeGlSRTFrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTdwM1RBcytweElRNGMxZzlNdUdwSkIwVldDT0srUVpIY1VkNkliaXptVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inljb0hDOTd2UW1TajBNbWd4bVVqay9PRWo2RGxFOTlmMUVKdmZ4TW9uTVBNZ3lxYlVCT2wzVEpyemJIOXc2RENUc3JUTkt0cE9UcnFVUVFVYytreWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODAsImFkdlNlY3JldEtleSI6ImZQM2hiamkvS1NIckNqNkJ0RVRjQjJ6bmJQVEkyVWdEd2lmNk9vREFIWnM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ijd1OTJRcVRFUXM2VDZUWFhjcWYzdFEiLCJwaG9uZUlkIjoiMjg4YmM5YTMtYzhiOC00ODY1LThjZjctZWY5ZDQ1YzBlMDg1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJLenFlM0lvU2NiSDkyY0F0b3RoYXhSTXFiND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1WWZMYXdudlphRmVBTStyYUlUUmxhS1pta1k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNkZHODJRS1EiLCJtZSI6eyJpZCI6Ijk0NzE0MDYzMTA4OjkyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkpzYSIsImxpZCI6Ijg4MzczODM0MzEzODA0OjkyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWVpakt3SEVPZU12OE1HR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieUF3TUtDM0hqYnc2RmZITlRBdStqMFBlTVB6cExhRjQ1b21IaCsrWDRpTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZ2pGNWo2cm04MU84VmJWVEQ5SCtGdE9sS2xqeVZGTzV5MEl6cUFiTm9sSU5Vck5aNWNBbnhiNW5UMmRwTEhSUnNqUkF1N2kwcDhkd0RxbFJRWW91QUE9PSIsImRldmljZVNpZ25hdHVyZSI6Ilp3bDNpN1g5b09pQmZuVjh4VGthYTVZR3VoQXlRRUZwMytoN3UvbExCSzhPQVdOeGxOQ1NSeStBdTl6Yi9xOCtqbXliQ2FuZjhzWTVVTDRxT09JM2hBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTQwNjMxMDg6OTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY2dNRENndHg0MjhPaFh4elV3THZvOUQzakQ4NlMyaGVPYUpoNGZ2bCtJaiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUyMTU1NzYzLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkifQ==",
  PASSWORD: 
    process.env.PASSWORD || "6FG82QKQ",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
