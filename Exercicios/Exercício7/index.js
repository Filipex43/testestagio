function teste() {
    const objeto = [
        { id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42 },
        { id: 2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21 },
        { id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28 },
        { id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21 }
    ]

    let resposta = document.getElementById('resposta');

    for(let i in objeto) {
        resposta.textContent += "Olá, " + (objeto[i].nome).charAt(0).toUpperCase() + (objeto[i].nome.slice(1)) + " " + objeto[i].sobrenome + "!\n";
    }

}

const mostrar = document.getElementById("btMostrar");
mostrar.addEventListener("click", teste);