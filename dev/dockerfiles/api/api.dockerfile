FROM node:14

WORKDIR /app

RUN apt install git

RUN git clone https://gitlab.com/kacdab003/strapi-wtelno.git

COPY ./.env /app/strapi-wtelno

RUN cd ./strapi-wtelno/ && npm i

WORKDIR /app/strapi-wtelno


CMD ["npm","run","strapi","develop" ]