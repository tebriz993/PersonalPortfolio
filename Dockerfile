# Dockerfile

# --- Mərhələ 1: Asılılıqları (Dependencies) Qurmaq ---
FROM node:18-alpine AS deps
WORKDIR /app

# Əvvəlcə bütün package.json və lock fayllarını kopyalayırıq
# Bu, asılılıqları keşləməyə və build prosesini sürətləndirməyə imkan verir
COPY package.json package-lock.json ./
COPY client/package.json ./client/
COPY server/package.json ./server/

# Bütün asılılıqları bir dəfəyə yükləyirik
RUN npm install

# --- Mərhələ 2: Layihəni Qurmaq (Build) ---
FROM node:18-alpine AS builder
WORKDIR /app

# Birinci mərhələdən asılılıqları kopyalayırıq
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/client/node_modules ./client/node_modules
COPY --from=deps /app/server/node_modules ./server/node_modules

# Layihənin qalan bütün fayllarını kopyalayırıq
COPY . .

# Client-i (frontend) build edirik
RUN npm run build -w client

# Server-i (backend) build edirik (TypeScript -> JavaScript)
RUN npm run build -w server

# --- Mərhələ 3: Son, Production İmici ---
FROM node:18-alpine
WORKDIR /app

# Yalnız production üçün lazım olan asılılıqları yükləyirik
# Bu, son imicin ölçüsünü əhəmiyyətli dərəcədə kiçildir
COPY package.json package-lock.json ./
COPY client/package.json ./client/
COPY server/package.json ./server/
RUN npm install --omit=dev

# "builder" mərhələsindən qurulmuş (build) faylları kopyalayırıq
# 1. Qurulmuş Server kodu
COPY --from=builder /app/server/dist ./server/dist
# 2. Qurulmuş Client kodu
COPY --from=builder /app/client/dist ./public

# Tətbiqin işləyəcəyi portu xarici aləmə açırıq
EXPOSE 5000

# Tətbiqi işə salmaq üçün əmr
# Qurulmuş JavaScript faylını işə salırıq
CMD [ "node", "server/dist/src/index.js" ]