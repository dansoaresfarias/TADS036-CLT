const prompt = require('prompt-sync')();

function fatorial(n) {
    // 5! = 5 * 4 * 3 * 2 * 1
    // 4! = 4 * 3 * 2 * 1
    // 5! = 5 * (4!)
    // n! = n * (n-1)!
    if(n == 1){
        return 1;
    }else {
        return n * fatorial(n-1);
    }
}

let repetir;

do {
    console.clear();
    console.log(".:: Programa para Calcular o fatorial de um número ::.");
    let n;
    do{
        n = parseInt(prompt("Informe um inteiro maior que 0: "));
        if(n<1){
            console.log(`Valor ${n} invalido!`);
        }
    } while (n<1);
    console.log(`${n}! = ${fatorial(n)}`);
    repetir = prompt("Deseja repetir o programa? (Sim | Não): ").toLowerCase();
} while (repetir == "sim");