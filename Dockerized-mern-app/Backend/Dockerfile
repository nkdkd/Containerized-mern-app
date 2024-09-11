FROM node:21

# Set up  the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to working dir 
COPY . .


# Expose the port the app runs on
EXPOSE 5000

# Start the server
CMD ["npm", "start"]

