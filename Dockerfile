# specify the node base image with your desired version node:<version>
FROM node:10
COPY . .
# replace this with your application's default port
EXPOSE 3000
CMD npm start
