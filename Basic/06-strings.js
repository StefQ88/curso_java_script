// Strings


// Concatenacion 
let myName = "Stefani"
let greeting = "Hola, " + myName + "!" //cadena de texto saludo
console.log(greeting)
console.log(typeof greeting)

// Longitud 
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[13])
console.log(greeting[14]) // 14 es el largo no el indice

// Metodos comunes
console.log(greeting.toUpperCase()) //transforma la cadena de texto a mayuscula
console.log(greeting.toLowerCase()) // transforma la cadena de texto a minuscula
console.log(greeting.indexOf("Hola")) // el indice donde ha encontrado la palabra hola, comenzando en la h
console.log(greeting.indexOf("Stefani"))
console.log(greeting.indexOf("Stefi")) // -1 significa que no ha encontrado, no hay ninguna palabra con este elemento
console.log(greeting.includes("Hola")) // comprueba si en la cadena de texto incluye la palabra
console.log(greeting.includes("Stefani"))
console.log(greeting.includes("Stefi")) // imprime false porque no incluye la palabra
console.log(greeting.slice(0,10)) // retorna un pedazo entre el indice 0 y el indice 10, se queda con los elementos
console.log(greeting.replace("Stefani", "Stefi")) // remplaza las palabras, si encuentra Stefani remplaza por Stefi

console.log("****************")

// Template literals (plantillas literales)
// Podemos crear un texto en varias lineas 
let message = `Hola este es mi 
curso de JavaScript`
console.log(message)

// Interpolar una variable
console.log(`Hola, ${myName} !`) // comillas simples invertidas 
