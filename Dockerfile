FROM node:latest
MAINTAINER Gabriel Sentucq <perso@kazhord.fr>

# Environments
ENV TOKEN                   your_secret_token
ENV MAX_LINES               6
ENV MARK_ALLOW_ALL          FALSE
ENV MARK_ROLE_IDS           undefined
ENV MARK_USER_IDS           undefined
ENV INCLUDE_CHANNEL_IDS     undefined
ENV EXCLUDE_CHANNEL_IDS     undefined

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

# Run application
CMD ["npm", "start"]