const http = require("http");

const socios = [
  { id: "G001", nombre: "Juan" },
  { id: "G002", nombre: "Ana" }
];

// Función para generar ID automáticamente
const generarId = () => {
  const numero = socios.length + 1;
  // G001, G002, G003, etc.
  return `G${numero.toString().padStart(3, "0")}`;
};

// Crear el servidor HTTP
const servidor = http.createServer((request, response) => {

  // GET /socios
  if (request.url === "/socios" && request.method === "GET") {
    // Devolver la lista de socios en formato JSON
    response.writeHead(200, { "Content-Type": "application/json" });
    return response.end(JSON.stringify(socios));
  }

  // POST /socios
  if (request.url === "/socios" && request.method === "POST") {
  
  let body = "";

  request.on("data", (chunk) => {
    body += chunk.toString();
  });

  // Cuando se recibe toda la información del cuerpo de la solicitud
  request.on("end", () => {
    // PARSEO
    let datos;

    // Validar que el JSON sea correcto
    try {
      datos = JSON.parse(body);
    } catch (error) {
      response.writeHead(400, { "Content-Type": "application/json" });
      return response.end(JSON.stringify({ error: "JSON inválido" }));
    }

    // VALIDACIÓN
    if (!datos.nombre || datos.nombre.trim() === "") {
      response.writeHead(400, { "Content-Type": "application/json" });
      return response.end(JSON.stringify({ error: "El nombre es obligatorio" }));
    }

    const nuevoSocio = {
      id: generarId(),
      nombre: datos.nombre
    };

    socios.push(nuevoSocio);

    response.writeHead(201, { "Content-Type": "application/json" });
    response.end(JSON.stringify(nuevoSocio));
  });

  return;
}

  // 404
  response.writeHead(404, { "Content-Type": "application/json" });
  response.end(JSON.stringify({ mensaje: "Ruta no encontrada" }));

});

servidor.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});