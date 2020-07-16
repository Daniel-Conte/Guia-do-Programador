// middleware pattern (chain of responsability)
// executa uma cadeia de funções, cada funcao chamando a próxima, tornando o código mais reutilizável

//Precisa guardar as funcoes em VARIAVEIS

const passo1 = (ctx, next) => { //(contexto, proxima funcao)
    ctx.valor1 = 'mid1'
    next() //Chama a próxima funcão
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3' //Última funcao, não chama nenhuma

const exec = (ctx, ...middlewares) => { //Funcao para executar. (contexto inicial, array dos passos(funcoes) que vai usar)
    const execPasso = indice => { //Indice do array de funçoes para iniciar a cadeia
        middlewares && indice < middlewares.length && //verificações. Se existir middlewares e o indice for menor que o comprimento do array de funcoes, vai executar...
        middlewares[indice](ctx, () => execPasso(indice + 1)) //Executa a funcao de tal indice, passando o ctx e chamando a proxima funcao da cadeia. Vai ficar chamando ate terminar as funções no array
    }
    execPasso(0) //Setando o indice de inicio para a execucao
}

const ctx = {}// contexto inicial
exec(ctx, passo1, passo2, passo3) //passando o contexto inicial e todas as funções em ORDEM para executar a cadeia
console.log(ctx);