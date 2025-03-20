//Desestructuración y propagacion

// Ejemplo donde extraigo valores sin desetructuracion
let myArray = [1, 2, 3, 4] //array

let person = { //objeto
    name: "Stefani",
    age: 36,
    alias: "Stef"
}

let myValue = myArray[1] // accedo al elemento del array
console.log(myValue)

let myName = person.name // accedo a la propiedad de persona
console.log(myName)

console.log("****************")

/********************************* DESESTRUCTURACION ******************************************************** */
// nos permite extraer valores de arrays y de objetos y asignarlos a variables de manera concisa 

// Sintaxis en arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray 
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4) // undefined

console.log("****************")

// Sintaxis de arrays con valores predeterminados, tienen un valor por defecto

// funciona para cuando intentamos extraer mas valores de los que hay en el array
// se utiliza cuando el array tiene menos elementos de lo esperado
// si el array tiene todas esas variables se utilizan los valores
// si el array no tiene todas las variables, se utilizan los valores por defecto

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray 
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9) 

console.log("****************")

// Ignorar elementos en el array
// saltamos elementos del array sin asignarlos a una variable 

// let myArray = [1, 2, 3, 4] -> mi array que esta definido al comienzo del archivo
let [myValue10, , , myValue13] = myArray // creamos con comas pero sin ninguna variable podemos desestructurar igual
console.log(myValue10) // imprime 1
console.log(myValue13) // imprime 4

console.log("****************")

// Sintaxis con objetos
// en un objeto debo desestructurar con su formato, con las llaves {}

let {name, age, alias} = person
console.log(name)
console.log(age)
console.log(alias)

console.log("****************")

// Sintaxis de objetos con valores predeterminados, tienen un valor por defecto
// sirve para extraer propiedades especificas
// asignarles un nombre diferente a las variables
// definir un valor por defecto en caso de que la propiedad no exista 

let {name2, age2, alias2, email = "email@gmail.com"} = person // debo darle otro nombre a las variables
console.log(name2) //no existe
console.log(age2) //no existe
console.log(alias2) //no existe
console.log(email)

console.log("****************")

// sintaxis de objetos con nuevos nombres de variables

let {name: name3, age: age3, alias: alias3} = person
console.log(name3) 
console.log(age3) 
console.log(alias3) 

console.log("****************")

// desestructuracion con objetos anidados
// quiero desestructurar el objeto job

let person3 = {
    name: "Stefani",
    age: 36,
    alias: "Stef",  
    walk: function() { // nombre de la funcion: function(), console.log
        console.log("La persona camina.") // una funcion
    },
    job:{ // aniado objeto 
        name: "Programador",
        exp: 15,
        work: function() {
            console.log(`La persona de ${this.exp} años de experiencia trabaja.`) //this hace referencia a ese objeto
        }
    }
}

let {name: name4, job: {name: jobName}} = person3 // me quedo con el name stefani y el name programador
console.log(name4)
console.log(jobName)

console.log("****************")

/********************************* PROPAGACION ******************************************************** */
// propagacion(...)
// permite expandir un array o objeto a otros array y a otros objetos. 


// let myArray = [1, 2, 3, 4] 
// sintaxis array
let myArray2 = [...myArray] // esto es una especie de copia

let myArray3 = [...myArray, 5, 6] // propagar es seguir anidando elementos 

console.log(myArray2)
console.log(myArray3)

// combinacion de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]
console.log(myArray4)

console.log("****************")

// sintaxis a objetos

let person4 = {...person, email: "stefiquio@gmail.com"} // estamos haciendo una copia del objeto person y aniadendo propiedades
console.log(person4)

// Copia de objetos
let person5 = {...person4}
console.log(person5)