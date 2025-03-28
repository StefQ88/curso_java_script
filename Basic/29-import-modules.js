

// Importacion de modulos
// nombre de la operacion que queremos importar y el from, desde donde 

import { add, PI, name, Circle } from "./28-export-modules.js" 
// importecion que no es por defecto, si la queremos importar tenemos que hacer referencia al nombre de la propiedad 
// o nombre de la funcion

import defaultImport from "./28-export-modules.js" 
// importacion por defecto, refiere a lo que va a importar directamente

//funciones
console.log(add(5,10))

// Propiedades

console.log(PI)

// variables

console.log(name)

// clases
let circle = new Circle(10)
console.log(circle.radius)
console.log(circle.area())
console.log(circle.area().toFixed(2))

console.log(circle.perimeter())
console.log(circle.perimeter().toFixed(2))

// importacion por defecto
console.log(defaultImport(5, 10))

// let myClass = new defaultImport()
// myClass.func()

// Proyecto modular
// importamos desde otros ficheros ubicados en otras carpetas
// import { MyClass } from "./directory/files.js" 


// Modulos externos

const os = require("os")
