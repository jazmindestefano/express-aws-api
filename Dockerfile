FROM node:20

# Establece el directorio de trabajo como /app
WORKDIR /app

# Copia solo el package.json y package-lock.json (o yarn.lock)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Define el comando para ejecutar la aplicación
CMD ["node", "src/index.js"]