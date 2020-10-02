const fs = require('fs')
const { dirname } = require('path')

const read = nomeArquivo =>
    fs.readFileSync(`${__dirname}/Originais/${nomeArquivo}`, { encoding: 'utf-8' })

const write = (nomeArquivo, conteudo) => {
    const dirname = `${__dirname}/Alterados`
    if(!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname)
    }

    fs.writeFileSync(`${dirname}/${nomeArquivo}`, conteudo, { encoding: 'utf-8' })
}

module.exports = { read, write }