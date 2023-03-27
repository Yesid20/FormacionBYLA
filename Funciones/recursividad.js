let funci = parseInt(prompt("Digite un número: "));
let a = 0;
let b = 1;
let c = 0;
 function fibona (m){
    c = a+b;
    m--;
    if(m <= 0){
        return;
    }
    console.log(c);
    a = b;
    b = c;
    return fibona(m--);
 }

fibona (funci);