# base image
FROM node:9.11

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts -g

# # start app
# CMD ["npm", "start"]

FROM nginx:stable-alpine

WORKDIR /etc/nginx/logs
WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .
COPY --from=builder /app/etc/nginx.conf /etc/nginx/nginx.conf