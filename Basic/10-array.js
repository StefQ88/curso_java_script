/* ESTRUCTURA DE DATOS: almacenar varios valores en una sola variable */

// ARRAY -> utiles cuando necesitamos manejar listados de elementos, ej lista de numeros

// Declaracion

let myArray = [] // esta es la manera que se utiliza para declarar un array!!
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicializacion

myArray = [1] //esta es la que se utiliza para agregar valores al array!!
myArray2 = new Array(1) // con un elemento solo reserva un espacio en memoria

console.log(myArray)
console.log(myArray2)

console.log("****************")

// Inicializacion
myArray = [1,2,3,4, "Stefani", "36"] //esta es la que se utiliza!!
myArray2 = new Array(1,2,3,4, "Stefani", "36") // con varios elementos se comporta igual que el anterior

console.log(myArray)
console.log(myArray2)

console.log("****************")

// Inicializacion
myArray2 = new Array(3)
myArray2[0] = "Stefani"
myArray2[1] = "Quiolla"
myArray2[2] = "Stef"
myArray2[4] = "Stefi" // por mas que declare array de 3, se redimensiona y sigue reservando a medida que agregue elementos

console.log(myArray2)

console.log("****************")

// Inicializacion
myArray = [] // esta es la manera correcta !!
myArray[1] = "Stefani"
myArray[2] = "Quiolla"

console.log(myArray)

console.log("****************")

// METODOS COMUNES

myArray = []

// push y pop -> agrega y elimina elementos

myArray.push("Stefani") // ingresa elementos en el orden que le vamos diciendo al final del array
myArray.push("Quiolla")
myArray.push("Stef")
myArray.push(88)

console.log(myArray)

// myArray.pop
console.log(myArray.pop()) // elimina el ultimo elemento del array y lo devuelve

console.log("****************")

// shift y unshift -> extrae y agrega elementos uno por uno

console.log(myArray.shift()) // shift -> elimina el primer elemento del array y tambien lo devuelve

myArray.unshift("Stefani", "stefi88") // unshift agrega uno o mas elementos desde el principio del array
console.log(myArray)

console.log("****************")

// length -> longitud del array

console.log(myArray.length) // length es una propiedad no una funcion, no necesita parentesis, imprime la longitud del array

console.log("****************")

//clear -> VACIA EL ARRAY, para esto hay que declararlo nuevamente 

myArray = [] // -> inicializa el array
myArray.length = 0 // -> otra forma pero no utilizar esta 
console.log(myArray)

console.log("****************")

// slice
// se usa para extraer una parte de un array sin modificar el original.

myArray = ["Stefani", "Quiolla", "Stef" ,"36", true] // declaro el array vacio

let myNewArray = myArray.slice(1,3) /// Extrae desde el índice 1 hasta el 3 (sin incluir el 3)
console.log(myArray) // ["Stefani", "Quiolla", "Stef" ,"36", true]
console.log(myNewArray) // ["Quiolla", "Stef"]

// splice
myArray.splice(1,3) // elimina elementos desde el indice 1 hasta completar la cantidad de elementos que le pasamos
console.log(myArray)

console.log("****************")

// splice con mas parametros (elimina y agrega)
myArray = ["Stefani", "Quiolla", "Stef" ,"36", true] 
console.log(myArray)
myArray.splice(1,2,3) // elimina elementos desde el indice 1 hasta completar elementos, y agrega el ultimo parametro en ese lugar
console.log(myArray)