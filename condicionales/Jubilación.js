let pensión = parseInt(prompt("Ingrese su edad: "));
let sexo = prompt("Ingrese su sexo: ");
if (sexo === "Masculino" && pensión >=60  || sexo === "Femenino" && pensión >=54){
    console.log("El usuario ya se puede pensionar")
}else{
    console.log("El usuario no se pensiona aun debe trabajar ")
}
