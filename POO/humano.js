class persona {
    nombre;
    edad;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Mayor() {
        if (this.edad > 55) {
            return this.nombre + " es mayor de edad";
        }
        return this.nombre + " es menor de edad";

    }
}


const classPerson = new persona('raul', 67)
console.log(classPerson.Mayor());

const classPerson1 = new persona('raulcho', 17)
console.log(classPerson1.Mayor());

const classPerson2 = new persona('raulito', 37)
console.log(classPerson2.Mayor()); 