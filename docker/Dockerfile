FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build your Next.js app
RUN npm run build

# Expose port 3000 to the Docker daemon so it can communicate
EXPOSE 3000

# Run the Next.js start script
CMD ["npm", "start"]
