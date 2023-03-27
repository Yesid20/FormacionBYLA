let a = parseInt(prompt("Ingresar un primer número: "));
let c = parseInt(prompt("Ingrese un segundo número: ")); 
let b = a;
for(b>=a; b<=c; b++){
    if(b%2==0){
    console.log("Los numeros pares entre "+ b);
}
}