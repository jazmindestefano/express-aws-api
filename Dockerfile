FROM node:20

# Establece el directorio de trabajo como /app
WORKDIR /app

# Copia los archivos del proyecto al directorio /app
COPY . .

# Instala las dependencias
RUN npm install

# Define el comando para ejecutar la aplicación
CMD ["node", "src/index.js"]

# Expone el puerto 3000
EXPOSE 3000