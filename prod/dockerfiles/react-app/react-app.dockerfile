FROM node:14

WORKDIR /app

COPY package.json .

RUN npm i -g serve

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "-l","3000","build"]
