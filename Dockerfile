# ---- Base Node ----
FROM node:14 AS base
WORKDIR /app
COPY package*.json ./

# ---- Dependencies ----
FROM base AS dependencies  
RUN npm install
COPY . .

# ---- Build ----
FROM dependencies AS build  
RUN npm run build

# --- Release with Nginx ----
FROM nginx:1.17-alpine AS release  
COPY --from=build /app/dist /usr/share/nginx/html
# Copies the default nginx configuration provided by tiangolo/node-frontend
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]