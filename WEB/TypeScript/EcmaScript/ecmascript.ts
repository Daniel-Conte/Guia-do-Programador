// Muito cuidado com qual versão do JS que você usará no projeto e qual versão do JS o TS irá traduzir
    // Se você usar recursos do ES6 mas o TS traduzir o código para ES5 pode gerar alguns problemas

//----------- let & const -----------
    // Surgem no ES6
    // Serão traduzidos para "var" caso o TS esteja configurado para ES5
let seraQuePode = '?'
console.log(seraQuePode)
//var seraQuePode
    // O var possui o "hoisting" que as variáveis podem ser acessadas mesmo se forem usadas antes da declaração
        // "let" e "const" não tem isso

let estaFrio = true
if(estaFrio) {
    var acao = 'Colocar o casaco!'
        // "var" não possui escopo de bloco e pode ser acessada de fora dele
        // "let" tem escopo de bloco
}
//console.log(acao)

const cpf: string = '123.456.678-99'
//cpf = '111.222.333-44'
    // Ao ser traduzido para ES5, "const" vira "var" e pode ser atribuido outro valor
console.log(cpf)

var segredo = 'externo!'
function revelar() {
    const segredo = 'interno!'
    console.log(segredo)
}

revelar()
console.log(segredo)

{
    {
        const def = 'def'
            // "const" também tem escopo de bloco
        console.log(def)
        
    }
}

for(var i = 0; i < 10; i++) {
    // "var" não tem escopo de bloco e pode ser acessado de fora
    console.log(i)
    
}
console.log(i)
    // Acessando o valor de "i"

//----------- Rest & Spread (tupla) -----------
    // Usando o operador "rest" e "spread" junto com "tupla"

const tupla: [number, string, boolean] = [1, 'abc', false]

function tuplaParam1(a: number, b: string, c: boolean): void {
    console.log(`1) ${a} ${b} ${c}`)   
}

tuplaParam1(...tupla)
    // É possível usar o operador "spread" para espalhar os valores de uma tupla para os parâmetro de uma função
    // Só é possível isso se os tipos dos valores da tupla e dos parâmetros da função forem iguais e na mesma ordem

function tuplaParam2(...params: [number, string, boolean]): void {
    // "rest" para colocar todos os parâmetros dentro de um array
    // Usando o tipo "tupla" para limitar a quantidade e setar os tipos de parâmetros
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)   
}

tuplaParam2(...tupla)