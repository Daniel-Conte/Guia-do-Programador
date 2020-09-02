const texto = `
ca	r
r	o s!
`

console.log(texto.match(/ca\tr\nr\to\ss!/))
/*
    \t -> É o identificador do TAB
    \n -> É o identificador da quebra de linha(enter)
    \s -> É o identificador de qualquer espaço em branco
        - Pode substituir o "\t", "\n" e "\f"
        - Um espaço em branco normal pode ser identificado por " "
*/