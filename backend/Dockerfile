# backend/Dockerfile
FROM python:3.10-slim

# Устанавливаем зависимости для PostgreSQL и сборки
RUN apt-get update && apt-get install -y libpq-dev gcc

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем зависимости и устанавливаем
COPY requirements.txt .
RUN pip install -r requirements.txt

# Копируем приложение
COPY . .

# Запуск приложения
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
