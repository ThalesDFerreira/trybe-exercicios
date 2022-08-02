FROM node:16-alpine3.15

WORKDIR /my-app

COPY package.json .

COPY . .

RUN npm install

ENTRYPOINT ["npm"]

CMD ["start"]