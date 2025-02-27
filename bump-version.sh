#!/bin/bash

# Verificar si se proporcionó una nueva versión como argumento
if [ -z "$1" ]; then
  echo "Error: Debes proporcionar una nueva versión (ejemplo: 1.1.0)."
  exit 1
fi

# Nueva versión
NEW_VERSION=$1

# Actualizar el archivo de versión en formato JSON
# Usamos jq para modificar la clave "version" dentro de version.json
jq --arg version "$NEW_VERSION" '.version = $version' version.json > temp.json && mv temp.json version.json

# Hacer git add y git commit
git add version.json
git commit -m "Bump version to $NEW_VERSION"

# Crear un tag en Git
git tag "v$NEW_VERSION"

# Subir el tag al repositorio remoto
git push origin "v$NEW_VERSION"

# Subir los cambios al repositorio remoto
git push origin main  # o la rama que estés usando (master, develop, etc.)

echo "Versión actualizada a $NEW_VERSION, commit creado, tag v$NEW_VERSION creado y subido."