let movie1 = parseInt(prompt("Precio pelicula uno: "));
let movie2 = parseInt(prompt("Precio pelicula dos: "));
let movie3 = parseInt(prompt("Precio pelicula tres: "));
if(movie1 >movie2 && movie1 >movie3){
    console.log("Pagaras la cantidad de: "+ (movie2 + movie3));
}else if(movie2 > movie1 && movie2 > movie3){
    console.log("Pagaras la cantidad de: "+ (movie1 + movie3));
}else{
    console.log("Pagaras la cantidad de: "+ (movie1 + movie2));
}