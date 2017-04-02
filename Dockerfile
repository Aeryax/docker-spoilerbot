FROM node:latest
MAINTAINER Gabriel Sentucq <perso@kazhord.fr>

# Environments
ENV TOKEN       your_secret_token
ENV MAX_LINES   6

# Install dependencies
RUN apt-get update && \
    apt-get install -qq libcairo2-dev libjpeg-dev libpango1.0-dev libgif-dev build-essential g++ && \
    mkdir -p /usr/src/app

# Set application directory as current
WORKDIR /usr/src/app

# Add custom app files
ADD package.json /usr/src/app/package.json
ADD index.js /usr/src/app/index.js

# Get npm dependencies
RUN npm install

# Hotfix line break
ADD GifGenerator.js /usr/src/app/node_modules/discord-spoiler-bot/src/GifGenerator.js

# Run application
CMD ["npm", "start"]