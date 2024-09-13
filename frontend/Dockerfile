# frontend/Dockerfile
FROM node:latest

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Собираем проект для production
RUN npm run build

# Запускаем Nuxt.js в режиме сервера
CMD ["npm", "run", "start"]