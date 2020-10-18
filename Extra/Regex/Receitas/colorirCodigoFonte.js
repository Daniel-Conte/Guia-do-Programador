const aplicarCor = (txt, reg, cor) => txt.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`)
    // Substituindo um pedaço específico do texto por o mesmo pedaço, só que colorido
        // "$1" é o retrovisor da regex usada, retornando o texto que foi capturado na regex
            // A regex PRECISA estar dentro de um grupo "( ... )" para ter o retrovisor

const files = require('./files')
const texto = files.read('codigoFonte.html')

const codeRegex = /<code>[\s\S]*<\/code>/i
    // Pega todo o conteúdo de "<code>...</code>""
let codigo = texto.match(codeRegex)[0]
    // Como não foi usada a flag global "g" é retornado 3 elementos: O texto capturado, index e o input(texto base que foi usado)
    // Usando "let" pois o código vai ser colorido/modificado pedaço por pedaço

// Aplicando cor nas Strings
codigo = aplicarCor(codigo, /(\".*\")/g, 'ce9178')

// Aplicando cor nas palavras reservadas
codigo = aplicarCor(codigo, /\b(package|public|class|static|if|else)\b/g, 'd857cf')

// Aplicando cor nos tipos
codigo = aplicarCor(codigo, /\b(void|int)\b/g, '1385e2')

// Aplicando cor nos comentários de múltiplas linhas
codigo = aplicarCor(codigo, /(\/\*[\s\S]*\*\/)/g, '267703')

// Aplicando cor nos comentários de uma linha
codigo = aplicarCor(codigo, /(\/\/.*)/g, '267703')
    // Usando o problema do "dotall" ("." não substitui "\n"), então só vai capturar esta linha

const conteudoFinal = texto.replace(codeRegex, codigo)
files.write('codigoFonte.html', conteudoFinal)