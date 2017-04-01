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
* `-e MAX_LINES="6"` - maximum amount of lines that spoiler content can span over
