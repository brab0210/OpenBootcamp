let factorialFor = (num) => {
  let numFactorial = 1;
  for (let i = 0; i < num; i++) {
    numFactorial += numFactorial * i;
  }
  return numFactorial;
};

console.log(factorialFor(10));
