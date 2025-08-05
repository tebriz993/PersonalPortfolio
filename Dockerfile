# Dockerfile (TAM VƏ SİZİN LAYİHƏYƏ UYĞUN VERSİYA)

# --- Mərhələ 1: Build Mərhələsi ---
# Bu mərhələ bütün asılılıqları yükləyir və layihəni build edir.
# Development üçün lazım olan paketlər də burada yüklənir, çünki build prosesi üçün lazımdır.
FROM node:18-alpine AS build-stage
WORKDIR /app

# Əvvəlcə package.json fayllarını kopyalayıb asılılıqları yükləyirik
# Bu, dəyişiklik olmadıqda Docker-in keşdən istifadə etməsinə imkan verir
COPY package*.json ./
RUN npm install

# Bütün layihə kodunu kopyalayırıq
COPY . .

# package.json faylındakı build skriptini işə salırıq
# Bu, həm client (Vite), həm də server (esbuild) üçün build prosesini yerinə yetirəcək
# və nəticələri "dist" qovluğuna yığacaq.
RUN npm run build


# --- Mərhələ 2: Production Mərhələsi ---
# Bu mərhələ yalnız proqramın işləməsi üçün lazım olan faylları götürür,
# nəticədə kiçik və təhlükəsiz bir imic yaranır.
FROM node:18-alpine
WORKDIR /app

# Yalnız production üçün lazım olan asılılıqları yenidən yükləyirik
COPY package*.json ./
RUN npm install --omit=dev --ignore-scripts

# "build-stage" mərhələsindən build nəticəsi olan "dist" qovluğunu kopyalayırıq
COPY --from=build-stage /app/dist ./dist

# Render-in təyin edəcəyi portu müəyyən edirik
EXPOSE 5000

# package.json faylındakı start skriptinə uyğun olaraq proqramı işə salırıq
CMD [ "node", "dist/index.js" ]