FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["sh", "-c", "npm run create-db-tables && npm run seed-db && npm start"]