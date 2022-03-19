FROM node:14.19.1-alpine3.15

WORKDIR /app

COPY . .

VOLUME [ "/app/pages", "/app/build" ]

RUN npm install

EXPOSE 8080

CMD npm run start