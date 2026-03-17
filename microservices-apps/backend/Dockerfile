FROM node:18

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

RUN npm install @opentelemetry/api \
                @opentelemetry/sdk-node \
                @opentelemetry/auto-instrumentations-node

EXPOSE 3000

CMD ["node", "server.js"]
