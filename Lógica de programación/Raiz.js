var raiz = parseInt(prompt("Ingrese un número: "));
var operacion = Math.sqrt(raiz); //Se utiliza la función Math.sqrt el cual nos muestra la raiz. 
if (operacion >= 0){
    console.log("La raiz cuadrada es: " + operacion);
}else{
    console.log("La raiz imaginaria");
}