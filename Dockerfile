FROM node:10
WORKDIR /app
# copy from this dir to app
COPY . .
# port number 
EXPOSE 3000
#commands 
CMD ["npm", "start"]
