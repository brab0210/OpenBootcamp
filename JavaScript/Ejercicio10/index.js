import { suma, multiplica } from "./controller.js";
import chalk from "chalk";

let sum = suma(1,2)
let sum2 = suma(4,5)

console.log(chalk.green(`La multiplicación es: ${multiplica(sum,sum2)}`)); 