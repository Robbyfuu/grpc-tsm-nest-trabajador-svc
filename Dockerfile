FROM node:18-alpine3.18 as base
RUN apk add --no-cache libc6-compat && apk add --no-cache dumb-init git
RUN npm install -g pnpm

FROM base as deps
WORKDIR /app
COPY ./package.json ./pnpm-lock.yaml ./
# RUN pnpm proto:install
RUN pnpm install

FROM base as build
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules


ARG RUN_BUILD=0
ENV RUN_BUILD=$RUN_BUILD
RUN if [ "$RUN_BUILD" -eq 1 ] ; then pnpm run build ; else : ; fi

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["sh", "run.sh"]
# CMD ["node", "dist/main"]

