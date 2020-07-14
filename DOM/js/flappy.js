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

function ParDeBarreiras(altura, abertura, x) { /* "altura" é a altura total tela. "abertura" é o espaçamento entre os 2 tubos. "x" é a posicao no eixo "x" */
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

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0]) /* Separa o numero de "px"(este numero vira uma string) e transforma este "numero string" em um numero normal */
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

const b = new ParDeBarreiras(700, 200, 800)
document.querySelector('[wm-flappy]').appendChild(b.elemento)
