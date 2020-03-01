function mostrarJuntos() {
    let primeiroArgumento = document.getElementById("argumentoUm");
    let segundoArgumento = document.getElementById("argumentoDois");
    let terceiroArgumento = document.getElementById("argumentoTres");
    let quartoArgumento = document.getElementById("argumentoQuatro");
    let quintoArgumento = document.getElementById("argumentoCinco");
    let resposta = document.getElementById("resposta");

    let primeiro = primeiroArgumento.value;
    let segundo = segundoArgumento.value;
    let terceiro = terceiroArgumento.value;
    let quarto = quartoArgumento.value;
    let quinto = quintoArgumento.value;

    resposta.textContent = primeiro+segundo+terceiro+quarto+quinto;

}

const mostrar = document.getElementById("btMostrar");
mostrar.addEventListener("click", mostrarJuntos);