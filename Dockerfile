# Based on https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile
# but reverting to this version this: https://github.com/ijjk/next.js/commit/95501c4bed91893ea9614566cf4ad7eb838c989d due not not having standalone output working

# Install dependencies only when needed
FROM node:18.19-alpine AS deps

WORKDIR /app
COPY package.json package-lock.json ./ 
RUN npm i --force

# Rebuild the source code only when needed
FROM node:18.19-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

EXPOSE 3000
ENV PORT=${PORT}
ENV DATABASE_URL=${DATABASE_URL}
ENV SECRET=${SECRET}
CMD ["npm", "run", "start"]

