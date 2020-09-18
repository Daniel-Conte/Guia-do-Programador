const texto = `Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - chico@gmail.com
    - maria_silva@registro.br
    - rafa.sampaio@empresa.info.br`

// Formas de resolução
console.log(texto.match(/\w+@\w+.\w+[.]?[\w]{2}?/g))

console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g))