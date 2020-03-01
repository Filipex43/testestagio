function teste() {
    let resposta = document.getElementById('resposta');

    const objeto = [
        { id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42 },
        { id: 2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21 },
        { id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28 },
        { id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21 }
    ]

    for (let i in objeto) {

        if (objeto[i].idade <= 30) {

            resposta.textContent += "ID: " + objeto[i].id + " " + (objeto[i].nome).charAt(0).toUpperCase() + (objeto[i].nome.slice(1)) +
                                    " " + (objeto[i].sobrenome).charAt(0).toUpperCase() + (objeto[i].sobrenome.slice(1)) + " " +
                                    "Idade: " + objeto[i].idade + " \n ";

        }
    }

}

const mostrar = document.getElementById("btMostrar");
mostrar.addEventListener("click", teste);