FROM node:10.17-alpine

# Install git and other tools
RUN apk add --update ca-certificates git python2 py-pip make \
     && rm -rf /var/cache/apk/*

# Packaging Toolkit
RUN pip install --no-cache http://download.splunk.com/misc/packaging-toolkit/splunk-packaging-toolkit-1.0.0.tar.gz

RUN mkdir src/
WORKDIR /src