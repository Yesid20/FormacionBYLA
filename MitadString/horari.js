let fecha = prompt("Ingrese la fecha: ")
const newDate = new Date(fecha).toLocaleDateString();
const [day, mes, year] = newDate.split('/')
// const day = dateArray[0]; 
// const mes = dateArray[1];
// const year = dateArray[2]; 
console.log("Su dia de nacimiento es "+ day + "\n Su mes de nacimiento es: "+ mes + "\n Su año de nacimiento es: " + year);
