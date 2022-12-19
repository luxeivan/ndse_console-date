import readline from "readline";

const max = 100;
const num = Math.floor(Math.random() * max);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log(`Загаданное число в диапазоне от 0 до ${max}`);
rl.on("line", (answer) => {
  if (num < Number(answer)) {
    rl.write(`Меньше\n`);
  } else if (num > Number(answer)) {
    rl.write(`Больше\n`);
  } else if (num === +answer) {
    rl.write(`Вы угадали число ${answer}\n`);
    process.exit(1);
  }
});
