
  function menu(resultado){
 let d = alert("Escoga la opcion que quiera realizar:")
 let c = prompt("a.Suma b.Resta c.multiplicación d.division" );
let a = parseInt(prompt("Ingrese un primer valor: "));
let b = parseInt(prompt("Ingrese un segundo valor: "));
    switch (c){
        case "a":
            console.log(a+b);
            break;
        case "b":
            console.log(a-b);
            break;
        case "c":
            console.log(a*b);
            break;
        case "d":
            console.log(a/b);
            break;
        default:
            console.log(c + " esta operación no esta disponible");
    }
    return resultado;
}
 menu();
