function verificaValorDoChute(chute){
  const numero =+ chute;

  if(chute  === 'game over'){
    document.body.innerHTML = `
    <div class="mensagem"> acabou o jogo</div>
    <div class="box">Game Over</div>        
    <button id="jogar-novamente" class="btn-jogar mensagem">Jogar Novamente</button>

    `
  }
  if(chuteForInvalido(numero)){
    console.log('valor invalido')
    elementoChute.innerHTML += `
    <div>Valor Invalido</div>
    `
    return
  }
  if(numeroMayorMenor(numero)){
    // console.log(`Valor in¡valido, debe estar entre ${menorValor}, e ${mayorValor}`)
    elementoChute.innerHTML +=`<div class="mensagem">numero invalido: o numer precisa estar entre ${menorValor} e ${maiorValor}</div>`
    return
  }
  if(numero === numeroSecreto) {
    document.body.innerHTML = `
    <h1>Bien CTM!!!!!!</h1>
    <div class="mensagem">El numero secreto es: ${numeroSecreto}
</div>
    <button id="jogar-novamente" class="btn-jogar mensagem">Jogar Novamente</button>
    `
  } else if(numero < numeroSecreto){
    elementoChute.innerHTML += `
      <div class="mensagem">O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
    `
  }else {
    elementoChute.innerHTML += `
      <div class="mensagem">O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
    `
  }

}

function chuteForInvalido(numero){
 return Number.isNaN(numero) 
}

function numeroMayorMenor(numero){
  return numero > maiorValor || numero < menorValor 
}
document.body.addEventListener('click', e => {
    if(e.target.id === 'jogar-novamente'){
        window.location.reload()
    }

})
