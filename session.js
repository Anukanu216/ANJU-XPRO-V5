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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0ExYnRYb0JJWlNtU2ovTGIyTWNuRXo2ZWsycHhya3FLdytNQitOdS9WRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1hkYUJpV1gxd1hzSWl6K3ZGRXl5cS9XZzJPSDBGZURuNlMyMXVwUFFpcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSU5TYWNmcE9iNHVuS3d2aUhyTWt0S3dHdTBHS1dCYnhtUHphK2xHU25FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0dGt4UDNXMHJLNDhxc3VrS1RtY082Qk5vaWlTV0h0ZUVWUmFqaHovYUJZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldMQTV5b1IybGk5SEMrZ3F2d0sveWlnemJJeDAzTUkrb3VOejJMdk9URm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZ1WXhFSDVIQVZnbHZ5N0NCK2VBMGJvWkR4RXlRNk51RkxncVc3d1lJRDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0RXVFg1Z3p5bDNHeUJzc1NKbnZrYzJMak9tNjMxdTJDSFB4bVVCN3UxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWEV6ekk0OWNPZkt3OVBBdE0vMCtCRjg2SEx5dE9wK3lQMkhmK25pOVBYaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZLdzNIdEJCTDdqQThDWjFha0xRbWhyZ29OTlR1TWlwdmx1UkRoWGlFaDYzQkZ1Uk02Z0ZKVlBteCtrYnZsUHU4NFhnY3dUdi9lTVBudHh3b0o4a2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEyLCJhZHZTZWNyZXRLZXkiOiI4V3dVS3JKK1praG1vbDNMcFFzdkVFR1pQampqSnRGN29tM0t5ZTdvMmtvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIxb2YyMWZ4VVJXLTdVYzA2MTA1cnVnIiwicGhvbmVJZCI6IjhlNzkzOTJhLWUzMzMtNDdjZS1hMTU4LWFjZWRmNGY0ZDg4NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1emhDQ3gwSHpnMG54YzJzUEhsSlordnhONjA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0ZvR0xmdTBlUzhlMm42WjhROERtRVFDbm9FPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdSWEtNQzJUIiwibWUiOnsiaWQiOiI5NDcxNDA2MzEwODo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Is650YIn0ZUg0LzRlCAg4qWlICAg8J2agiAgIPCdmbcgICDwnZm4ICAg8J2aiSAgIPCdmoQgICAgICAgICAgIPCdmoUgICDwnZm4ICAg8J2ZsSAgIPCdmbQgICDwnZqJIiwibGlkIjoiODgzNzM4MzQzMTM4MDQ6NEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lpaWpLd0hFS3VlMnNNR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InlBd01LQzNIamJ3NkZmSE5UQXUrajBQZU1QenBMYUY0NW9tSGgrK1g0aU09IiwiYWNjb3VudFNpZ25hdHVyZSI6IlFNbnZnb3pVR3ZWNGttcUhPd1BacGdnMndJWG5BYmdncElzYXFjbFRXaitXQStJTjZmVnJnZW1CQWp3WVpJQlhnYlcwZ2lFK2FPRGpXcVo4WjZobERRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI1ajJMMmEvbkFMd0dLbkNoYzdlR3BZeHJxZmVIRVV3c0hOUzZVbGNqcVlhWUhmT0ZRYmJOMXhhVHQ0d0Q5UFF1SlcyV0MrblZlbkpmamxVTWxuVTRoZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzE0MDYzMTA4OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY2dNRENndHg0MjhPaFh4elV3THZvOUQzakQ4NlMyaGVPYUpoNGZ2bCtJaiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUyNjAwMzc2LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBpRSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "+94714063108",
  PASSWORD: 
    process.env.PASSWORD || "Pathum2005@#",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
