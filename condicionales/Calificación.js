let nota = parseInt(prompt("Ingrese su calificación: "));
switch(nota){
    case 0: case 1: case 2: case 3: case 4: case 5: case 6:
        console.log("Su nota es insuficiente"+ " "+ nota);
        break;
    case 7: case 8:
        console.log("Su nota es suficiente"+ " " + nota);
        break;
    case 9:
        console.log("Su nota está bien"+ " " + nota);
        break;
    case 10:
        console.log("Su nota es excelente"+ " "+ nota);
        break;
    default:
        console.log("Su nota está por fuera del sistema de calificación");
}