const texto = `
123456
cod3r
QUASE123!
#OpA1
#essaSenhaEGrande1234

#OpA1?
Foi123!
`
/*
A senha deve ter:
    - De 6 a 20 caracteres
    - Símbolos
    - Letras maiúsculas
    - Letras minúsculas
    - Números
*/

console.log(texto.match(/^.{6,20}$/gm)) // Base da senha
    // Busca uma LINHA que inicia("^") e termina("$") com algum caractere(".") e que tenha no mínimo 6 e máximo 20 caracteres
    // Se não colocar "$", vai retornar os 20 primeiros caracteres das senhas com mais de 20 caracteres
        // Então, com "$", o último caractere da linha deve estar entre o 6° e 20° caractere
    
console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm))
    // Usando "positive lookahead"
    // Busca de 6 a 20 caracteres(quaisquer) que estão na frente de um caractere(pode ter 0 ou mais) que está na frente de uma letra maiúscula
    // Como "."(".{6,20}") substitui qualquer caractere, o comportamento dessa regex se torna um verificador
        // Ou seja, retorna somente as strings com pelo menos 1 letra maiúscula
    
console.log(texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%!^&*]).{6,20}$/gm))
    // Mesma lógica só que com todos os requisitos