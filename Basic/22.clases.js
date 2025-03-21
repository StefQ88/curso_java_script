/* Las clases en js son una forma de crear objetos de manera mas prganizada y reutilizable.
permiten propiedades y metodos dentro de una estructura clara.

Las clases sirven para crear plantillas de objetos, definimos las propiedades y los metodos pero no le damos valores, 
los valores se lo damos a posterior en el momento en el que creamos las instancias.

constructor: es una especie de funcion especial, que nos permite definir cual es la estructura de 
propiedades inicial de la persona, 
con el constructor inicializamos los valores de un objeto y this para referirnos a las propiedades del mismo
*/


// representacion de persona ya con una CLASE
class Person {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// Sintaxis para utilizar a Persona

let person = new Person("Stefani", 36, "Stef")
let person2 = new Person("Stefani", 36, "Stef")

console.log(person)
console.log(person2)

console.log(typeof(person)) // el tipo de dato es objeto

console.log("****************")

// Valores por defecto 

class DefaultPerson {

    constructor(name = "Sin nombre", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }
} 

let person3 = new DefaultPerson("Stefani", 36) //le modifico el nombre y la edad al instanciar
console.log(person3)

console.log("****************")

// Acceso a propiedades

console.log(person3.alias) // forma de acceder a la propiedad de la clase persona
console.log(person3["alias"]) // forma de acceder a la propiedad de la clase persona

console.log("****************")

// Modificar valor luego de la instancia

person3.alias = "Stef"
console.log(person3.alias)

console.log("****************")

// Funciones en clases

class PersonWhitMethod {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log("La persona camina.")
    }
}

let person4 = new PersonWhitMethod("Stefani", 36, "Stef")
console.log(person4)
person4.walk()

console.log("****************")

// Propiedades privadas
// NO PODEMOS ACCEDER NI MODIFICARLAS
// A la clase le puedo aniadir en tiempo de ejecucion nuevas propiedades pero no puedo acceder a ellas 
// creo una persona pero no quiero que nadie vea los datos
// para crear una propiedad privada ponemos # y la definimos antes en la clase


class PrivatePerson {

    #bank //defino la propiedad que es privada

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank // digo que es una propiedad privada
    }

    pay() {   // funcion de pasarela de pago
        this.#bank //defino que es una propiedad privada
    }
}

let person5 = new PrivatePerson("Stefani", 36, "Stef", "IBAN875483765")
console.log(person5)

console.log("****************")

// Getters y Setters

// Gett es de lectura no de escritura
// Sett es para modificar valores

// en este caso age y alias se mantienen privados, no puedo leer ni escribir,solo tengo acceso al nombre
// bank puedo modificarlo no leerlo

class GetSetPerson {

    #name 
    #age
    #alias 
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() { // puedo acceder a la propiedad name
        return this.#name
    }

    set bank(newBank) { // puedo modificar los numeros de cuenta del banco
        this.#bank = newBank
    }
}

person6 = new GetSetPerson("Stefani", 36, "Stef")
console.log(person6)
console.log(person6.name)

person6.bank = "new 34789437287" // seteo el numero de cuenta de banco

// Herencia 
// nos sirve para heredar las propiedades y el comportamiento de una clase

class Animal {

    constructor(name) {
        this.name = name // propiedad del constructor
    }

    sound() {
        console.log("El animal emite un sonido generico") //funcion
    }
}


class Dog extends Animal {

    sound() { //sobre escritura de metodos
        console.log("Guau!") // el perro ahora va a tener este sonido
    }

    run() {
        console.log("El perro corre") // el perro va a heredar el comportamiento generico de animal
    }
}

class Fish extends Animal {

    constructor(name, size) {
        super(name) // super hace una llamada a su super clase y recibe un nombre porque esta definido en la clase padre
        this.size = size
    }

    swim() {
        console.log("El pez nada")
    }
}

let myDog = new Dog("StefDog") // necesita un nombre porque en la clase animal tiene un nombre
myDog.run() //funcion de la clase dog
myDog.sound() // funcion de la clase animal

let myFish = new Fish("StefFish", 10)
myFish.swim()
myFish.sound()


console.log(myFish)

console.log("****************")



// Metodos estaticos 
// Son funciones dentro de una clase que no necesitan crear una instancia (objeto) para ser llamados.
// Se definen con la palabra static.
// No pueden acceder a propiedades de instancia (this), ya que pertenecen a la clase en si, no a un objeto especifico.

// Diferencia entre metodo de instancia y estatico
// Metodo de instancia requiere crear un objeto
// Metodo estatico se usa sin crear un objeto

// Sirve para llamar a las funciones en la clase misma, no en las instancias 
// MathOperations es una instancia unica, que sirve para realizar operaciones


class MathOperations {

    static sum(a,b) { //modificador estatic
        return a + b
    }
}

console.log(MathOperations.sum(5,10)) // accedimos a la funcion sin instanciar


/*********************************************IMPORTANTE!!*********************************************************** */

/*
Cuando usar una clase y cuando usar un objeto??
Los objetos son unicos, con las clases estamos definiendo esa plantilla, esa estructura
Cuando necesitamos crear multiples objetos con diferentes comportamientos, y cuando tenemos que
reutilizar codigo es cuando creamos la clase.
Tambien nos sirve para estructurar nuestro codigo, para organizarlo, para hacerlo mas mantenible.

Segun la naturaleza de como queramos modelar nuestros datos es lo que vamos a elegir si crear clases u objetos para 
resolver el problema que se nos presenta.
*/