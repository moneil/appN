FROM node:12.16.3-alpine3.9
RUN apk add --update \
    build-base libffi-dev openssl-dev \
    xmlsec xmlsec-dev \
    curl
RUN apk upgrade && rm -rf /var/cache/apk/* ## upgrades the OS so that it will get clean scans in repos.
WORKDIR /
COPY server.js ./
COPY package.json ./
COPY config.json ./
EXPOSE 3000
USER node
CMD npm start
