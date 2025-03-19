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

// Operadores de asignacion
let myVariable = 2
console.log(myVariable)
myVariable += 2 //modifica el valor de variable sumandole 2
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2
console.log("****************")

// Operadores de comparacion -> siempre es verdadero o falso, a = 5 b = 10

console.log(a)

console.log(a > b) 
console.log(a < b) 
console.log(10 >= 10) 
console.log(a <= b) 
console.log(a == b) 
console.log(a == 6) // Igualdad por valor
console.log(a == "6") // Igualdad por cadena de texto 
console.log(a == a) 
console.log(a === a)  // Igualdad por identidad (por tipo y valor)
console.log(a === 6)  // Igualdad por identidad, a es un numero que vale 6 y 6 tambien
console.log(a === "6")  
console.log(a != 6)  
console.log(a !== "6")  // a es distinto de 6 por igualdad de identidad

console.log("****************")
console.log(0 == false) //true , 0 es falso
console.log(1 == false) //false, el resto de numeros no es falso
console.log(2 == false) //false

console.log("****************")
console.log(0 == "") //si compara valor solo es true
console.log(0 == " ")
console.log(0 == '')
console.log(0 == ' ')
console.log(0 == "Hola") 
console.log(0 === "") // si compara valor y tipo ya no es true, es false
console.log(undefined == null) // en comparacion de valor indica la ausencia de valor en ambos
console.log(undefined === null) // en comparacion de valor y tipo es false

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
