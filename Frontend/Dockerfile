# Usa una imagen base de Node.js
FROM node:16.14.2 as build

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos al contenedor
COPY . .

# Compila la aplicación Angular
RUN npm run build

# Expone el puerto 4200 para acceder a la aplicación
EXPOSE 4200

# Comando para iniciar la aplicación Angular
CMD ["npm", "start"]
