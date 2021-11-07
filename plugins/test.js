/* 
Copyright (C) 2021 Mikhaiel.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License
*/

const Asena = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
const Language = require('../language');
const MENU_LIST = "Menu list"
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
let wk = Config.WORKTYPE == 'public' ? false : true


Asena.addCommand({pattern: 'main ?(.*)', fromMe:wk , desc:MENU_LIST}, (async (message, match) => {
// send a list message!
    const buttons = [
  {buttonId: 'id1', buttonText: {displayText: '.list'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: '.menu'}, type: 1}
]
const buttonMessage = {
    contentText: "Jimbrootan offical",
    footerText: 'Mikhaiel',
    buttons: buttons,
    headerType: 1
}
await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)
    }));

Asena.addCommand({pattern: "downloader ?(.*)",fromMe: wk,desc: Lang.WELCOME_DESC,onlyGroup: true,}, async (message, match) => {
    let hg = await getMessage(message.jid, "downloader");
    if (hg === false && match === "")
      return await message.sendMessage(
        genButtons(["test", "downlaod"], Lang.ON_OFF.format('downloader'), "Choose"),
        {},
        MessageType.buttonsMessage
      );
    if (match === "") return await message.sendMessage(Lang.NEED_WELCOME_TEXT);
    else if (match == "test" || match == "download") {
      await enableGreetings(message.jid, "downloder", match);
      return await message.sendMessage(
        Lang.MENU_ENABLED.format(match == "test" ? Lang.ENABLE_MENU : Lang.DISABLE_MENU)
          }
