//Operador "..." Rest(juntar) / Spread(espalhar)

//Usar Spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario} //Pega as chaves e valores de "funcionario" e joga dentro de "clone"
console.log(clone)

//Usar Spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela'] //Pode definir um local específico para jogar os elementos
console.log(grupoFinal)