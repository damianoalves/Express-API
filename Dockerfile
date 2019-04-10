FROM node:alpine
MAINTAINER Damiano Alves (damiano.alves@gmail.com)

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm audit fix

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "dev" ]