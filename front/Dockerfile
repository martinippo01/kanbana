FROM node:18-alpine

WORKDIR /app/front/

COPY package*.json /app/front/
RUN npm install

COPY . /app/front/

CMD ["npm", "run", "dev"]