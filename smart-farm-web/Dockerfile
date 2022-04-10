# base image
FROM node:17-alpine as build-stage

# set working directory
WORKDIR /app

# install and cache app dependencies
RUN npm cache clean --force

COPY package*.json /app/
RUN npm install

COPY ./ /app/
RUN npm run build

FROM nginx:stable-alpine

WORKDIR /etc/nginx/logs
WORKDIR /usr/share/nginx/html

COPY --from=build-stage /app/build/ .
COPY --from=build-stage /app/etc/nginx.conf /etc/nginx/nginx.conf