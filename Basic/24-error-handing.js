/* Una excepcion es un evento anomalo, es un error que ocurre cuando se ejecuta el codigo.
Si no se maneja correctamente, el programa se detiene. 

*/

// Excepcion

// Produce una excepcion
let myObject 

// Captura de errores

// try-catch
// al usarlo nuestro programa no se detiene, no se rompe
// nos permite ejecutar codigo que en algun caso podriamos manejar el error.

try {
    // codigo que intenta ejecutar
    console.log(myObject.email) // no esta definida la propiedad email
    console.log("Finaliza la ejecucion sin errores") // esta linea no se va a imprimir porque hay un error
} catch {
    // Bloque del error
    console.log("Se ha producido un error")
}

console.log("****************")

// Como capturo el error??
// Podemos capturar el error si el catch se ejecuta con argumento

try {
    console.log(myObject.email) 
} catch (error) { //argumento
    console.log("Se ha producido un error", error.message) // usar la propiedad error.message para saber que error es
}

console.log("****************")

// finally 
// Maneja el error si se produce 
// el bloque finally se va a ejecutar siempre porque hay una operacion concreta que la quiero ejecutar
// si o si aunque aparezca error, ejemplo limpiar datos

// siempre va catch sino el programa no funciona aunque este finally


try {
    console.log(myObject) 
} catch (error) { //argumento
    console.log("Se ha producido un error", error.message) // usar la propiedad error.message para saber que error es
} finally {
    console.log("Este codigo se ejecuta siempre")
}

console.log("****************")



// throw 

/* throw se usa para lanzar errores de forma manual. Es util cuando queremos detener la ejecucion del codigo 
si ocurre un problema y manejarlo con un try catch.
throw new Error("Se ha producido un error")
en el momento que lanzamos un error, empezamos a capturarlos

Error -> Crea un objeto de error

try ... catch -> Captura errores y evita que el programa se detenga

error.message -> Muestra solo el mensaje de error

*/

// Lanzamiento de errores 

function sumIsInteger(a,b) {

    if (typeof a !== "number" || typeof b !== "number") { //"number" cadena de texto que representa tipo de dano numerico, typeof devuelve el tipo de dato
        throw new TypeError("Esta operacion solo acepta numeros") // Lanzamos TypeError si no son números
    }

    if (!Number.isInteger(a) || !Number.isInteger(b)) { // verifica si 'a' y 'b' son enteros usando Number.isInteger()
        throw new Error("Esta operacion solo suma numeros enteros") // Lanzamos Error si no son enteros
    }
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError ("Se esta intentando sumar cero", a, b)
    }

    return a + b // si ambos valores son enteros devuelve la suma
}

// captura de errores 

try {
    console.log(sumIsInteger(-55,10)) //validos
    console.log(sumIsInteger(-5,-10))
    console.log(sumIsInteger(5,10))

    console.log(sumIsInteger(5,"10")) //no validos
    console.log(sumIsInteger("5",10))
    console.log(sumIsInteger("5","10"))

} catch (error ){ // el catch se va a ejecutar en el momento de que se produzca el primer error
    console.log("Se ha producido un error:",error.message)
}

console.log("****************")

// captura de errores -> por tipo

// Capturar varios tipos de errores -> ejemplo con TypeError

// el Error es una clase de JS que se esta designando a la instancia
// cuando usamos throw new Error("Mensaje de error"), estamos creando una instancia de la clase error.

// TypeError 
// Operacion con tipo de dato incorrecto


try {
    console.log(sumIsInteger(5.5,10))
    // console.log(sumIsInteger(5,"10")) 

} catch (error ){ 
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:",error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:",error.message)
    }
}

console.log("****************")

// captura de errores -> excepcion personalizada

// Crear excepciones personalizadas
// sigo el ejemplo anterior pero creando un error personalizado

class SumZeroIntegerError extends Error {
    constructor(message,a,b) {
        super(message) 
        this.a = a // me almaceno mis propiedades
        this.b = b
    }

    printNumbers() {
        console.log(this.a, " + " , this.b) // con this accedemos al contexto
    }
}

try {
    console.log(sumIsInteger(0,10))
} catch (error ){ 
    console.log("Se ha producido un error personalizado:",error.message) // pongo elerror generico
    error.printNumbers()
}