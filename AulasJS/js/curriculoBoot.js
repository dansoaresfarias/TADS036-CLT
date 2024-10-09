function mudarNome() {
    document.title = "Thayza Vitória!";

    var formulario = document.getElementById("formulario");
    formulario.innerHTML = "<h5>Formulário de contato com Thayza!</h5>";

    let paragrafoFree = document.createElement("p");
    paragrafoFree.innerHTML = "Fale comigo que eu sou melhor do que Danilo. Entre em contato: thayza.vitoria@gmail.com";
    formulario.appendChild(paragrafoFree);

    let foto = document.getElementById("foto");
    foto.setAttribute("src", "imgs/thay.min.png");

    let nomeFuncao = document.getElementById("nomeFuncao");
    let funcao = document.getElementById("funcao");
    nomeFuncao.removeChild(funcao);

    let thay = document.getElementById("danilo");
    thay.innerHTML = "Thayza Silva";
}

function exponenciacao() {
    let base = parseInt(document.getElementById("base").value);
    let exp = parseInt(document.getElementById("exp").value);

    let result = base**exp;

    let tagResult = document.getElementById("resultado");
    tagResult.innerHTML = "<br><b>Resultado: </b>" + result;
}