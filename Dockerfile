FROM node:12

# update and upgrade libraries
RUN apt-get -qq update \
    && apt-get -qq upgrade \
	&& rm -rf /var/lib/apt/lists/ \
	&& apt-get -qq clean

# create working directory
RUN mkdir /usr/share/app
USER 1000
WORKDIR /usr/share/app
