# Use the official Node.js 16 image as the base image
FROM node:16-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# Copy the rest of the application code to the container
COPY . .

# Set NODE_OPTIONS to limit memory usage
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN npm install --omit=dev && \
    npm run build && \
    npm cache clean --force

# Expose the port that the app will run on (usually 3000 by default)
EXPOSE 3000

# Start the React app when the container starts
CMD [ "npm", "start" ]