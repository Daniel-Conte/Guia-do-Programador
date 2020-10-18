const texto = `
Inválidos:
192.268.0.1
1.333.1.1
192.168.0.256
256.256.256.256

Válidos:
192.168.0.1
127.0.0.1
10.0.0.1
10.11.12.0
255.255.255.255
0.0.0.0
`

const n = '(\\d{1,2}|1\\d{2}|2[0-4]\\d|25[0-5])'
    // Dentro de uma string, precisa digitar 2 "\" quando usar

const ipv4 = RegExp(`\\b${n}\\.${n}\\.${n}\\.${n}\\b`, 'g')
    // O construtor "RegExp" consegue interpretar regex em uma string
console.log(texto.match(ipv4))