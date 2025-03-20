// Operadores 
// se usan para relacionar datos, realizar operaciones

// Operadores Aritmetico
let a = 5
let b = 10
console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicacion
console.log(a / b) // Division

console.log(a % b) // Modulo -> es el resto de la division
console.log(a ** b) // Exponente

a++
console.log(a) // Incremento

b--
console.log(b) // Decremento

console.log("****************")

// Operadores de asignacion
let myVariable = 2
console.log(myVariable)
myVariable += 2 //modifica el valor de variable sumandole 2
console.log(myVariable)

myVariable -= 2 // Resta 2 de myVariable
myVariable *= 2  // Multiplica myVariable por 2
myVariable /= 2 // Divide myVariable entre 2
myVariable %= 2 // Modulo de myVariable entre 2, imprime 0
myVariable **= 2 // Eleva myVariable a la potencia de 2
console.log("****************")

// Operadores de comparacion -> siempre es verdadero o falso, a = 5 b = 10

console.log(a)

console.log(a > b) 
console.log(a < b) 
console.log(10 >= 10) 
console.log(a <= b) // true, a es 6 y b es 10 compara valor
console.log(a == b) // false, a y b tienen valores diferentes
console.log(a == 6) // Igualdad por valor
console.log(a == "6") // true, a es un numero (6) , "6" es un string, ==(doble igual) NO compara tipos, solo valores
console.log(a == a)  // true, se esta comparando consigo mismo
console.log(a === a)  // Igualdad por identidad (por tipo y valor)
console.log(a === 6)  // true, Igualdad por identidad y valor. ambos son numeros 6
console.log(a === "6")  // false, a es un numero (6), "6" es un string, === compara valor y tipo.  
console.log(a != 6)  // false, a es 6
console.log(a !== "6")  // a es distinto de 6 por igualdad de identidad

console.log("****************")
console.log(0 == false) //true , 0 es un numero, false es un booleano, == compara solo valor, js convierte false en 0
console.log(1 == false) //false, 0 no es igual a 1 
console.log(2 == false) //false

console.log("****************")
console.log(0 == "") //true, 0 es numero, "" es string vacio, == compara solo valor, js convierte "" a numero
console.log(0 == " ") //true, 0 es numero, "" es string con espacio en blanco, == compara solo valor, js convierte " " a "", luego "" a numero
console.log(0 == '') //true, 0 es numero, '' es string vacio, == compara solo valor, js convierte '' a numero
console.log(0 == ' ') //true, 0 es numero, ' ' es string con espacio en blanco, == compara solo valor, js convierte ' ' a "", luego "" a numero
console.log(0 == "Hola") //false, 0 es numero, "hola" es string, js convierte string a NaN 
console.log(0 === "") // false, 0 es numero, "" es string vacio, === compara valor y tipo sin realizar coercion de tipos
console.log(undefined == null) // true, en comparacion de valor indica la ausencia de valor en ambos
console.log(undefined === null) // false, undefined tipo undefned una variable no ha sido asigana a valor, null tiene tipo object

// Truthy value (valores verdaderos) -> son asi porque son asi

// Todos los numeros positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacias 
// El boolean true

// Falsy values (valores falsos)
// 0
// 0n
// null
// undefined
// NaN 
// El boolean false
// Cadenas de texto vacias 

console.log("****************")

// Operadores logicos

// and (&&)
console.log(5 > 10 && 15 > 20) // si las dos se cumplen es true, de lo contrario false
console.log(5 < 10 && 15 < 20) // si las dos se cumplen es true, de lo contrario false
console.log(5 < 10 && 15 > 20) // si una de las dos no se cumple es false

// or
console.log(5 > 10 || 15 > 20) // si se cumple uno de los dos sera true, false
console.log(5 < 10 || 15 < 20) // true
console.log(5 < 10 || 15 > 20) // true
console.log(5 > 10 || 15 > 20 || 30 > 40) // false

console.log(5 > 10 && 15 > 20 || 30 > 40) // false
console.log(5 > 10 && 15 > 20 || 30 < 40) // true


console.log("****************")

// not (!) -> operador logico de negacion
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20)) 

// OPERADORES TERNARIOS -> permiten escribir una condicion, otra forma de escribir condicionales 
/* si se cumple algo hacemos una cosa, si no se cumple hacemos otra cosa
para escribir primero poner la variable a la que queremos acceder, seguido por el signo
de ? y dos puntos : , en el medio imprimimos en caso true, por ultimo el caso false */

const isRaining = false
isRaining ? console.log("esta lloviendo") : console.log("no esta lloviendo") 
