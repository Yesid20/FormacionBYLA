function tabla(conteito){
    let a = parseInt(prompt("Ingrese un número: "));
    for(let i=1; a>=i; a--){
        console.log("Su lista es: "+ (a*i));
    }
    return tabla();
}
