function mostrarMaior() {
    let primeiroArgumento = document.getElementById("argumentoUm");
    let segundoArgumento = document.getElementById("argumentoDois");
    let resposta = document.getElementById("resposta");

    let primeiro = primeiroArgumento.value;
    let segundo = segundoArgumento.value;

    if (primeiro.length > segundo.length) {
        resposta.textContent = primeiro
    } else if (segundo.length > primeiro.length) {
        resposta.textContent = segundo
    } else {
        alert("Erro: Argumentos devem ser de tamanhos diferentes!")
    }

}

const mostrar = document.getElementById("btMostrar");
mostrar.addEventListener("click", mostrarMaior);