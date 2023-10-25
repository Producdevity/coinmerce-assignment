# Base Stage
FROM node:18.18-bullseye as base
LABEL authors="Yassine Gherbi"
LABEL version="1.0.0"
WORKDIR /app

# Dependencies Stage
FROM base as build
WORKDIR /app
COPY . .
RUN npm install

# Development Stage
FROM base as development
COPY --from=build /app/node_modules /app/node_modules
COPY package.json package-lock.json ./
RUN npm install npm@latest -g
COPY . .
CMD ["npm", "run", "dev"]
