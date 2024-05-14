# Start your image with a node base image
FROM node:20.13.1-alpine

# The /app directory should act as the main application directory
WORKDIR /user/src/app

# Copy the app package and package-lock.json file
COPY package*.json ./


# COPY ./public ./public

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN npm install 

# Copy local directories to the current local directory of our docker image (/app)
COPY . .

EXPOSE 5173

# Start the app using serve command
CMD [ "npm", "run","dev"]