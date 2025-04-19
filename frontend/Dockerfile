FROM node:16-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build for production or start dev server based on environment
CMD ["npm", "start"]

# Expose the port
EXPOSE 3000
