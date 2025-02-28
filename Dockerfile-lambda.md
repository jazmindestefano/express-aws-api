# Usar la imagen base de AWS Lambda para Node.js
FROM public.ecr.aws/lambda/nodejs:20

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY . .

# Instala las dependencias
RUN npm install

# Define el comando que Lambda ejecutará
CMD ["src/index.handler"]