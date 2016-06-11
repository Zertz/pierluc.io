FROM alpine:3.4
MAINTAINER Pier-Luc Gendreau <pierluc@outlook.com>

ENV BUILD_PACKAGES bash curl-dev ruby-dev libffi-dev build-base
ENV NGINX_PACKAGES nginx
ENV RUBY_PACKAGES ruby ruby-io-console ruby-bundler
ENV RUBY_GEMS kramdown rouge jekyll

RUN apk update && \
    apk upgrade && \
    apk add $BUILD_PACKAGES && \
    apk add $NGINX_PACKAGES && \
    apk add $RUBY_PACKAGES && \
    rm -rf /var/cache/apk/* && \
    gem install $RUBY_GEMS --no-rdoc --no-ri && \
    mkdir /srv/www

WORKDIR /srv/www

ADD nginx/default /etc/nginx/sites-available/default
ADD nginx/nginx.conf /etc/nginx/nginx.conf

ADD . /srv/www/
RUN jekyll build

EXPOSE 80

CMD nginx
