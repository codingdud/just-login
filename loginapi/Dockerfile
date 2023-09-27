FROM node:20-alpine3.17

# Setting up the work directory
WORKDIR /app

# Copying all the files in our project
COPY . .

# Installing dependencies
RUN npm install 
RUN npm install supervisor  -g

# Starting our application


EXPOSE 8080

CMD ["supervisor","server.js"]
