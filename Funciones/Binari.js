  function convertToBinary1(valor){
    let num = valor;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }
    console.log(binary);
}

window.onload = function () {
    console.log(convertToBinary1(10));
    console.log(convertToBinary1(6));
  }