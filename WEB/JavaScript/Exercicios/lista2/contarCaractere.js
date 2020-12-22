function contarCaractere(char, texto) {
    const regex = new RegExp(char, 'g')

    return texto.match(regex).length
}

console.log(contarCaractere('r', 'A sorte favorece os audazes'))
console.log(contarCaractere('c', 'Conhece-te a ti mesmo'))