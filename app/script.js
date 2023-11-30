const menorValor = 0
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio()
const selectNumber = Number('')

function gerarNumeroAleatorio () {
  return parseInt(Math.random() * maiorValor + 1);
}

console.log('numero secreto: '+ numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor;

const elementoMayorValor =  document.getElementById('mayor-valor')
elementoMayorValor.innerHTML = maiorValor





