// importamos el módulo http para crear un servidor
const http = require("http");

const servidor = http.createServer((request, response) => {
  if (request.url === "/") {
    response.write("Bienvenido al backend del gimnasio");
  } 
  else if (request.url === "/socios") {
    response.write("Lista de socios");
  } 
  else {
    response.write("Ruta no encontrada");
  }

  response.end();
});

// Iniciamos el servidor en el puerto 3000
servidor.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});