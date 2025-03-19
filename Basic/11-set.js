/* ESTRUCTURA DE DATOS -> listado de elementos ordenados pero sin acceso directo a los indices*/

// set
/* Similar a un array, pero sin valores repetidos.
No almacena clave valor, son valores unicos.
Mantiene el orden de insercion.
Permite recorrer valores con .forEach(), .values(), .keys(), .forof



Métodos clave: .add(), .has(), .delete().
*/

// Declaracion

let mySet = new Set() // -> esta es la forma de definir un set vacio

console.log(mySet)

console.log("****************")

// Inicializacion
// los datos tienen que ir tambien entre corchetes [] y no solo entre parentesis 

mySet = new Set(["Stefani", "Quiolla", "Stef" ,"36", true, "stefiquio@gmail.com"]) // esta es la forma correcta de inicializar un set!!

console.log(mySet)

console.log("****************")

// METODOS COMUNES

// add y delete -> add agrega elemento y delete elimina elementos 

mySet.add("098518649") // add añade al final
console.log(mySet)

mySet.delete("098518649") // tenemos que indicarle que elemento queremos eliminar pasandole tal cual el texto
console.log(mySet)

console.log(mySet.delete("Quiolla")) // devuelve true si elimina el elemento y false si no. 
console.log(mySet)

console.log("****************")

// has -> comprueba si existe un elemento pasandole el elemento tal cual

console.log(mySet.has("Stefani")) // true porque existe
console.log(mySet.has("Quiolla")) // false porque lo eliminamos

console.log("****************")

// size -> le llamamos tamaño 
console.log(mySet) // el tamaño de mi set en este caso  'Stefani', 'Stef', '36', true, 'stefiquio@gmail.com'
console.log(mySet.size)

console.log("****************")

// convertir set a array
let myArray = Array.from(mySet) // Le paso como argumento mySet 
console.log(myArray) 

// convertir array en set
mySet = new Set(myArray) // instancio un nuevo set
console.log(mySet)

console.log("****************")

// DIFERENCIA ENTRE ARRAY Y SET
// el array admite elementos duplicados, el set no. Por eso no necesitamos acceder a un indice concreto 
// lo que tiene que entrar debe ser extactamente igual, si agrego quiolla si va a mostrarlo como elemento diferente

mySet.add("Quiolla") 
mySet.add("Quiolla")
console.log(mySet)