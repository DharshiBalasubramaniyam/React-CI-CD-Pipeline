FROM node:18-alpine 

WORKDIR /ci-cd-app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]