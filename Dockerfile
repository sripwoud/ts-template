FROM node:19-alpine

RUN apk update
RUN apk add bash

RUN npm i -g pnpm

WORKDIR app

COPY .npmrc package.json pnpm-lock.yaml ./

RUN pnpm i -P --frozen-lockfile --ignore-scripts --reporter=silent

COPY .env .
COPY package-scripts.yaml .
COPY dist dist

COPY scripts/secrets-entrypoint.sh /usr/local/bin/secrets-entrypoint.sh
RUN chmod +x /usr/local/bin/secrets-entrypoint.sh
ENTRYPOINT ["secrets-entrypoint.sh"]

CMD ["npm", "run" ,"nps", "start.prod"]