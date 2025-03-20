/* Una funcion es un bloque de codigo utilizado para realizar una tarea especifica, 
con las funciones se escribe codigo limpio, codigo que se sea capaz de reutilizar, de modularizar
de que seamos capaces de leer de una forma simple*/

// Funciones simples

// estructura por defecto de una funcion, function -> nombre -> parentesis -> llaves
function myFunc() {
    console.log("Hola funcion") // en este caso la tarea es imprimir por consola "Hola funcion"
}

myFunc() // invoco a la funcion

console.log("****************")

for (let i = 0; i <5; i ++) { // llamo a la funcion 5 veces
    myFunc()
}

console.log("****************")

// Funciones con parametros

function myFuncWithParams(name) { // quiero que le pases una variable que se llame name
    console.log(`Hola, ${name}`)
}

myFuncWithParams("Stefani") // imprime el valor del parametro que le pasemos
myFuncWithParams("Stef")


console.log("****************")

// Funciones anonimas
// son funciones que no tienen un nombre definido
// las funciones anonimas las tenemos que asignar a una variable o una cosntante, sino no tengo manera de poder invocarla
// les damos la capacidad de poder reservala en una constante

const myFunc2 = function(name) {
    console.log(`Hola, ${name}`)
}

myFunc2("Stefani") 


console.log("****************")

// Arrow functions
// es una forma mas sencilla de escribir funciones 
// se puede usar cuando queremos una sola linea
// debemos asignarlas a una variable o constante

const myFunc3 = (name) => { 
    console.log(`Hola, ${name}`)
}
myFunc3("Stefani") // las invocamos exactamente igual


const myFunc4 = (name) => console.log(`Hola, ${name}`)
myFunc4("Stefani") // las invocamos exactamente igual

console.log("****************")

// Parametros

function sum(a,b) {
    console.log(a + b)
}
sum(10,5)
sum(5) // imprime NaN porque ha intentado sumar 5 a nada 

function defaultSum(a = 0, b = 0) {
    console.log(a+b)
}
defaultSum() // si no le paso parametros, imprime 0 porque son los valores que le di por defecto
defaultSum(5) // si le paso un solo parametrom imprime ese 
defaultSum(5,10)
defaultSum(b = 5)

console.log("****************")

// Retorno de valores

function mult(a,b) {
  return a * b // lo que pase por return es lo que va a acabar devolviendo a quien llame a la funcion
}

let result = mult(5,10)
console.log(result) // devuelve el resultado de 5 x 10 y despues he decidido imprimirlo

console.log("****************")

// Funcion anidada

function extern() {
    console.log("Funcion externa")
    function intern () {
        console.log("Funcion interna")
    }
    intern() // luego de llamar a externa e imprimir, se sigue ejecutando e imprime interna
}

extern()
// intern() Error: fuera de scope

console.log("****************")

// Funciones de orden superior
// Permite escribir código más flexible y reutilizable.
// Esta función recibe otra función como argumento y la ejecuta con un parámetro específico.

function applyFunc(func, param) { // func: una función que se pasa como argumento, param: un valor que se le pasará a la función func.
    func(param) // Llama a la función func, pasándole el argumento param. 
}
applyFunc(myFunc4, "Funcion de orden superior") // Esto significa que cualquier función que pasemos como func se ejecutará con el valor de param.

// imprime la funcion myFunc4 + "Funcion de orden superior"

console.log("****************")

// forEach
// es una funcion que nos sirve para ejecutar bucles asociados a elementos iterables
// metodo de arrays, usado para recorrer cada elemento (se usa solo con arrays)
// no se puede usar break ni continue (no se puede interrumpir)


// RECORRIENDO ARRAY CON forEach

let myArray = ["Stefani", "Quiolla", "Stef" ,"36", true]

myArray.forEach(function (value) { // da la capacidad de iterar sobre un array
    console.log(value)
})

myArray.forEach((value) => console.log(value)) //manera mas corta

console.log("****************")

// RECORRIENDO SET CON forEach

// Explicacion de la funcion
// 1. creo un set con varios valores
// 2. recorro el set con un forEach 

mySet = new Set(["Stefani", "Quiolla", "Stef" ,"36", true, "stefiquio@gmail.com"]) 

mySet.forEach(function (value) {
    console.log(value)
})

mySet.forEach((value) => console.log(value))

console.log("****************")

// RECORRIENDO MAP CON forEach

myMap = new Map([ 
    ["name", "Stefani"],
    ["email", "stefiquio@gmail.com"],
    ["age", 36]
])

myMap.forEach(function(value){
    console.log(value)
})

myMap.forEach((value) => console.log(value))