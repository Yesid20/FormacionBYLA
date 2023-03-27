function convertidor(transformación){
    var a = parseInt(prompt("Ingresas los grados celsius: "));
    var b = prompt("Pasar los grados a Fahrenheit o Kelvin: ");
          switch (b){
               case "Fahrenheit":
              console.log("Los grados fahrenheit son " + ((a * 1.8) + 32));
               break;
               case "Kelvin":
               console.log("Los grados kelvin son " + (a + 273.15));
               break;
            default:
            console.log(b + "Estos grados no son los solicitados")
         }
      return transformación;
   }
   convertidor();
   
