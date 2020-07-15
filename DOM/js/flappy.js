function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className /* "elem.className" pode ser subtituido por "elem.classList.add", dá no mesmo. */
    return elem /* Retorna o elemento pronto */
}

function Barreira(reversa = false) { /* Uma barreira tem a borda em cima do corpo e a outra o contrario. Isso é pra definir qual é qual */
    this.elemento = novoElemento('div', 'barreira') /* o "this" permite que o "elemento" seja usado fora da funcao */

    const borda = novoElemento('div', 'borda') /* Cria a borda */
    const corpo = novoElemento('div', 'corpo') /* Cria o corpo */
    this.elemento.appendChild(reversa ? corpo : borda) /* vai adicionar o corpo e aborda na div. A ordem depende se é inverso ou nao */
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

/* const b = new Barreira(true)
b.setAltura(300)
document.querySelector('[wm-flappy]').appendChild(b.elemento) */

function ParDeBarreiras(altura, abertura, x) { /* "altura" é a altura total tela. "abertura" é o espaçamento vertical entre os 2 tubos. "x" é a posicao no eixo "x" */
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true) /* É inversa, então vai receber primeiro o corpo e depois a borda */
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento) /* "superior.elemento" esta pegando o resultado(this.elemento) da funcao construtora "Barreira" */
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura) /* A altura superior vai ter um valor aleatorio entre 0 e altura - abertura */
        const alturaInferior = altura - abertura - alturaSuperior /* A parte de baixo vai se adaptar a parte de cima */
        this.superior.setAltura(alturaSuperior) /* Setando a altura da barreira */
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0]) /* Separa o numero de "px"(este numero vira uma string) e transforma este "numero string" em um numero normal. Pega a posicao do elemento */
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth /* Pega a largura total do jogo */

    this.sortearAbertura()
    this.setX(x)
}

/* const b = new ParDeBarreiras(700, 200, 800)
document.querySelector('[wm-flappy]').appendChild(b.elemento) */

function Barreiras(altura, largura, abertura, espaco, notificarPonto) { /* "altura" = Altura total. "largura" = posicao no eixo "x". "abertura" = espaco vertical entre os tubos. "espaco" = espaco horizontal entre os tubos. "notificarPonto" = avisa quando passar no tubo */
    this.pares = [ /* Vai ter 4 pares de barreiras no total */
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3 /* Quantos px vai percorrer por vez */
    this.animar = () => { /* Funcao para fazer a animacao */
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento) /* Seta a posicao do elemento para a esquerda */

            //Quando o elemento sair da area do jogo
            if(par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }

            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocamento >= meio && par.getX() < meio
            if(cruzouOMeio) notificarPonto()
        })
    }
}

function Passaro(alturaJogo) {
    let voando = false

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true /* Quando uma tecla é apertada */
    window.onkeyup = e => voando = false /* Quando uma tecla apertada é soltada */

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5) /* Quando uma tecla estiver apertada o passaro sobe, ao contrario desce */

        const alturaMaxima = alturaJogo - this.elemento.clientHeight /* Altura total */

        /* Não deixa o passaro passar do topo e do chao */
        /* Levando em consideração o "bottom" */
        if(novoY <= 0) { 
            this.setY(0)
        } else if(novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo / 2) /* Posição inicial */
}

function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0) /* Pontuaçao inicial */
}

/* const barreiras = new Barreiras(700, 1200, 200, 400)
const passaro = new Passaro(700)
const areaDoJogo = document.querySelector('[wm-flappy]')

areaDoJogo.appendChild(passaro.elemento)
barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
setInterval(() => {
    barreiras.animar()
    passaro.animar()
}, 20) */

function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect() /* Pega o retangulo associoado ao elemento A. Retorna o tamanho(height e width) e a posicao(top, left, right, bottom, x, y) do elemento */
    const b = elementoB.getBoundingClientRect() /* Pega o retangulo associoado ao elemento B */

    const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left /* "a.left + a.width" é o limite direito do elemento. Detecta colisao horizontal entre os elementos */
    const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top /* "a.top + a.height" é o limite inferior do elemento. Detecta colisao vetical entre os elementos */

    return horizontal && vertical /* Os 2 precisam ser verdadeiros para colisao */
}

function colidiu(passaro, barreiras) {
    let colidiu = false
    barreiras.pares.forEach(ParDeBarreiras => {
        if(!colidiu) {
            const superior = ParDeBarreiras.superior.elemento
            const inferior = ParDeBarreiras.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento, superior) || estaoSobrepostos(passaro.elemento, inferior)
        }
    })
    return colidiu
}

function FlappyBird() {
    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight /* Altura do jogo */
    const largura = areaDoJogo.clientWidth /* Largura do jogo */

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400, () => progresso.atualizarPontos(++pontos))
    const passaro = new Passaro(altura)

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento)) /* Precisa adicionar cada par de barreiras */

    this.start = () => {
        // Loop do jogo
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()

            if(colidiu(passaro, barreiras)) {
                clearInterval(temporizador)
            }
        }, 20)
    }
}

new FlappyBird().start()