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

* `-e GIF_MARGIN="10"` - margin (in pixels) between the text and the borders of the GIF (default: 10)
* `-e GIF_WIDTH="400"` - width of the GIF in pixels (default: 400)
* `-e GIF_LINE_HEIGHT="40"` - height of a line of text on the GIF (default: 40)
* `-e GIF_PLACEHOLDER="your text here"` - text displayed on the first frame of the GIF (default: "Hover to reveal spoiler")
* `-e GIF_FONTSIZE="13px"` - font size (default: "13px")
* `-e GIF_COLOUR_BG="#3c3f44"` - colour of the GIF background (default: "#3c3f44")
* `-e GIF_COLOUR_STROKE="#b2ac94"` - colour of GIF borders (default: "#b2ac94")
* `-e GIF_COLOUR_TEXT="#c0ba9e"` - colour of the spoiler text (default: "#c0ba9e")
* `-e GIF_COLOUR_PLACEHOLDER="#8c8775"` - colour of the placeholder text seen above (default: "#8c8775")


## Docker Compose

```sh
$ curl -L https://raw.githubusercontent.com/Aeryax/docker-spoilerbot/master/docker-compose.yml -o ./docker-compose.yml
$ nano ./docker-compose.yml # Edit TOKEN environment variable. Look above if extra config needed
$ docker-compose -f ./docker-compose.yml up -d
```