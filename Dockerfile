FROM node:16.20-alpine

# Install git and other tools
RUN apk add --update ca-certificates git make \
     && rm -rf /var/cache/apk/*

RUN mkdir src/
WORKDIR /src
