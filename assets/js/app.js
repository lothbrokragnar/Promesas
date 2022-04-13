// Asigno la URL a una constante y asi trabajo con ella en el resto de las llamadas, en lugar de repetirla. De esta forma si cambia la URL, la modifico en una sola línea de código. 
const url = 'https://jsonplaceholder.typicode.com/photos';

// Con "DOMContentLoaded", cuando el documento este listo, llamo a la funcion "obtenerDatos".
document.addEventListener('DOMContentLoaded', obtenerDatos);

// Utilizo async/await para obtener la información.
async function obtenerDatos() {
    //Utilizo try/catch para manejar los errores.
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        // Obtengo los primeros 20 resultados.
        console.log(resultado.slice(0, 20));
    } catch (error) {
        console.log(error);
    // Espero 3 segundos, para enviar el mensaje solicitado.
    } finally {
        setTimeout(() => {
          console.log("Informacion Enviada");
        }, 3000);
     }
}