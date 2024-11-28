// Variebles que obtienen referencias a los inputs, el botón y el mensaje
const input1 = document.querySelector('#sticker1');
const input2 = document.querySelector('#sticker2');
const input3 = document.querySelector('#sticker3');
const message = document.querySelector('#message');
const verifyButton = document.querySelector('button');

// Función para verificar la cantidad de stickers
function verificarStickers() {
    // Obtener los valores de los inputs y sumarlos
    const totalStickers = parseInt(input1.value) + parseInt(input2.value) + parseInt(input3.value);

    // Limpiar las clases anteriores
    message.classList.remove('message-success', 'message-error');

    // Verificar si el total está dentro del límite permitido
    if (totalStickers <= 10) {
        message.innerHTML = 'Llevas ' + totalStickers + ' stickers';
        message.classList.add('message-success'); // Aplicar clase verde
    } else {
        message.innerHTML = 'Llevas demasiados stickers';
        message.classList.add('message-error'); // Aplicar clase roja
    }
}

// Agregar el evento al botón
verifyButton.addEventListener('click', verificarStickers);
