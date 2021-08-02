#docker image is node with version 10
FROM node:10
WORKDIR /app
# copy from this dir to app
COPY . .
# port number 
EXPOSE 1234
#commands 
CMD ["npm", "start"]
