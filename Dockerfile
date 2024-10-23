FROM node:20.11-alpine3.18 as build

RUN npm install -g pnpm

# Move files into the image and install
WORKDIR /app

COPY ./package.json ./
COPY ./pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY ./service ./service
RUN cd ./service && pnpm install --frozen-lockfile

COPY ./ ./
RUN pnpm build
RUN pnpm prune --prod && pnpm store prune

# Uses assets from build stage to reduce build size
FROM node:20.11-alpine3.18

RUN apk add --update dumb-init

# Avoid zombie processes, handle signal forwarding
ENTRYPOINT ["dumb-init", "--"]

WORKDIR /app/service
COPY --from=build /app /app
RUN mkdir /app/data && chown node /app/data

VOLUME /app/data
EXPOSE 3000
ENV FEEED_PORT=3000
ENV NODE_ENV=production
# potential perf issues w/ io_uring on this version of node
ENV UV_USE_IO_URING=0

# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user
USER node
CMD ["node", "--heapsnapshot-signal=SIGUSR2", "--enable-source-maps", "index.js"]

LABEL org.opencontainers.image.source=""
LABEL org.opencontainers.image.description="feeed.club Service"
LABEL org.opencontainers.image.licenses=UNLICENSED
