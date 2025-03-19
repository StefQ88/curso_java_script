/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

// Funcion tradicional con return
function sumar(a, b) {
    return a + b
}
let resultado = sumar(10,5)
console.log(resultado) //resultado: 15

// Fcunction tradicional con console.log dentro de la funcion
function sumo(a, b) {
    console.log(a + b)
}
sumo(2, 4)

// Arrow function (funcion flecha) -> ESTA ES LA MANERA CORRECTA
const suma = (a, b) => a + b 
console.log(suma(20,40))

// Usando funciones anonimas (sin nombre)
const operacion = function(a,b) {
    return a + b
}

// Funcion anidada
const operaciones = {
    sumar: function(a, b) {
        return a + b
    }
}
console.log(operaciones.sumar(40, 90))

console.log("****************")

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

// Usando for

let myArray = [2, 8, 9, 20, 22]
let maximo = myArray[0]

for (let i = 1; i < myArray.length; i ++) { // Comenzamos en 1 porque el primer elemento ya está en maximo
    if (myArray[i] > maximo) { //si encontramos un numero mayor
        maximo = myArray[i] //actualizo la variable maximo
    }
}
console.log(`El numero mas grande es ${maximo}`)

console.log("****************")

// Usando while

let array = [2, 1, 45, 34, 27]
let max = array.shift() // extraemos el primer numero del array

while (array.length > 0) {
    let num = array.shift() // extraemos el segundo numero del array y vamos comparando
    if (num > max) { // preguntamos si el segundo numero es mayor al primero 
        max = num // si es asi actualizamos el resultado
    }
}
console.log(`El numero mas grande es: ${max}`)

console.log("****************")

// Usando forEach

let lista = [2, 1, 45, 64, 60]
let maxi = lista[0] // me quedo con el numero en el indice 0 que es 2

lista.forEach(num => { // llamamos a la funcion forEach para recorrerla, num representa el numero actual del array
    if (num > maxi) {
        maxi = num
    }
})
console.log(`El numero mas grande es: ${maxi}`)





// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado