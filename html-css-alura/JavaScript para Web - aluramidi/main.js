function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio).play()

    if(elemento === null) {
        console.log('Elemento não encontrado')
    }

    if(elemento != null) {
        console.log(elemento.localName)
    }
    // elemento.play()
}

const listaDeTeclas = document.querySelectorAll('.tecla')


for(let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas
    const instrumento = tecla[contador].classList[1] //usa-se o classList para acessar a lista e pegar a segunda classe dos botões
    const idAudio = `#som_${instrumento}`

    tecla[contador].onclick = function() {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function(evento) {
        
        console.log(evento.code)

        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa')
        }
        
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa')
    }

}
