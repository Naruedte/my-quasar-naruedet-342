FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM node:18
WORKDIR /app
COPY --from=build /app .
EXPOSE 3000
HEALTHCHECK CMD curl --fail http://localhost:3000/api/demo || exit 1
CMD ["node", "server.js"]
