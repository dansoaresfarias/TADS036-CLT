const prompt = require('prompt-sync')();
let repetir;
do {
    console.clear();
    let base, exp, result = 1;

    base = Number(prompt("Informe a base da exponenciação: "));
    exp = parseInt(prompt("Informe a expoente da exponenciação: "));
    for (let i = 0; i < exp; i++) {
        result *= base;
    }

    console.log(`Resultado da exponenciação, ${base}^${exp} = ${result}`);
    repetir = prompt("Deseja repetir o programa (sim | não?): ").toLowerCase();
} while(repetir == "sim");