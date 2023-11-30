let btnRegister = document.getElementById('btn-register');
const ImagenHTL = document.getElementById('Imagen');
const Texntbtn = document.getElementById('Nbutton');

const prevButton = document.querySelector('prev');
const nextButton = document.getElementById('next');   


btnRegister.addEventListener('submit' , function() {
    window.location.href = "register.html";
})

//------------------Slider---------------------------
const imagenes = ["https://res.cloudinary.com/dlwr6vxib/image/upload/v1697740610/fotos/Pekka.webp", "https://media.istockphoto.com/id/1443305526/es/foto/joven-sonriente-con-auriculares-escribiendo-en-el-teclado-de-una-computadora-port%C3%A1til.jpg?s=1024x1024&w=is&k=20&c=Lq2h77UE_J1JPvYpCio8p0nac6Uy2iYdblqW_Tfba6g=" ,
    "https://res.cloudinary.com/dlwr6vxib/image/upload/v1697740609/fotos/caballero.png", "https://res.cloudinary.com/dlwr6vxib/image/upload/v1697740609/fotos/bruja.png",
    "https://res.cloudinary.com/dlwr6vxib/image/upload/v1697740610/fotos/los-pillos.png", "https://res.cloudinary.com/dlwr6vxib/image/upload/v1697740609/fotos/goblin.webp",
    "https://res.cloudinary.com/dlwr6vxib/image/upload/v1697740609/fotos/arquero.png", "https://res.cloudinary.com/dlwr6vxib/image/upload/v1697740610/fotos/montaPuercos.webp",
    "https://res.cloudinary.com/dlwr6vxib/image/upload/v1697740610/fotos/Miner_info.webp", "https://res.cloudinary.com/dlwr6vxib/image/upload/v1697740610/fotos/principe.png",
    "https://res.cloudinary.com/dlwr6vxib/image/upload/v1697740609/fotos/dragon.png"];

    let score = 0;

ImagenHTL.setAttribute("src" , imagenes[0])

nextButton.addEventListener('click', function () {
    if (score < imagenes.length -1) {
      score++;
      ImagenHTL.setAttribute("src", imagenes[score]);
      Texntbtn.innerHTML = nombres[score];
      prevButton.style.background = "rgba(18, 46, 205, 0.83)" //Cambio de Colores
    } 
    
    if (score == 10) {
        nextButton.style.background = "gray"
    }
  });


// Mostrar el pop-up al cargar la página
window.onload = function () {
    showPopup();
};

// Función para mostrar el pop-up
function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Función para cerrar el pop-up
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

//-------------------Botones OPC------------------------

//Revisar el Estado de mi Cuenta
function opc_EstadoCuenta() {
    window.open.href = "register.html"
}

//Comunicarme con el Servicio al Cliente WARNING
function opc_Call_ServicioCliente() {
    document.getElementById('popup-warnig').style.display = 'flex';
}

function closePopup__WARNING() {
    document.getElementById('popup-warnig').style.display = 'none';
}

