let number = parseInt(prompt("Digite un número: "));

function reverseNumber(n) {
  const convertAndReverse = n.toString().split("").reverse().join("");
  console.log(Number(convertAndReverse));
}

reverseNumber(number); // esto retorna 987654321 
