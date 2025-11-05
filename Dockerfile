# Base image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install Node.js
RUN apt-get update && apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Copy backend requirements and install dependencies
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy frontend package.json and install dependencies
COPY frontend/package.json frontend/package-lock.json ./frontend/
RUN cd frontend && npm install

# Copy the rest of the application code
COPY . .

# Build frontend
RUN cd frontend && npm run build

# Expose port and run the application
EXPOSE 80
CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "80"]
