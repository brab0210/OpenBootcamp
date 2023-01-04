import { suma, multiplica } from "./controller.js";
import chalk from "chalk";

let sum = suma(1,2)
let mul = multiplica(4,5)

console.log(chalk.blue(`La suma es: ${sum}`)); 
console.log(chalk.blue(`La multiplicación es: ${mul}`)); 