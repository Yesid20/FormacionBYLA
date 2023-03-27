let cadene = prompt("Ingrese su correo electrónico: ")
let indi = cadene.indexOf("@");
let traiga = cadene.substring(0,indi);
console.log("Su nuevo correo es "+ traiga + "@ceu.es.");
