FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE $TO_EXPOSE_PORT
ENTRYPOINT ["npm", "start"]