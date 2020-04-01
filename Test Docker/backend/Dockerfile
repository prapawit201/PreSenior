FROM node:lts-alpine

WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . /app

EXPOSE 5000

CMD ["npm", "run", "start"]
