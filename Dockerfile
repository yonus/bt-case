FROM node:17-alpine3.14

USER node

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package.json .
RUN npm install
COPY --chown=node:node . .

EXPOSE 8080

CMD [ "npm", "start" ]