FROM node:12.13.0

# update and upgrade libraries
RUN apt-get -qq update \
    && apt-get -qq upgrade \
	&& rm -rf /var/lib/apt/lists/ \
	&& apt-get -qq clean

RUN mkdir /home/node/scripts
COPY ./app/scripts/install_yarn.js /home/node/scripts/install_yarn.js
COPY ./app/package.json /home/node/package.json
RUN node /home/node/scripts/install_yarn.js
RUN mkdir -p /home/node/.cache/yarn
RUN chown node:node /home/node/.cache/yarn

# create working directory
RUN mkdir /usr/share/app
USER 1000
WORKDIR /usr/share/app
