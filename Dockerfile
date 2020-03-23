FROM node:12.13.0

# update and upgrade libraries
RUN apt-get -qq update \
    && apt-get -qq upgrade \
	&& rm -rf /var/lib/apt/lists/ \
	&& apt-get -qq clean

COPY ./package.json /usr/share/
COPY ./yarn.lock /usr/share/
WORKDIR /usr/share/
RUN npm install -g gulp-cli
