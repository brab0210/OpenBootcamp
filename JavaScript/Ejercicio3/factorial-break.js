let numFactorial = 1;
let num = 10;

while (true) {
  numFactorial *= num;
  num--;

  if (num == 1) break;
}

console.log(numFactorial);
