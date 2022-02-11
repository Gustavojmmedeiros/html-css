function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play()
}

const listaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0

while(contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas
    const instrumento = tecla[contador].classList[1] //usa-se o classList para acessar a lista e pegar a segunda classe dos botões

    const idAudio = `#som_${instrumento}`

    tecla[contador].onclick = function() {
        tocaSom(idAudio)
    }

    contador += 1
}