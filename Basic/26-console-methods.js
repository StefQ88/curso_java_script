/* El objeto console en JS proporciona metodos para mostrar mensajes en consola del
navegador o en la terminal. Es util para depuracion, monitoreo y registro de eventos de codigo.

Muestra mensajes de una manera mas cuidada

Podemos mostrar la informacion, pero tambien el seguimiento de errores, de rendimiento, 
mostrar datos en diferentes formatos.
*/

// Console -> variantes

// log
console.log("Hola, JavaScript") // metodo mas utilizado, deberia mostrar la informacion mas general por consola

// error
console.error("Este es un mensaje de error.");


console.warn("Este es un mensaje de advertencia.")
console.info("Este es un mensaje de informacion adicional")

// table

let data = [
    {name: "Stefani", age: 36},
    {name: "Lucia", age: 10},

]

console.table(data)

//group()

console.group("Usuario")
console.log("Nombre: Stefani")
console.log("Edad: 36")
console.groupEnd() // el grupo se cierra en edad 

console.log("Hola")

// time -> funciona simpre y cuando el nombre que funciona como identificador fucniona
console.time("tiempo de ejecucion 1")
for (let i = 0; i < 10000; i ++) {

}

console.time("tiempo de ejecucion 2")
for (let i = 0; i < 10000; i ++) {

}

console.timeEnd("tiempo de ejecucion 1") // le doy el texto que le puse al console.time
console.timeEnd("tiempo de ejecucion 2")

// assert
let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad")

// count -> cuanta la cantidad de veces que se ha llamado con una etiqueta especifica

console.count("Click")
console.count("Click")


console.countReset("Click")
console.count("Click")

// trace -> muestra el seguimiento de la pila de ejecucion
// la manera de rastrear la ejecucion del codigo

function funcA() {
    funcB()
}

function funcB() {
    console.trace("seguimiento de la ejecucion")
}

funcA()

// clear()
// limpia la consola
// console.clear()