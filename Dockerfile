# 1. Etapa de dependencias
FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

# 2. Etapa de construcción
FROM base AS build
RUN pnpm install --frozen-lockfile
RUN pnpm run build

# 3. Etapa de producción (servidor ligero)
FROM base AS runtime
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

# Comando para arrancar Astro (ajusta si usas SSR o SSG)
CMD ["node", "./dist/server/entry.mjs"]