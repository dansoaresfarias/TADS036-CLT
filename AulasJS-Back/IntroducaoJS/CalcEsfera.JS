// let joao = "João Deodato";
// joao = joao.replace('D', 'M')
// joao = joao.replace('d', 'm');
// console.log(joao);

//  Ve = 4. p. r³/3
//  Ae = 4 . p . r²
const prompt = require('prompt-sync')();

let areaEsf = function (raio) {
    let area = 4 * Math.PI * raio ** 2;
    return area;
}

function volumeEsf(raio) {
    return (4 / 3) * Math.PI * raio ** 3;
}

let repetir;

do {
    console.clear();
    console.log(".:: Programa para Calcular o Volume e a Área da Esfera ::.");
    let raio = parseFloat(prompt("Informe o raio da esfera: "));
    console.log(`A Área da Esfera é ${Math.round(areaEsf(raio), 2)}, 
        o Volume da Esfera é ${Math.round(volumeEsf(raio), 2)}.`);
    repetir = prompt("Deseja repetir o programa? (Sim | Não): ").toLowerCase();
} while (repetir == "sim");