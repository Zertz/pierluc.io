FROM alpine:3.4
MAINTAINER Pier-Luc Gendreau <pierluc@outlook.com>

ENV BUILD_PACKAGES ruby-dev libffi-dev build-base
ENV RUBY_PACKAGES ruby ruby-bundler
ENV RUBY_GEMS json kramdown rouge jekyll

RUN apk update && \
    apk upgrade && \
    apk add $BUILD_PACKAGES && \
    apk add $RUBY_PACKAGES && \
    rm -rf /var/cache/apk/* && \
    gem install $RUBY_GEMS --no-rdoc --no-ri && \
    mkdir /srv/www

WORKDIR /srv/www
ADD . /srv/www
RUN jekyll build

VOLUME /data/https-portal/vhosts/pierluc.io

ENTRYPOINT cp -r /srv/www/* /data/https-portal/vhosts/pierluc.io/
