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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMElHVlFuRmtqN0hLaDBjSUY0R3NoRGVxZ21nNHJ0RlQvbGU5RFY0ZHhFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1NHSSsyN0hLVkZRTmtiUDNTSlJZV3dIMTY2TFZ4VXBGRmo3T2hsTkhHTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzR0NnazRHcHE0WUljeGo0WS9IMHNjak8xNWY0OEozRDEyKzRkVVBQYVVvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyOTNzTUt0a2FsU2J5eTZGWmx2ai8xU0l5UEMwRWhuSUR5M2E0Vk8zdFE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZKT2d0cWZnZ0M3T2FBZExmaXFIMjVmVnRSTEVKYTU5ekpMTDBKWGFIVk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imord0RUZVUyd1FLaVB4aFFkSUV6TXQrbVRETDRqVU9PNDlYVFgwbmljeFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0V1YUd4cGlvcUcxazhiYmRMZGdSYVlnczA0S0d4TTh6bzhDaHI4bzAzTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGVhUUkzdlVzcmkzdURsdHdJd2dBTUQ3MU1BOURJRWpIOVo1Q05LSGhXTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRLSVdkd01CMzk0RE5nMnVkRjVGcWRhMVNXQzE0NUxIV3NSUjdPRklWTlBPSG1BZWUzYWZoYzNZMElFU1hTemxFY1V0c1BzWW9VWEU5Vm42NWI0dGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ3LCJhZHZTZWNyZXRLZXkiOiJlelErd01DVWFRa2RVR25SR2xwQjJXZEVoNGRYaGlsVHpGZkZ5eU41YlF3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzAxODE3MjQ5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkZDQzg5NjQ0RkMxRkEyOTY3NjM1RDY3Nzg1RkVBOTA4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTMxNTQxMDV9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzAxODE3MjQ5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1QjQ5ODBBQTJERDQ4QjdBQTlERkNFNThFNjYyNjVBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTMxNTQxMDZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlY2YU9HTzQ2U0dHNFl0UEstU3JmU3ciLCJwaG9uZUlkIjoiOGU5NDRkYTMtMGVlYi00NjUwLTk5MzAtZjZlODRiNDkzZTc4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkE5OC9tYTZzSDIvR1FiSkhueHA1WUo0Z2V0OD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSMWJrdFBNdGx5YmpLUUhRZUl0VWZIbWpQaFk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiM01DUzNWTTUiLCJtZSI6eyJpZCI6Ijk0NzAxODE3MjQ5OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoic3VwdW4iLCJsaWQiOiIyNTA1NDMyNzY2MDU0NTY6MUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ043bjdMb0NFS21FL01NR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IktXSi83TW0xWC9aZGw4VzNnUjdLaFNQRjY0eFhRbFRmdmk4UTV4RnJhUmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImRDZnU3Wkp2NkN2akVOTTYwVldHWDNrMk1uYW5jSmF0bWNsd0pkeGViaDlVS2lxa2pqSjY3bE1NbnV2YVpzQ3Jpa3gxaVFIbE11OElqYlNVaStQUEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJqSmZNTGhPOTY5TU42SHB5MzA1VW1WVmh3WSt0ZkljV1BpZXphUS9nZVlFcWRDa3pVVHVvVGFmZEY4MlJKRDNuYk41Qk1CRXQzemIyazB4S09Fc2pnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzAxODE3MjQ5OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU2xpZit6SnRWLzJYWmZGdDRFZXlvVWp4ZXVNVjBKVTM3NHZFT2NSYTJrWCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUzMTU0MTAzLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxSdSJ9",
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
