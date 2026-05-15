# --- Etapa de Construcción ---
FROM node:20-alpine AS build

# Instalamos pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copiamos archivos de dependencias
COPY package.json pnpm-lock.yaml ./

# Instalamos dependencias (sin el flag frozen para evitar el error de lockfile)
RUN pnpm install

# Copiamos el resto y construimos
COPY . .
RUN pnpm run build

# --- Etapa de Producción (Servidor Web Nginx) ---
FROM nginx:alpine AS runtime

# Copiamos los archivos estáticos de Astro a la carpeta de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]