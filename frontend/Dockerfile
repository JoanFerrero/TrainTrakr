# Install dependencies
FROM node:20-alpine as install
WORKDIR /app
COPY /frontend/package.json .
COPY /frontend/package-lock.json .
RUN npm install
COPY /frontend .

# Start application
FROM node:20-alpine as start
WORKDIR /app
RUN apk update
RUN npm install npm@latest
COPY --from=install /app .
EXPOSE 5173