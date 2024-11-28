// Creo variable que obtienen las referencias de los selects y el botón

const digit1 = document.querySelector('#digit1');
const digit2 = document.querySelector('#digit2');
const digit3 = document.querySelector('#digit3');
const verifyButton = document.querySelector('#verifyButton');
const message = document.querySelector('#message');

// Función para verificar el password
function verificarPassword() {
  // Obtener los valores seleccionados de cada select
  const password = digit1.value + digit2.value + digit3.value;

  // Validación: verificar que los selects no estén vacíos
  if (!password || password === '000') {
    message.innerHTML = 'Por favor, selecciona un valor válido en todos los campos.';
    message.style.color = 'orange'; // Color naranja para advertencia
    return;
  }

  // Verificar el valor ingresado y mostrar el mensaje adecuado
  if (password === '911') {
    message.innerHTML = 'Password 1 correcto';
    message.style.color = 'green'; // Color verde
  } else if (password === '714') {
    message.innerHTML = 'Password 2 correcto';
    message.style.color = 'green'; // Color verde
  } else {
    message.innerHTML = 'Password incorrecto';
    message.style.color = 'red'; // Color rojo
  }
}

// Agregar el evento click al botón > ejecuta Fx verificarPassword
verifyButton.addEventListener('click', verificarPassword);
