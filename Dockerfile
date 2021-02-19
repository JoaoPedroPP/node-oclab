FROM node:lts-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

ENV PORT=3000
EXPOSE 3000/tcp

CmD ["npm", "start"]