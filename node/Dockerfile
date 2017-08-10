FROM node:boron
# Create app directory
RUN mkdir -p /usr/prog/node
WORKDIR /usr/prog/node
# Install app dependencies
COPY package.json /usr/prog/node
RUN npm install
RUN npm install body-parser --save
RUN npm install ejs --save
#RUN npm install mongoose
# Bundle app source
COPY . /usr/prog/node
EXPOSE 8080
CMD [ "npm", "start" ]

