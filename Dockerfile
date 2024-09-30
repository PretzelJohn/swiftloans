# select appropriate base image
FROM node:20.17-alpine
# update linux packages
RUN apk update
# Set to a non-root built-in user `node`
USER node
# Create app directory (with user `node`)
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND pnpm-lock.yaml are copied
# where available (npm@5+)
COPY prisma ./prisma/
COPY --chown=node package.json ./
COPY --chown=node package-lock.json ./
COPY --chown=node next.config.mjs ./
# install packages
RUN npm ci
# Bundle app source code
COPY --chown=node .. .
# Create dir for mounting logs
RUN mkdir -p /tmp/logs && touch /tmp/logs/combined.log
