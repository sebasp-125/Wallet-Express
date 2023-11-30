const base = document.getElementById('base');
console.log(".....");

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/user');
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    throw error;
  }
};

const obtenerDatos = async () => {
  try {
    const datosUsuarios = await fetchData();

    // Limpiar el contenido actual de 'base'
    base.innerHTML = '';

    
    // Iterar sobre los objetos y mostrar propiedades específicas
    datosUsuarios.forEach(usuario => {
      const usuarioInfo = document.createElement('div');
      usuarioInfo.innerText = `Nombre: ${usuario.nombre}, Edad: ${usuario.edad}`;
      base.appendChild(usuarioInfo);
    });

  } catch (error) {
    console.error("Error al procesar los datos:", error);
  }
};

obtenerDatos();
