# aws-api

Api built with:
- AWS Lambdas for HTTP requests
- AWS ECS + EC2 for docker container and images


# Levantar la app sin docker-compose

## Reconstruir la imagen
docker build -t nombre-de-tu-imagen .

## Ejecutar el contenedor
docker run --name nombre-contenedor -p 3000:3000 -d nombre-de-tu-imagen

# Levantar la app con docker-compose
docker compose -p nombre-contenedor up --build -d

## Eliminar el contenedor
docker compose -p nombre-contenedor down

## Eliminar el contenedor y los volumenes
docker compose -p nombre-contenedor down -v

# Ejecutar el script del bump version
1. cambiar la version en version.json
2. chmod +x bump-version.sh
3. ./bump-version.sh 1.1.0

# Pasos para subir una imagen de docker a aws
## Amazon ECR
1. Crear repositorio
2. Subir imagen de docker
    - Seguir los pasos que detalla aws
    - Para login -> $ecrLoginCommand = Get-ECRLoginCommand -Region sa-east-1 $ecrLoginCommand.Password | docker login --username AWS --password-stdin 725967448027.dkr.ecr.sa-east-1 amazonaws.com

# Pasos para desplegar una app en Amazon ECS