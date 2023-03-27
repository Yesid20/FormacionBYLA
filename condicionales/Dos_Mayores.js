let number = parseInt(prompt("Ingrese un número: "));
let number2 = parseInt(prompt("Ingrese segundo número: "));
let number3 = parseInt(prompt("Ingrese tercer número: "));
if(number>number2 && number>number3){
    console.log("El primer número mayor es: "+ number);
}else if(number2>number && number>number3){
        console.log("El segundo número es el mayor: "+ number2);
}else if(number3>number && number3>number2){
            console.log("El tercer número es el mayor: "+ number3);
}
if(number>number2 && number<number3 || number<number2 && number>number3){
    console.log("El número medio es: "+ number);
}else if(number2>number && number2<number3 || number2<number && number2>number3){
         console.log("El segundo número es el medio: "+ number2);
}else if(number3>number && number3<number2 || number3<number && number3>number2){
            console.log("El tercer número es el medio: "+ number3);
}
if(number<number2 && number<number3){
    console.log("El primer número es el menor: "+ number);
}else if(number2<number && number2<number3){
         console.log("El segundo número es el menor: "+ number2);
}else if(number3<number && number3<number2){
            console.log("El tercer número es el menor: "+ number3);
}
