# base node image
FROM node:18-bullseye-slim as base

# Install openssl for Prisma
RUN apt-get update && apt-get install -y openssl

# Install all node_modules, including dev dependencies
FROM base as deps
RUN mkdir /app
WORKDIR /app
ADD package.json package-lock.json ./
RUN npm install --ignore-script

# Setup production node_modules
FROM base as production-deps
RUN mkdir /app
WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules
ADD package.json package-lock.json ./
RUN npm prune --production

# Build the app
FROM base as build

RUN mkdir /app
WORKDIR /app
COPY --from=deps /app .
#COPY --from=deps /app/node_modules /app/node_modules

ADD . .
RUN npm install npm@latest -g
RUN npm run build

# Finally, build the production image with minimal footprint
FROM base as production

WORKDIR /app

COPY --from=production-deps /app/node_modules ./node_modules
COPY --from=build /app/build ./build
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json
#ADD . .

RUN npm install npm@latest -g

CMD ["npm", "run", "start"]
