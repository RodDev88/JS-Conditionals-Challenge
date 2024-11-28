// Seleccionar la imagen
const image = document.getElementById('toggle-border');

// Agregar un evento de clic a la imagen
image.addEventListener('click', () => {
    // Comprobar si la imagen ya tiene la clase 'with-border'
    if (image.classList.contains('with-border')) {
        // Si tiene la clase, quitarla (remover el borde rojo)
        image.classList.remove('with-border');
    } else {
        // Si no tiene la clase, agregarla (añadir el borde rojo)
        image.classList.add('with-border');
    }
});