FROM node:10-slim

RUN apt-get update && apt-get install -y curl xvfb libgtk-3-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2

WORKDIR /var/www/node/
COPY package.json .
RUN  npm install

COPY . .

EXPOSE 3000

RUN npm run build
CMD ["npm", "start"]
