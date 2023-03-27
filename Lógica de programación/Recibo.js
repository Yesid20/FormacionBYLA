var a = parseInt(prompt('Ingrese el valor del gasto electrico en Kwxh: '));
if(a <= 1000){
    console.log('La tarifa es de ' + (a*1.2));
}if (a > 1000 && a<=1850){
    console.log('La tarifa es de ' + (a*1));
}else if (a > 1850){
    console.log('La tarifa es de ' + (a*0.9));
}else{
    console.log('Verifique la cantidad ingresada');
}