const prompt = require('prompt-sync')();
let base, exp, result = 1;

base = Number(prompt("Informe a base da exponenciação: "));
exp = parseInt(prompt("Informe a expoente da exponenciação: "));
// 2^5 = 2 * 2 * 2 * 2 * 2
// i = 0 -> 1 -> 2 -> 3 -> 4 -> 5
// result = 1 -> 2 -> 4 -> 8 -> 16 -> 32
for(let i = 0 ; i < exp ; i++){
    result *= base;
}

console.log(` O resultado da exponenciação é ${base}^${exp} = ${result}`);