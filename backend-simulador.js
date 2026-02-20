// Esto simula la base de datos
const socios = [];

// Función para generar ID automáticamente
const generarId = () => {
    // Cuenta cuantos socios hay y genera un nuevo ID basado en ese número
  const numero = socios.length + 1;
  return `G${numero.toString().padStart(3, "0")}`;
};

// Función para agregar un nuevo socio
const agregarSocio = (nombre, telefono) => {
  const nuevoSocio = {
    id: generarId(),
    nombre,
    telefono,
    fechaAlta: new Date(),
    pagoAlDia: false
  };

  socios.push(nuevoSocio);
  console.log("Socio agregado correctamente");
};

// Función para mostrar todos los socios
const buscarSocio = (id) => {
  const socio = socios.find((s) => s.id === id);

  if (!socio) {
    console.log("Socio no encontrado");
    return;
  }

  console.log(socio);
};

// Función para registrar un pago
const registrarPago = (id) => {
  const socio = socios.find((s) => s.id === id);

  if (!socio) {
    console.log("Socio no encontrado");
    return;
  }

  socio.pagoAlDia = true;
  console.log("Pago registrado");
};

// Ejemplo de uso
agregarSocio("Juan", "123");
agregarSocio("Ana", "456");

buscarSocio("G001");

registrarPago("G001");

console.log(socios);