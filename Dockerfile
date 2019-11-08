FROM node:12

# update and upgrade libraries
RUN apt-get -qq update \
    && apt-get -qq upgrade \
	&& rm -rf /var/lib/apt/lists/ \
	&& apt-get -qq clean

# create mitodl user
RUN adduser --disabled-password --gecos "" mitodl
ENV MITODL_USER="$(id mitodl -u):$(id mitodl -g)"

# create working directory
RUN mkdir /usr/share/app
WORKDIR /usr/share/app
RUN chown -R mitodl:mitodl /usr/share/app
