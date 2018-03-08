'use strict';

const SpoilerBot = require('discord-spoiler-bot');
const yn = require('yn');

let config = {
    token: process.env.TOKEN,
    maxLines: Number(process.env.MAX_LINES),
    markAllowAll: yn(process.env.MARK_ALLOW_ALL),
    markRoleIds: process.env.MARK_ROLE_IDS !== 'undefined' ? process.env.MARK_ROLE_IDS.split(' ') : undefined,
    markUserIds: process.env.MARK_USER_IDS !== 'undefined' ? process.env.MARK_USER_IDS.split(' ') : undefined,
    include: process.env.INCLUDE_CHANNEL_IDS !== 'undefined' ? process.env.INCLUDE_CHANNEL_IDS.split(' ') : undefined,
    exclude: process.env.EXCLUDE_CHANNEL_IDS !== 'undefined' ? process.env.EXCLUDE_CHANNEL_IDS.split(' ') : undefined,
    gif: {
        margin: Number(process.env.GIF_MARGIN),
        width: Number(process.env.GIF_WIDTH),
        lineHeight: Number(process.env.GIF_LINE_HEIGHT),
        placeholderText: process.env.GIF_PLACEHOLDER,
        fontSize: process.env.GIF_FONTSIZE,
        colours: {
            background: process.env.GIF_COLOUR_BG,
            stroke: process.env.GIF_COLOUR_STROKE,
            text: process.env.GIF_COLOUR_TEXT,
            placeholder: process.env.GIF_COLOUR_PLACEHOLDER
        }
    }
};

let bot = new SpoilerBot(config);
bot.connect();