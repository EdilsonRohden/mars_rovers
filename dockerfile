FROM node:16-alpine
WORKDIR /app
COPY . .
RUN rm -rf /app/node_modules
RUN npm install
CMD npm test