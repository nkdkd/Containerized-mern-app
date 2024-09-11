# This is a multi stage image for reducing the size upto 50% 
# Stage - 1 
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Stage - 2 
# Use a lightweight server image to serve the React app
FROM nginx:alpine

# Copy the build files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

