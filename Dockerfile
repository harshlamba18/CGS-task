# ---------- Build Stage ----------
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json .
RUN npm install

# Copy rest of the app files
COPY . .
EXPOSE 3000


# Build the app for production
RUN npm run build

# ---------- Production Stage ----------
FROM nginx:alpine

# Remove default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Optional: Copy custom Nginx config (if needed)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
