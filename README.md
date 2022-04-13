# Promesas
Desafío - Promesas

Para realizar este desafío debes haber estudiado previamente todo el material
disponibilizado correspondiente a la unidad.
● Una vez terminado el desafío, comprime la carpeta que contiene el desarrollo de los
requerimientos solicitados y sube el .zip en el LMS.
● Desarrollo desafío:
○ El desafío se debe desarrollar de manera Grupal
Capítulos
El desafío está basado en los siguientes capítulos de la lectura:
● Introducción a la asincronía
● Callbacks y Promesas
● Async/Await en JavaScript
Descripción
Se requiere desarrollar un programa con JavaScript, que al ser ejecutado en la consola del
navegador web, muestre los primeros 20 títulos de álbumes ofrecidos por una URL en la
nube, esto se puede lograr mediante el “id” que tiene cada objeto, que entrega la URL. Los
títulos de cada álbum se pueden rescatar desde el siguiente Link .
Igualmente, después de pasar 3 segundos, se debe mostrar un mensaje en la consola del
navegador web indicando que la información fue enviada.
El procedimiento de manera general para lograr lo solicitado será:
● Crear una función asíncrona que contenga la URL en una variable.
● Luego mediante el bloque de try/catch conectarse a la URL indicada anteriormente
con el método fetch, utilizando a la vez await para que retorne directamente el valor
de la promesa.
● Utilizando métodos para iterar arreglos, como por ejemplo el forEach, solamente
mostrar los primeros 20 títulos de álbumes de acuerdo al número de id indicados por
la URL.
_ 1
www.desafiolatam.com
● Se debe crear otra función que retorne una promesa, la cual debe tardar tres (3)
segundos en resolver la promesa para retornar el mensaje: “Información Enviada”.
Esta promesa debe ser recibida por una función asíncrona, que mediante el uso del
await reciba directamente el valor y lo muestra por la consola del navegador web.
Requerimientos
1. Implementar ES6 para toda la estructura del código.
2. Crear una función asíncrona para obtener los datos de la URL.
3. Dentro de un bloque Try/Catch, utilizar el método fetch mediante la instrucción await
para recibir el valor directamente de la promesa.
4. Utilizar un método de iteración de arreglos (por ejemplo: forEach) para mostrar
solamente los primeros 20 títulos de los datos recibidos.
5. Crear una función que retorne una promesa después de tres (3) segundos utilizando
setTimeout. El mensaje a retornar debe ser un string que indique: “Información
Enviada”.
6. Crear una función asíncrona que permita recibir el mensaje de la promesa creada en
el requerimiento cinco (5), de forma directa con await, para ser mostrado en la
consola del navegador, agregando el llamado a las dos funciones principales.
