let a = prompt("Ingrese un número: ")
const capicua = (a)=>{
    a = a.toString ()
    return a.split("").reverse().join("") == a;
}
console.log(capicua(a));
