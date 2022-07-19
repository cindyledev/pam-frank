## Base ###########################################################################
FROM node:16 as base

RUN npm install -g pnpm

## Development ####################################################################
FROM base as dev

WORKDIR /app

COPY . .
# COPY /app/package.json ./package.json

RUN pnpm install

## Build ##########################################################################
FROM base as build

WORKDIR /app

COPY . .
# COPY /app ./

COPY --from=dev /app/node_modules ./node_modules

RUN pnpm build