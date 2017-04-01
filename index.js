'use strict';

const SpoilerBot = require('discord-spoiler-bot');

let config = {
    token: process.env.TOKEN,
    markAllowAll: true,
    maxLines: Number(process.env.MAX_LINES)
};

let bot = new SpoilerBot(config);
bot.connect();