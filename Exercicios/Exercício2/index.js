function aplicarFuncao() {
    let primeiroArgumento = document.getElementById("argumentoUm");
    let segundoArgumento = document.getElementById("argumentoDois");
    let select = document.getElementById("select");
    let resposta = document.getElementById("resposta");

    let primeiro = primeiroArgumento.value;
    let segundo = segundoArgumento.value;
    let x = select.options[select.selectedIndex].value;
    if (primeiro != "" && segundo != "") {
        if (x == 1) {
            resposta.textContent = primeiro.toUpperCase() + " e " + segundo.toUpperCase();
        } else if (x == 2) {
            resposta.textContent = primeiro.toLowerCase() + " e " + segundo.toLowerCase();
        }
    } else {
        alert("Erro: Digite algo nas strings para aplicar a função");
    }
}

const mostrar = document.getElementById("btMostrar");
mostrar.addEventListener("click", aplicarFuncao);