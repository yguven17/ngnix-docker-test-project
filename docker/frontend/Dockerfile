FROM node:alpine

WORKDIR /frontend

COPY ./frontend .

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev" ]