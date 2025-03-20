/* Es un dato que no es primitivo, todo lo que no es un dato primitivo es un objeto.
En js un objeto es una COLECCION DE PROPIEDADES, a nivel estructural son clave y valor, un objeto puede tener dentro
tipo de datos primitivos, y puede tener dentro otros objetos.

Un mapa es solo clave valor, un objeto puede contener propiedades, otros objetos, funciones 

La instancia del objeto es unica, aunque dos objetos tengan las mismas propiedades y valores, siguen siendo objetos 
distintos en la memoria

Con los objetos estamos modelando una entidad, significa que estamos representando algo del mundo real en nuestro codigo
como autos, personas, productos con datos organizados. 
*/


// Objects

//Sintaxis
// primero siempre se crea una variable, se abre llaves, clave : valor -> entidad

let person = {
    name: "Stefani",
    age: 36,
    alias: "Stef",    
}

// Acceso a las propiedades

// Notacion punto (objeto. accedo a las propiedades) -> ESTA ES LA MANERA CORRECTA
console.log(person.name)

// Notacion de corchetes
console.log(person["name"]) // puedo acceder a la propiedad name a traves de corchetes

// Modificacion de propiedades
person.name = "Stefani Dahiana" // para modificar simplemente la igualo a otro valor
console.log(person.name)


console.log(typeof(person.age)) // imprime tipo de dato number
person.age = "36" // le cambio el tipo de dato
console.log(typeof(person.age)) // imprime tipo de dato string

// Eliminacion de propiedades
delete person.age
console.log(person) // elimina la propiedad

// Nueva propiedad
person.email = "stefiquio@gmail.com"
console.log(person)

person["age"] = 37
console.log(person)

console.log("****************")

// Metodos (funciones) -> creo nueva persona para demostrarlo

let person2 = {
    name: "Stefani",
    age: 36,
    alias: "Stef",  
    walk: function() { // nombre de la funcion: function(), console.log
        console.log("La persona camina.") // una funcion
    }
}

person2.walk() // llamo a  la funcion del objeto persona 

console.log("****************")

// Anidacion de objetos -> creo nueva persona para demostrarlo

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

console.log(person3)

console.log("****************")

// Para acceder al objeto
console.log(person3)
console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name) // accedo al nombre del trabajo dentro del objeto job dentro de persona

person3.job.work() // acceso a persona, al objeto job al metodo work

console.log("****************")

// Igualdad de objects

console.log(person)

let person4 = {
    name: "Stefani Dahiana",
    alias: "Stef",
    email: "stefiquio@gmail.com",
    age: 37
}

console.log(person)
console.log(person4)

console.log(person == person4) // false, los objetos se guardan en memoria por referencia, no por espacio ni valor
console.log(person === person4) // false, los objetos se guardan en memoria por referencia, no por espacio ni valor

console.log(person.name == person4.name) // estro es true compara valores, para comparar debo acceder a su propiedad
console.log(person.alias === person4.alias) // esto es true compara valores y tipo, para comparar debo acceder a su propiedad 

console.log("****************")

// Iteracion
// cuando iteramos un objeto accedemos a las claves


// for in
for(let key in person4) {
    console.log(key +  ": " + person4[key]) // tenemos que acceder a las claves
}

// Buenas practicas
// hacer referencia a this en los metodos

console.log("****************")

// Funciones como objetos


// DEBERIA SER UNA CLASE
// creo la funcion como un contructor, es util cuando quiero crear un objeto de multiples intancias

function Person(name, age) { // los puntos refieren a que una funcion constructora debe ser convertida en una clase
    this.name = name // con el this hago referencia a la funcion mismo
    this.age = age // a una propiedad age le doy el valor de age
}

let person5 = new Person("Stefani", 36) // puedo crear una nueva instancia de persona
console.log(person5)
console.log(person5.name)

console.log(typeof(person5))
console.log(typeof(person4))