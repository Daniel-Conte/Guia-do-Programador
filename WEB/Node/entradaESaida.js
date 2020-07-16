const anonimo = process.argv.indexOf('-a') !== -1 //process pega os dados digitados no terminal. Se digitar "node entradaESaida.js -a" vai dar true
console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n') //"STandarD OUTput" saída padrao que é a tela
    process.exit() //Encerra o processo
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { //"STandarD INput" entrda padrao que é o teclado. ".on('data')" vai pegar o que foi escrito
        const nome = data.toString().replace('\r\n', '') //replace para substituir as funcoes que o windows executa quando "dá enter" no terminal. "\r" volta pro inicio da linha, "\n" quebra a linha

        process.stdout.write(`Fala ${nome}!!\n`) //Se não substituir o "\r\n" acima, essas vão executar nessa linha e ela vai ficar bugada
        process.exit()
    })
}