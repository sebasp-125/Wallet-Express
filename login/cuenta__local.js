const numero_cuenta = document.getElementById('numero_cuenta');
const nombre_cuenta = document.getElementById('nombre_cuenta');

// el .toFixed es para convertir el valor a un número entero.
numero_cuenta.textContent = (Math.random() * 1000000000).toFixed(0);

const Validacion = async () => {
  try {
    const response = await axios.get('http://localhost:3000/user');
    // Obtengamos los datos.
    const UserData = response.data;
    console.log("Obteniendo Datos....", UserData);
    // Mostremos los datos
    const nombre_cuenta = document.getElementById('nombre_cuenta');

    const nombrEUsuario = UserData.nombre || 'Nombre no disponible';
    const contrasenaUsuario = UserData.contrasena || 'Contraseña no disponible';
    const UserInfoHTML = `<p>ID: ${contrasenaUsuario}</p><p>Nombre: ${nombrEUsuario}</p>`;
    
    nombre_cuenta.innerHTML = UserInfoHTML;
  } catch (error) {
    console.error('Error al obtener los datos del usuario:', error);
  }
};

Validacion();
