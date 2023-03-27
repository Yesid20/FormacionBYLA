let number  = parseInt(prompt("Ingrese un primer número: "));
let number2 = parseInt(prompt("Ingrese un segundo número: "));
let number3 = parseInt(prompt("Ingrese un tercer número: "));
  
  function mayor(number, number2, number3){
    if(number>number2 && number>number3){
        console.log("El número mayor es "+ number)
    }else if(number2>number && number2>number3){
        console.log("El número mayor es "+ number2)
   }else if(number3>number && number3>number2){
        console.log("El número mayor es "+ number3)
  }
  return mayor;
}
  mayor (number, number2, number3);

    function medio(number, number2, number3){
        if(number>number2 && number<number3 || number<number2 && number>number3){
            console.log("El número medio es: "+ number);
        }else if(number2>number && number2<number3 || number2<number && number2>number3){
                 console.log("El número del medio es: "+ number2);
        }else if(number3>number && number3<number2 || number3<number && number3>number2){
                    console.log("El número medio es: "+ number3);
        }
        return medio;
    }
  medio(number, number2, number3); 

  function mínimo(number, number2, number3){
    if(number<number2 && number<number3){
        console.log("El número mínimo es "+ number)
    }else if(number2<number && number2<number3){
        console.log("El número mínimo es "+ number2)
   }else if(number3<number && number3<number2){
        console.log("El número mínimo es "+ number3)
  }
  return mínimo;
}
  mínimo(number, number2, number3);