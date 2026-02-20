const socios = [
  { id: "G001", nombre: "Juan", activo: true },
  { id: "G002", nombre: "Ana", activo: false },
  { id: "G003", nombre: "Pedro", activo: true }
];

const mostrarNombresSocios = (socios) => {
    const nombres = socios.map(socio => socio.nombre);
    console.log(nombres);
}

const mostrarSocioId = (socios, id) => {
    const socio = socios.find(socio => socio.id === id);
    console.log(socio);
}

const mostrarSociosActivos = (socios) => {
    const sociosActivos = socios.filter(socio => socio.activo);
    console.log(sociosActivos);
}

const agregarSocio = (socios, nuevoSocio) => {
    socios.push(nuevoSocio);
    console.log(socios);
}


mostrarNombresSocios(socios);
mostrarSocioId(socios, "G002");
mostrarSociosActivos(socios);
agregarSocio(socios, { id: "G004", nombre: "Maria", activo: true });
mostrarNombresSocios(socios);

