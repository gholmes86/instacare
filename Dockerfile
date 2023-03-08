# Install dependencies only when needed
FROM node:18.12.1-alpine3.17 AS deps
RUN apk add --update openssl1.1-compat \
    && rm -rf /var/cache/apk/*

WORKDIR /app
COPY package.json /app/
COPY yarn.lock /app/
RUN yarn

# Rebuild the source code only when needed
FROM node:18.12.1-alpine3.17 AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . /app

EXPOSE 3000

RUN yarn build

CMD ["yarn", "dev"]