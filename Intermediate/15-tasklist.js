const text = document.getElementById("text") //primero accedo a los elementos
const button = document.getElementById("button")
const list = document.getElementById("list")

function addTask() {

    const newElement = document.createElement("li") // creo el elemento li
    newElement.textContent = text.value  // le doy el valor de lo que tengo guardado en el input, añado el valor del text

    newElement.addEventListener("click", () => { // esto elimina la tarea que agrego al hacerle clic 
        newElement.remove()
    })

    list.appendChild(newElement) // añado hijos a la lista, el newElement al listado

    text.value = "" // limpio el input
}

button.addEventListener("click", addTask) //llamo al evento del boton, y le paso la funcion addTask