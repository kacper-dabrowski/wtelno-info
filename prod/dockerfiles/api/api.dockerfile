FROM node:14

WORKDIR /app

RUN apt install git

RUN git clone https://gitlab.com/kacdab003/strapi-wtelno.git

COPY ./.env /app/strapi-wtelno

WORKDIR /app/strapi-wtelno

RUN npm i

RUN npm run build

EXPOSE 1337


CMD [ "npm","start" ]
