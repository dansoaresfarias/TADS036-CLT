function mudarNome() {
    document.title = "Thayza Vitória!";

    var formulario = document.getElementById("formulario");
    formulario.innerHTML = "<h5>Formulário de contato com Thayza!</h5>";

    let paragrafoFree = document.createElement("p");
    paragrafoFree.innerHTML = "Fale comigo que eu sou maelhor do que Danilo. Entre em contato: thayza.vitoria@gmail.com";
    formulario.appendChild(paragrafoFree);

}