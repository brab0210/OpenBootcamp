function boolFunction() {
  return true;
}

let myPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Hola soy una promesa");
  } else {
    reject();
  }
});

setTimeout(() => {
  console.log(myPromise);
}, 5000);

function* generateId() {
  let id = 0;
  while (true) {
    id = id + 2;
    yield id;
  }
}

let gen = generateId();

console.log(gen.next().value);
console.log(gen.next().value);
