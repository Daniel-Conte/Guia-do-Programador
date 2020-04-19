const prod1 = {} //chaves "{}" cria um objeto. Objetos são chaves e valores
prod1.nome = 'Celular Ultra Mega'
prod1.valor = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {             //outra maneira de fazer um objeto
    nome: 'Camisa Polo',    //sempre termina uma linha com ","
    preco: 79.90            //ultima linha nao precisa de ","
}

console.log(prod2)