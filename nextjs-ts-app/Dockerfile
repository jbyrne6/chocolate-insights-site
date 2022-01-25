FROM node:alpine

# Create app directory
RUN mkdir -p /usr/app
WORKDIR /usr/app

# Installing dependencies
COPY package*.json .
COPY yarn.lock .
RUN yarn install

# Copying source files
COPY . .

# Building app
RUN yarn build
EXPOSE 3000

# Running the app
CMD ["yarn", "dev"]