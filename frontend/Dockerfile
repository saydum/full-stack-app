# 1. Use the official Node.js image as the base image
FROM node:latest

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# 4. Install dependencies (npm or yarn)
RUN npm install

# 5. Install Nuxt globally to be able to run nuxt commands
RUN npm install -g nuxi

# 6. Install TypeScript globally
RUN npm install -g typescript

# 7. Copy the rest of the project files to the working directory
COPY . .

# 8. Expose the port Nuxt.js will run on
EXPOSE 3000

# 9. Set environment variable to enable hot-reload
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# 10. Run the development server with hot-reload
CMD ["npm", "run", "dev"]