# node image to use
FROM node:8

# set working directory
WORKDIR /app

# copy application
COPY ./dist /app
COPY package.json /app/package.json

# install dependecies
RUN npm install

# port to expose
EXPOSE 8081

# start the application
CMD ["npm","start"]