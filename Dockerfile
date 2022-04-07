FROM node:16-alpine3.14

WORKDIR /opt/api-nodal
COPY . .
RUN npm ci

EXPOSE 3100

CMD npm start
