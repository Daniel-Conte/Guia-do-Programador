const texto = `1,2,3,4,5,6,a.b c!d?e\r	-
f_g`

// Shorthands são atalhos para diminuir a sintaxe e facilitar a leitura da regex

console.log(texto.match(/\d/g)) // "\d" procura TODOS os DÍGITOS(números) = [0-9]
console.log(texto.match(/\D/g)) // "\D" procura todos os NÃO dígitos = [^0-9]

console.log(texto.match(/\w/g)) // "\w" procura TODOS os CARACTERES e "_"(underline) menos símbolos = [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) // "\W" procura todos os NÃO caracteres e "_"(underline), só SÍMBOLOS e ESPAÇOS = [^a-zA-Z0-9_]

console.log(texto.match(/\s/g)) // "\s" procura TODOS os ESPAÇOS = [ \t\n\r\f]
console.log(texto.match(/\S/g)) // "\S" procura todos os NÃO espaços = [^ \t\n\r\f]