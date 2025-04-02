

//Funciones avanzadas
/* Ciudadanos de primera clase -> son entidades que las podemos tratar como valores, 
los podemos almacenar en una variable, en una constante, un objeto, un valor lo podemos pasar como parametro a funcion, 
un valor lo podemos retornar en una funcion

Ciudadanos de primera clase significa que tienen que cumplir esas caracteristicas*/

const res = require("express/lib/response")


// CARACTERISTAICA 1 -> Guardamos la funcion como constante
const greet =  function (name) { //voy a guardar la funcion en una constante, cambio a funcion generica (no tiene nombre)
    console.log(`Hola , ${name}`)
}

greet("Stefani") //invocamos a la funcion a traves de la constante


// CARACTERISTICA 2 -> Pasamos a la funcion como parametro

function processGreeting(greetFunction, name) {
    greetFunction(name)
}


// CARACTERISTICA 3 -> Una funcion puede retornar otra funcion

function returnGreeting() {
    return greet                //retorno la funcion
}



processGreeting(greet, "Stef") // una funcion que le pasamos como parametro otra funcion guardada en la constante

const greet2 = returnGreeting() //me guardo la funcion en otra constante y llamo a la constante
greet2("Stefani Quiolla")

console.log("****************")

/************************************************************************************************************ */
// Arrow functions avanzadas

// - Retorno implicito -> podemos ejecutar en una sola expresion , una sola linea
// No necesitamos la palabra clave function 

const multiply = (a, b) => a * b // asigno a la funcion a una constante
console.log(multiply(2,5))

console.log("****************")

// - this lexico

const handler = { // creo un objeto que contiene dos metodos
    name: "Stefani",
    greeting: function() { // funcion normal que usa this
        console.log(`Hola, ${this.name}`) //this hace referencia al contexto y accede a la propiedad name del objeto handler
    },
    arrowGreeting: () => { // arrow function crean su propio contexto del this
        console.log(`Hola, ${this.name}`) // this no hace referencia al objeto handler, hereda su valor del contexto en el aue se crea, ambito global
    }
}

handler.greeting()
handler.arrowGreeting(); //Hola, undefined

console.log("****************");

/************************************************************************************************************ */

// IIFE (Expresion de Funcion Invocada Inmediatamente)
/*  
- funciones que se van a ejecutar en el momento en que se definan, inmediatamente luego se ser definidas.
- Se usan para:
    - Evitar la contaminacion del ambito global, como la funcion se ejecuta inmediatamente, las variables definidas
     dentro de ella no afectan el ambito global.
    - Crear ambito seguro, util para encapsular codigo sin interferir en otras partes del programa
- Los parentesis convierten a la funcion en una expresion en lugar de declaracion y perfime ejecutarla inmediatamente
*/

// IIfe clasico
(function () {
    console.log("IIFE clasico")
})(); // establezco un contexto en la funcion y la invoco. debe ser independiente al resto del codigo por eso el codigo anterior lleva ;

// IIfe con arrow function
(() => {                           // defino una arrow function anonima 
    console.log("IIFE con arrow function")
})();                             // invoco a la funcion inmediatamente despues de definirla

console.log("****************");

/************************************************************************************************************ */

// Parametros Rest (...)
/* 
Se utilizan cuando no sabemos que parametros puede recibir una funcion (...)
La sintaxis agrupa todos los elementos adicionales de un array.

Se utiliazan los ...(nombre de los parametros)

El parametro rest genera un array automaticamente con los parametros
*/

function sum(...numbers) {
    let result = 0

    for (let number of numbers) {
        result += number       // a cada result le incremento el valor con number
    }
    return result // retorno el resultado
}

console.log(sum(1, 2, 3, 4, 5)) // se transforma en un array 
console.log(sum(2, 5))

console.log("****************");

/************************************************************************************************************ */

// Operador Spread (...)

/*
- Se utiliza par expandir los elementos de un interable (como un array u objeto) en lugares donde se esperan multiples valores.
- DESEMPAQUETA un array, en este caso pasa los elementos a ser a, b, c y suma los valores  
- Va a desempaquetar la cantidad de valores que pasemos como parametros
*/

const numbers = [1, 2, 3]
function sumWithSpread(a, b, c) {
    return a + b + c
}

console.log(sumWithSpread(1, 2, 3)) // sin spread
console.log(sumWithSpread(...numbers)) // con spread, esta desempacando un array

console.log("****************");

/************************************************************************************************************ */

// Closures(Clausuras)
/*
- Es una funcion que recuerda el ambito (scope) en el que fue creada, incluso despues de que el ambito original haya desaparecido.
- Es una funcion dentro de otra funcion que mantiene acceso a las variables de su funcion externa, incluso
despues de que la funcion externa haya terminado de ejecutarse.

- Una funcion que es interna de otra funcion, acceder a variables externas de la funcion externa.
- En vez de devolver un valor, devuleve otra funcion.

- Los closures se usan para:
    - Crear datos privados en JavaScript
    - Evitar el uso de variables globales
    - Crear funciones reutilizables como contadores o configuraciones predefinidas

*/

function createCounter() {
    let couter = 0
    return function () {
        couter ++  // funcion interna accede a la variable de la funcion externa 
        console.log(`Contador: ${couter}`)
    }
}

const counter = createCounter() // cada vez que llamemos a createCouter() nos va a retornar la funcion executeCounter()
counter() // counter almacena la funcion interna
counter()

console.log("****************");

/************************************************************************************************************ */
// Recursividad
/* 
- Es una funcion que se llama a si misma, cuando es capaz de invocarse a si misma

- Criterios:
    1.Tener un caso base (punto de parada) : Es la condición que detiene la recursión para que no siga llamándose infinitamente.
    Sin esto, la función se ejecutaría para siempre y daría un error.

    2.  Llamarse a sí misma con un valor diferente: Cada vez que la función se llama, el argumento debe cambiar para acercarse al caso base.
    Si el valor no cambia, la función se ejecutaría para siempre.

    3. Asegurar que no se haga demasiadas llamadas (optimización): Si hay demasiadas llamadas recursivas, la memoria se llena y da un error ("Stack Overflow").
    Para evitarlo, podemos usar un acumulador para guardar resultados en cada paso.
*/

function factorial(n) { // 5 * 4 * 3 * 2 * 1
    // n * (n-1) * (n - 2) * (n - 3) * (n - 2) 
    if (n <= 1) { // Caso base: si n es 1 o menor, se detiene y devuelve 1.
        return 1
    }
    return n * factorial(n-1) //  Llamada recursiva con n-1

}

console.log(factorial(5)) //120

console.log("****************");

/************************************************************************************************************ */
// Funciones parciales
/*
- Son funciones que guardan algunos argumentos y esperan el resto mas tarde.
- Hacen el codigo mas reutilizable y ordenado.
- Ejemplo: configurar descuentos, impuestos o calculos repetitivos
*/

function partialSum(a) {
    return function (b, c) {
        return sum(a, b, c)
    }
}

const sumWith = partialSum(4)
console.log(sumWith(2, 3))
console.log(sumWith(1, 2))


function calcularImpuesto(tasa) {  // otro ejemplo de funcion parcial
    return function(monto) {
        return monto * tasa
    }
}

const iva = calcularImpuesto(0.21) // fijo el 21% de iva
console.log(iva(100))
console.log(iva(200))


console.log("****************");
/************************************************************************************************************ */
// Curry

/*
- El currying es una tecnica donde una funcion recibe un argumento a la vez y devuelve otra funcion 
hasta recibir todos los argumentos necesarios.

- Se usa para reutilizar codigo y hacer funciones mas flexibles
- Aplicar configuraciones predefinidas
- Ejemplos comunes: configurar multiplicadores, impuestos , validaciones

- Podemos hacer la invocacion por separado de cada una de ellas 
- El curry sirve para que tengamos todas las funciones que nos sirven anidadas y que a cada una le podamos ir haciendo 
esa descomposicion por un lado y la manera de empaquetarlo como nosotros querramos.

*/

function currySum(a){
    return function (b) {
        return function (c) {
            return sum (a , b, c) // llamamos a la funcion que suma de manera automatica
        }
    }
}

const sumAB = currySum(1)(2)
console.log(sumAB)// esto da funcion anonima porque falta un parametro

console.log(sumAB(3)) // salida 6


console.log("****************");
/************************************************************************************************************ */
// Callbacks

/*
- Es una funcion que se pasa como argumento a otra funcion y se ejecuta despues de que la primera funcion
termine su trabajo.

- Sirven para:
    1. Ejecutar codigo despues de una accion
    2. Evitar bloqueos cuando hay procesos que tardan
    3. Manejar funciones asincronicas (como setTimeout, fetch)

*/

function proccesData(data, callback) {
     const result = sum(...data) // (2) Se ejecuta primero la suma y se guarda en result
     callback(result) // (3) Luego, se ejecuta la función callback con el resultado
}

function proccesResult(result) { // (4) Finalmente, imprime el resultado en consola
    console.log(result)
}


proccesData([1, 2, 3], proccesResult) // (1) Se llama a proccesData , desempaco con Spread (...) , Llama a "proccesData" con un array y la función callback