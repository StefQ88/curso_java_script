// if, else if, else

// if (si)

let age =37 //declaro la variable para usar en los ejemplos

if (age == 37) {
    // bloque
    console.log("La edad es 37")
}

// else (si no)

if (age == 36) {
    // bloque
    console.log("La edad es 37")
} else {
    console.log("la edad no es 37")
}
console.log("****************")

// else if (si no, si)
if (age == 36) {
    // bloque
    console.log("La edad es 37")
} else if (age < 18) {
    console.log("es menor de edad") // en el else if tenemos que poner otra condicion
} else {
    console.log("la edad no es 37 ni es menor de edad")
}

console.log("****************")

// Operador ternario ->forma rapida de escribir if y else
// Guardamos el resultado en una variable
const massage = age == 37 ? "La edad es 37" : "la edad no es 37" 
console.log(massage)

console.log("****************")

// switch
// alternativa a anidar if else
// se usa para comparar una unica variable con varios valores posibles
// en el caso del dia de la semana todo gira en torno a inspeccionar una unica variable
// switch(day) -> en el parentesis siempre va la variable que queremos analizar
// VENTAJA : inspecionamos en el switch si corresponde algunos de los valores del case


let day = 0
let dayName 

switch(day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Numero de dia incorrecto" // caso por defecto
}

console.log(dayName)



