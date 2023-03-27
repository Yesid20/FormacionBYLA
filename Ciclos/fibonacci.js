let serie = parseInt(prompt("Ingrese un numero para iniciar la serie Fibonacci: "));
let a = 0;
let b =1;
let c = 0;
for (let i = 0; i < serie; i++){
    c = b + a;
    a = b;
    b = c;         
console.log(c);
}
