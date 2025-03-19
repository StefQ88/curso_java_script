/* Los tipos de datos primitivos en JS son los que 
se fundamentan nuestra iteraccion con el lenguaje, 
representan un solo valor, inmutables, no tienen funciones ni metodos */

// TIPOS DE DATOS PRIMITIVOS

// Cadena de texto (string)
let myName = "Stefani"
let alias = 'stef'

// Numeros (numeber)--
let age = 36
let height = 1.68

// Booleanos (boolean) 
let isTeacher = true
let isStudent = false

// Undefined -> significa que declaramos la variable pero aun no le hemos asignado valor
let undefinedValue
console.log(undefinedValue)

// Null -> variable con un valor nulo asigando
let nullValue = null
console.log(nullValue)

// Symbol -> son valores unicos que pueden ser utilizados como identificadores de propiedades
let mySymbol = Symbol("mySymbol")

// BigInt -> entero extremadamente grande , mas de 64 bits
let myBigInt = BigInt(6687606086778676786666666666666666666) // 1era forma de representarlo
let myBigInt2= 6687606086778676786666666666666666n // 2da forma de representarlo

// Mostramos los tipos de datos
console.log(typeof myName)
console.log(typeof alias)
console.log(typeof age)
console.log(typeof height)
console.log(typeof isTeacher)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)
