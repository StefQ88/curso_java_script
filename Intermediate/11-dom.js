// Manejo del DOM (Document Object Model)

/*
El DOM (Document Object Model) es una representación en forma de árbol de la estructura de una página web. Básicamente, 
cuando el navegador carga una página, convierte el HTML en una estructura que JavaScript puede manipular.

 ¿Para qué sirve el DOM?
Gracias al DOM, con JavaScript puedes:
✅ Acceder a los elementos de la página (como un <h1>, <p>, etc.).
✅ Modificar el contenido (cambiar texto, imágenes, estilos).
✅ Agregar o eliminar elementos.
✅ Responder a eventos como clics, movimientos del mouse, etc.
*/

console.log(document)

/*************************************************************************************** */
/*************************************************************************************** */

// - Seleccion de elementos

// Metodos basicos
/* 
document -> es un objeto que representa toda la pagina web cargada en el navegador. 
Forma parte del DOM, que es la estructura jerarquica que el navegador crea a partir del codigo HTML de la pagina.

Con document, se puede acceder y modificar elementos de la pagina, como cambiar textos, colores, agregar o eliminar elementos.
*/

const myElementById = document.getElementById("id") // retorna la referencia a un unico elemento que tenga el identificador que le pasemos

const myElementsByClass = document.getElementsByClassName("class") // -> le paso el nombre de la clase, la clase representa a diferentes elementos que son iguales, conjunto de elementos

const myElementByTag = document.getElementsByTagName("tag") // -> nombre de la etiqueta que esta en diferentes elementos

// Metodos mas modernos

document.querySelector(".paragraph") // selecciona el primer elemento del DOM que coincida con el selector CSS dado. 1er elemento que tenga la clase paragraph
document.querySelectorAll(".paragraph") // selecciona todos los elementos del DOM que tengan class paragraph, devuelve una lista de nodos

// Manipulacion de elementos 

const title = document.getElementById("title") // si existe este elemento con el id title yo lo puedo modificar
title.textContent = "Hola JavaScript"

const container = document.querySelector(".container") // selecciona el primer elemento en el DOM que tenga la clase container.
container.innerHTML = "<p>Esto es un nuevo parrafo</p>" // innerHTML cambia el contenido completo del contenedor y lo reemplaza por <p>Esto es un nuevo parrafo</p>.


// - Obtencion del atributo -> recupero la url del link
const link = document.querySelector("a") // Selecciona el primer elemento, en este caso enlace <a>
const url = link.getAttribute("href") // Obtiene el valor del atributo href, la url

// Establecimiento del atributo -> agrega
link.setAttribute("href", "https://example.com") // Esto cambia el atributo href del enlace, reemplazando su URL por "https://example.com"

// Comprobacion de atributo
const hasTarget = link.hasAttribute("target") // El método hasAttribute("target") revisa si un elemento HTML tiene un atributo específico. true si existe, false si no existe

// Eliminacion de atributos
link.removeAttribute("target") //El método removeAttribute("target") elimina un atributo de un elemento HTML.

/************************************************************* */
/************************************************************* */

// - Interacion con clases CSS

// classList -> permite agregar, eliminar y alternar clases sin sobrescribir las existentes.

const box = document.querySelector(".box") // tengo la referencia al elemento caja, voy a la lista de clases que tiene.
box.classList.add("selected") //  Agregar una clase -> Si box no tiene la clase "selected", se la agrega
box.classList.remove("selected") // Eliminar una clase -> Si box tiene la clase "selected", la elimina.
box.classList.toggle("selected")// Alternar una clase -> Si box tiene "selected", la elimina. Si box NO la tiene, la agrega


const button = document.querySelector("button") // accedemos a la propiedad
button.style.backgroundColor = "blue" // cambia el color de fondo del boton
button.style.color = "white" // cambia el color de la letra a blanco
button.style.padding = "10px" // agrega un padding de 10

// Creacion y eliminacion de elementos

// creacion

const newParagraph = document.createElement("p") // creo un nuevo elemento parrafo
newParagraph.textContent = "Este es un nuevo parrafo creado desde JS" //le añado el texto al parrafo
newParagraph.style.color = "white" // añado estilos al parrafo
newParagraph.style.padding = "10x" 

container.appendChild(newParagraph)

const itemsList = document.querySelector("ul") // accedo a la lista y la guardo
const newItem = document.createElement("li") // creo el elemento de la lista 
newItem.textContent = "Nuevo elemento"

// Insercion en un lugar concreto

const secondItem = itemsList.children[1] // Accede al segundo hijo de itemsList, comienza en el indice cero y lo guardo en la constante
itemsList.insertBefore(newItem, secondItem); // Esto inserta newItem antes de secondItem

itemsList.append(newItem) //  Agregar al final, Añade newItem al final de itemsList
itemsList.prepend(newItem) // Agregar al principio , Añade newItem al inicio de itemsList
secondItem.before(newItem) // Insertar antes de un elemento ,  Inserta newItem antes de secondItem, pero sin necesidad de usar el elemento padre.
secondItem.after(newItem) // Insertar despues de un elemento

// Eliminacion 

newParagraph.remove() // Eliminar el elemento completo

// Eliminacion tradicional

const parent = newParagraph.parentElement
parent.removeChild(newParagraph)


// Elmentos del DOM -> permiten atender o a responder acciones del usuario

/* 
addEventListener -> permite escuchar eventos en los elementos del DOM y 
ejecutar una función cuando ocurre un evento específico, como un clic, una pulsación de tecla o un movimiento del mouse.

*/

function shoMsg() { //función que muestra un mensaje cuando se ejecuta.
    alert("Clic!")
}

const sendButton = document.querySelector("#send") // referencia al elemento del boton, busca id="send" en el HTML y lo guarda en sendButton.
sendButton.addEventListener("click", shoMsg) // escuchador de evento, Cuando el usuario haga clic en sendButton, Ejecuta la función shoMsg(), que muestra una alerta "Clic!"

// lo simplificamos con las arrow function
sendButton.addEventListener("click", () => { // En lugar de definir shoMsg(), podemos escribir directamente la función dentro del addEventListener().
    alert("Clic con una arrow function!")    // 	Cuando solo se usa en un lugar
})

// Eventos comunes

/* 

DOMContentLoaded -> indica cuándo el navegador ha cargado todo el HTML y ha construido el DOM (Document Object Model).
¿Cuándo usar DOMContentLoaded?
✅ Cuando solo necesitas asegurarte de que el HTML esté listo antes de manipularlo con JavaScript.
✅ Si tu script está en el <head>, es una buena práctica usarlo para evitar errores.
✅ Si no necesitas esperar a que imágenes y CSS carguen completamente.


*/

// ejemplo con boton
document.addEventListener("DOMContentLoaded", () => {
    console.log("EL DOM esta completamente cargado.")
})

sendButton.addEventListener("mouseenter", () =>{ // cuando el mause pase por encima del boton lo convierte en verde
    sendButton.style.backgroundColor = "green"
})   

sendButton.addEventListener("mouseleave", () =>{ // recupera el color original
    sendButton.style.backgroundColor = "blue"
}) 

// ejemplo con formulario

const form = document.querySelector("form") // Aquí accedemos al elemento <form> de la página, selecciona el primer formulario que encuentre.
form.addEventListener("submit", (event) => { // le dice a JavaScript que esté atento cuando el usuario haga clic en "Enviar". 
    // codigo                                   // Cuando el formulario se envía, la función dentro de addEventListener se ejecuta.
} ) 
