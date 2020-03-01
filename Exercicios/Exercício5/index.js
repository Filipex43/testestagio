function substituirNumeros() {
    
    let exemplo = document.getElementById("exemplo")
    let resposta = document.getElementById("resposta")
    let letras = {4: 'a', 3: 'e', 1: 'i', 5: 's'}

    exemplo = exemplo.value

    trocar = exemplo.replace( /1|3|4|5/g, m => letras[m]);

    resposta.textContent = trocar
}

const mostrar = document.getElementById("btTrocar");
mostrar.addEventListener("click", substituirNumeros);