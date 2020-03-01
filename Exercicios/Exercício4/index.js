function substituirNumeros() {
    
    let exemplo = document.getElementById("exemplo")
    let resposta = document.getElementById("resposta")

    exemplo = exemplo.value

    trocar = exemplo.replace( /1|2|3/g, "[removido]")

    resposta.textContent = trocar
}

const mostrar = document.getElementById("btTrocar");
mostrar.addEventListener("click", substituirNumeros);