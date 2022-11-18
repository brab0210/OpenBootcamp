let factorialWhile = (num) => {
  let numFactorial = 1;
  let i = 0;
  while (i < num) {
    numFactorial += numFactorial * i;
    i++;
  }
  return numFactorial;
};

console.log(factorialWhile(10));
