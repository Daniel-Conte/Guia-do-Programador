//----------- 1 -----------

const dobro = (valor: number): number => valor * 2

console.log(dobro(10))

//----------- 2 -----------

const dizerOla = (nome: string = 'Pessoa'): void => console.log(`Olá, ${nome}`)
dizerOla()
dizerOla('Anna')

//----------- 3 -----------

const nums: number[] = [-3, 33, 38, 5]
console.log(Math.min(...nums))

//----------- 4 -----------

const numeros: number[] = [-3, 33, 38, 5]
const array: number[] = [55, 20, ...numeros]
console.log(array)

//----------- 5 -----------

const notas: number[] = [8.5, 6.3, 9.4]
const [nota1, nota2, nota3] = notas
console.log(nota1, nota2, nota3)

const cientista: {primeiroNome: string, experiencia: number} = {
    primeiroNome: 'Will',
    experiencia: 12
}
const { primeiroNome, experiencia} = cientista
console.log(primeiroNome, experiencia)