const numero_cuenta = document.getElementById('numero_cuenta');

// el .toFixed es para convertir el valor a un numero entero. 

numero_cuenta.textContent = (Math.random() * 1000000000).toFixed(0); 


