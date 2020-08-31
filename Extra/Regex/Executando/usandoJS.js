const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9') // Usando o construtor de Regex. Busca o número "9"
console.log('Métodos da RegExp...')
console.log(regexNove.test(texto)) // ".test(<string>)" Testa se a regex encontra algum resultado na string e retorna "true" ou "false"
console.log(regexNove.exec(texto)) // ".exec(<string>)" Executa a regex em cima da string e retorna os resultados

const regexLetras = /[a-f]/g // Busca letras de "a" até "f". Retorna todos os resultados
console.log('Métodos da string...')
console.log(texto.match(regexLetras)) // ".match(<regex>)" Executa a regex em cima da string e retorna os resultados
console.log(texto.search(regexLetras)) // ".search(<regex>)" Executa a regex em cima da string e retorna o índice do primeiro resultado
console.log(texto.replace(regexLetras, 'Achei')) // ".replace(<regex>, <substituição>)" Substitui os resultados da regex por uma string
console.log(texto.split(regexLetras)) // ".split(<regex>)" Divide a string em elementos de acordo com os resultados da regex