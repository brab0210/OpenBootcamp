function fibo(num) {
  let arrayNumber = [0, 1];

  for (let i = 2; i < num; i++) {
    arrayNumber[i] = arrayNumber[i - 1] + arrayNumber[i - 2];
  }
  return arrayNumber;
}

console.log(fibo(4));
