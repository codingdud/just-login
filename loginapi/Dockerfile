FROM node:19-alpine3.16

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /app

# Copying all the files in our project
COPY . .

# Installing dependencies
RUN npm install 
RUN npm install supervisor cross-env  -g

# Starting our application

RUN cross-env NODE_ENV=production PORT=8080

EXPOSE 8080

CMD ["npm","app.js"]
