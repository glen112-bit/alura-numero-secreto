const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log('Número Secreto:', numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMayorValor = document.getElementById('maior-valor')
elementoMayorValor.innerHTML = maiorValor
