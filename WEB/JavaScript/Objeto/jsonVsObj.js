//JSON é um formato de texto que é usado para transferir dados entre qualquer tecnologia
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) //Transforma um objeto em JSON. funcoes são excluidas, pois JSON só transfere dados

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) //Formato inválido de JSON
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) //Formato inválido de JSON
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) //Formato valido. JSON.parse converte JSON em Objeto
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')) //Formato valido. Caracteres e strings SEMPRE devem estar dentro de ""(aspas duplas). Numeros, booleanos, {} e [] não precisam estar dentro de ""