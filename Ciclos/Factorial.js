function factorialrecur(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorialrecur(n - 1);
    }
}

console.log(factorialrecur(1));
console.log(factorialrecur(2));
console.log(factorialrecur(3));
console.log(factorialrecur(4));
console.log(factorialrecur(5));
console.log(factorialrecur(6));
console.log(factorialrecur(7));
console.log(factorialrecur(8));
console.log(factorialrecur(9));
console.log(factorialrecur(10));


