/* ESTRUCTURA DE DATOS: nos sirven para almacenar en ellas un conjunto de datos */

// Map
/* Un Map es una coleccion de elementos y que cada elemento esta formado por un par de dos elementos
que uno esta compuesto por una clave (keys) y valos (value),similar a un objeto pero con clave y valor de
cualquier tipo de dato.

Mantiene el orden de insercion.

la clave es el elemento que usaremos para buscar dentro de la estructura y un 
valor que esta asociado a esa clave  

No puede haber elementos repetidos en clave, si en valor!!

Métodos clave: .set(), .get(), .has(), .delete().
*/

// Declaracion

let myMap = new Map()
console.log(myMap)

// Inicializacion
// asociacion directa, clave y valor

myMap = new Map([ 
    ["name", "Stefani"],
    ["email", "stefiquio@gmail.com"],
    ["age", 36]
])

console.log(myMap)

// METODOS Y PROPIEDADES

// set -> sirve para actualizar un elemento o para agregarlo 

myMap.set("alias", "Stef") // agrega clave y valor al final del set
console.log(myMap)

myMap.set("name", "Stefani Dahiana") // actualiza el elemento si coincide con la clave, es la llave de busqueda
console.log(myMap)

// get -> sirve para recuperar el valor

console.log(myMap.get("name")) // el metodo get obtiene el valor de la clave pero no lo imprime automaticamente
console.log(myMap.get("surname")) // undifined 

// has -> permite comprobar si una clave existe

console.log(myMap.has("surname")) // false, no tiene la clave apellido
console.log(myMap.has("age")) // true, si tiene la clave edad

// delete

console.log(myMap)

myMap.delete("email")
console.log(myMap)


// keys, values y entries

console.log(myMap.keys()) // DEVUELVE TODAS LAS CLAVES DEL MAP
console.log(myMap.values()) // DEVUELVE TODOS LOS VALORES DE MAP
console.log(myMap.entries()) // DEVUELVE UN ITERADOR CON LOS PARES CLAVE -> VALOR 


// size -> es una propiedad, devuelve la cantidad de elementos que contiene la estructura de datos
// la cantidad de pares clave -> valor

console.log(myMap.size) 


// clear -> sirve para BORRAR todo el mapa 

myMap.clear() 
console.log(myMap)
