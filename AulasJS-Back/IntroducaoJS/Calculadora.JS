const prompt = require('prompt-sync')();
let num1, op, num2;

num1 = Number(prompt("Informe o primeiro número: "));
op = prompt("Informe o operador ( + | - | x | / ): ");
num2 = Number(prompt("Informe o segundo número: "));

switch (op) {
    case '+':
        console.log(`Resultado, ${num1} + ${num2} = ${num1 + num2}`);
        break;
    case '-':
        console.log(`Resultado, ${num1} - ${num2} = ${num1 - num2}`);
        break;
    case 'x':
        console.log(`Resultado, ${num1} x ${num2} = ${num1 * num2}`);
        break;
    case '/':
        console.log(`Resultado, ${num1} / ${num2} = ${num1 / num2}`);
        break;
    default:
        console.log(`Operador ${op} invalido!`);
        break;
}