//----------- "noEmitOnError" -----------
    // Não permite que o TS compile o código para JS quando houver erros

let canal: string = 'Gaveta'
let inscritos: number = 610234

//canal = inscritos
    // Como deu erro, o ""noEmitOnError": true" no "tsconfig.json" não permitirá que o TS compile o código para JS
    // O código só será compilado se não houver erros

//----------- "noImplicitAny" -----------
    // Gera erros em alguns "any" implícitos

function soma(a: any, b: any): number {
    // ""noImplicitAny": true" não permite que o tipo "any" seja implícito em alguns casos(como parâmetros de funções). Para permitir o "any", deve-se torná-lo explícito
        // O "any" implícito não é permitido, pois o TS não consegue saber os possíveis tipos que o parâmetro pode ter, já que funções são bem flexíveis
    return a + b
}

let qualquerCoisa
qualquerCoisa = 12
qualquerCoisa = 'abc'
    // Nesse caso, o "any" implícito é permitido, pois o TS sabe os tipos que a variável pode ter

//----------- "strictNullChecks" -----------
    // Não permite que o código gere valores nulos

//----------- "noUnusedLocals" -----------
    // Não permite que variáveis locais fiquem sem uso

//----------- "noUnusedParameters" -----------
    // Não permite que parâmetros fiquem sem uso

function saudar(isManha: boolean, /* horas:number */): string {
    // Parâmetro não usado
    let saudacao: string
    //let frase: string
        // Variável não usada
    if(isManha) {
        saudacao = 'Bom Dia!'
    } else {
        saudacao = 'Tenha uma vida boa!'
    }

    return saudacao
        // Se não usar o "else", vai gerar erro pois a função pode retornar um valor nulo
}