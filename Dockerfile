# Dockerfile (SON VƏ QƏTİ VERSİYA)

# --- Mərhələ 1: Build Mərhələsi ---
FROM node:18-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
# DİQQƏT: Versiya konfliktlərini görməzdən gəlmək üçün --legacy-peer-deps əlavə edirik
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build


# --- Mərhələ 2: Production Mərhələsi ---
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
# DİQQƏT: Bura da --legacy-peer-deps əlavə edirik
RUN npm install --omit=dev --ignore-scripts --legacy-peer-deps

# "build-stage" mərhələsindən build nəticəsi olan "dist" qovluğunu kopyalayırıq
COPY --from=build-stage /app/dist ./dist

EXPOSE 5000
CMD [ "node", "dist/index.js" ]