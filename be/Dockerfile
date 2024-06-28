FROM node:18-alpine

WORKDIR /be/app

COPY package*.json ./

RUN npm install

# Install the nest package globally
RUN npm i -g @nestjs/cli

COPY . .

EXPOSE 3005

CMD ["npm", "run", "start:dev"]
