function teste() {
    let resposta = document.getElementById('resposta');

    const objeto = [
        { id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42 },
        { id: 2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21 },
        { id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28 },
        { id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21 }
    ]

    let valorInicial = 0;
    let soma = [{ x: objeto[0].idade }, { x: objeto[1].idade }, { x: objeto[2].idade }, { x: objeto[3].idade}].reduce(function (acumulador, valorAtual) {
        return acumulador + valorAtual.x;
    }, valorInicial)

    resposta.textContent = "A soma das idades de juca(42), daniel(21), matheus(28) e gabriel(21) é " + soma;

}

const mostrar = document.getElementById("btMostrar");
mostrar.addEventListener("click", teste);