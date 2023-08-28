FROM node:18-alpine3.18

WORKDIR /usr/src/nuxt-app
RUN apk update && apk upgrade
RUN apk add git
COPY ./package*.json /usr/src/nuxt-app
RUN npm install
RUN npm cache clean --force
COPY . . 
EXPOSE 3000
ENV PATH ./node_modules/.bin/:$PATH
