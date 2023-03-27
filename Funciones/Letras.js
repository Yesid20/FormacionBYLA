function menu(deletreo){
    let a = parseInt(prompt("Ingrese un valor del 1 al 10 : "));
        switch (a){
            case 1:
                console.log("uno");
                break;
            case 2:
                console.log("dos");
                break;
            case 3:
                console.log("tres");
                break;
            case 4:
                console.log("cuatro");
                break;
            case 5:
                    console.log("cinco");
                    break;
            case 6:
                    console.log("seis");
                    break;
            case 7:
                    console.log("siete");
                    break;
            case 8:
                    console.log("ocho");
                    break;
            case 9:
                    console.log("nueve");
                    break;
            case 10:
                    console.log("diez");
                    break;
            default:
                console.log(a + " el numero está por encima del rango permitido");
        }
        return deletreo;
    }
    menu();
    