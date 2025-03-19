/* ESTRUCTURA DE CONTROL -> Esenciales para realizar tareas repetitivas, automotizar procesos,
para manejar grandes cantidades de datos de una manera mas eficiente */

// Loops o bucles

// for -> se ejecuta segun lo lanzamos, se sigue ejecutando si la condicion sigue siendo true
// entre las llaves esta el codigo que vamos a repetir
// declaramos la variable, en este caso indice, mientras que sea menor a cero ejecutamos, incrementamos para pasar a la siguiente 

for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`) // interpolacion de valores
}

console.log("****************")

const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < 7; i++) {
    console.log(`Elemento: ${numbers[i]}`) // recorro los elementos del array, si el indice es mayor devuelve undefined
}

console.log("****************")

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < numbers1.length; i++) {
    console.log(`Elemento: ${numbers1[i]}`) // recorro los elementos del array, hasta el tamaño que vaya tomando, limito la longitud
}

console.log("****************")

// while -> se evalua antes de cada iteracion 
// si es verdadero el bucle continua, si es falso el bucle termina o no comienza si no cumple con la condicion
// declaro la variable fuera del while
// en el parentesis del while evaluo la condicion
// dentro del bucle debo implementar la i sino siempre va a valer cero


let i = 0 // si i es mayor a 4 no entra al bucle
while (i < 5) {
    console.log(`Hola ${i}`) 
    i ++
}

// bucle infinito
//  while (true) {
// }

console.log("****************")

// do while 
// es un bucle que se ejecuta al menos una vez
// se cumpla o no se cumpla la condicion se ejecuta 1 vez siempre 

i = 6
do {
    console.log(`Hola ${i}`) 
    i ++
} while(i < 5) 

console.log("****************")

// for of
// sirve para recorrer valores de algo que sea iterable, como una estructura de datos
// primero creo una variable con lo que va a ser el valor
// of de lo que queremos recorrer
// imprimimos el valor
// se ejecuta el for por cada uno de los valores del array

myArray = ["Stefani", "Quiolla", "Stef" ,"36", true]

mySet = new Set(["Stefani", "Quiolla", "Stef" ,"36", true, "stefiquio@gmail.com"])

myMap = new Map([ 
    ["name", "Stefani"],
    ["email", "stefiquio@gmail.com"],
    ["age", 36]
])

myString = "Hola, JavaScript" // estructura que tiene un listado de caracteres

for (let valor of myArray) {
    console.log(valor)
}

for (let valor of mySet) {
    console.log(valor)
}

for (let valor of myMap) {
    console.log(myMap)
}

for (let valor of myString) {
    console.log(valor)
}

// Buenas practicas

// break y continue 

for (let i = 0; i < 5; i++) { // ejemplo si el indice vale 5 no lo tengo en cuenta
    if (i == 5) {
        continue // al indice 5 lo pasa por alto
    } else if (i == 6) { // si el indice vale 6 quiero parar el bucle
        break
    }
    console.log(`Hola ${i}`) // interpolacion de valores
}


