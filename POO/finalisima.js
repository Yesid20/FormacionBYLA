let a = parseInt(prompt("Ingrese el valor 1: "))
let b = parseInt(prompt("Ingrese el valor 2: "))

class calculadora{
    valorone;
    valortwo;
    constructor(valorone, valortwo){
        this.valorone = valorone;
        this.valortwo = valortwo;
    }
    Suma (){
        return ("El resultado de la suma es "+ (this.valorone+this.valortwo));
    }
    Resta (){
        return ("El resultado de la resta es "+ (this.valorone-this.valortwo));
    }
    Multiplicación (){
        return ("El resultado de la multiplicación es "+ (this.valorone*this.valortwo));
    }
    División (){
        return ("El resultado de la division es "+ ((this.valorone+this.valortwo)/2) );
    }
}

const classPerson = new calculadora(a,b); 
console.log(classPerson.Suma());

const classPerson2 = new calculadora(a,b); 
console.log(classPerson.Resta());

const classPerson3 = new calculadora(a,b); 
console.log(classPerson.Multiplicación());

const classPerson4 = new calculadora(a,b); 
console.log(classPerson.División());