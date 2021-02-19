FROM node:14

WORKDIR /app

RUN apt install git

RUN git clone https://gitlab.com/kacdab003/util-api.git

WORKDIR /app/util-api

RUN npm i 

ENV PORT=3001

CMD ["npm","start"]