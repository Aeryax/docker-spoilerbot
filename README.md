# docker-spoilerbot

## Description

[Discord-spoiler-bot](https://github.com/TimboKZ/discord-spoiler-bot) is a Discord bot that replaces spoiler messages with GIFs that reveal content on hover.

## Usage

The recommended way to run this container is as follows:

```bash
$ docker run -d --name spoilerbot -e TOKEN="your-secret-token-here" aeryax/spoilerbot
```

## Parameters

* `-d` - as daemon **required**
* `--name spoilerbot` - container name
* `-e TOKEN="your-secret-token-here"` - secret token of your Discord bot **required**
* `-e MAX_LINES="6"` - maximum amount of lines that spoiler content can span over (default: 6)
* `-e MARK_ALLOW_ALL="TRUE"` - allows everyone to mark messages of other users as spoilers (default: false)
* `-e MARK_ROLE_IDS="id1 id2 id3"` - a list, where each string represents an ID of a role that user must have to be able to mark other messages are spoilers (default: none)
* `-e MARK_USER_IDS="id1 id2 id3"` - a list, where each string represents an ID of a user that can mark other messages as spoilers (default: none)
* `-e INCLUDE_CHANNEL_IDS="id1 id2 id3"` - a list, where each string represents an ID of a channel. When this property is set, bot will only listen to the specified channels. Cannot be used together with exclude (default: none)
* `-e EXCLUDE_CHANNEL_IDS="id1 id2 id3"` - a list, where each string represents an ID of a channel. When this property is set, bot will listen to all channels but the one specified in this array. Cannot be used together with include (default: none)

## Docker Compose

**TODO**