/* Un modulo es una forma de dividir nuestro programa en piezas
que podemos reutilizar 

Nos permite organizar nuestro codigo en archivos separados

Podemos exportar clases, funciones, etc para utilizarlas desde otros ficheros, 
Permite mantener el codigo organizado y encapsulado.

Un modulo es un fichero
*/


//Exportacion de modulos
 export function add(a, b) {
    return a + b
 }

 console.log(add(10,5)) // llamo a la funcion, paso los valores y la imprimo

 // propiedades

export const PI = 3.1416

// variables
export let name = "Stefani"

// Clases
export class Circle {

    constructor(radius) {
        this.radius = radius
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }
    perimeter() {
        return 2 * Math.PI * Math.pow(this.radius,2)
    }
}

// exportacion por defecto
// sirve para exportar una sola funcion, un solo objeto
// se utiliza cuando quiero exportar una sola cosa del fichero

export default function substract(a, b) {
    return a - b
}

// export default class MyClass {
//     func() {
//         console.log("")
//     }
// }

