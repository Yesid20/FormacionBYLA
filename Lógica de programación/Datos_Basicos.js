var a = (prompt("Ingrese su nombre: "));
var b = parseInt(prompt("Ingrese su edad: "));
var c = (prompt("Ingrese su sexo: ")); 
if(c === "Masculino" && b>= 18 ){
    console.log("Su nombre es " + a);
}else{
    console.log("No cumple con las condiciones");
}