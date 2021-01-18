import fs from 'fs'

export default paths => {
    return new Promise((resolve, reject) => {
        try {
            const rows = paths
                .map(path => fs.readFileSync(path).toString('utf-8')) // Coloca o conteúdo de todos os arquivos em um array
                .reduce((fullText, text) => `${fullText}\n${text}`) // Junta todos os textos
                .split('\n') // Cria um array com cada linha separada

            resolve(rows)
        } catch (e) {
            reject(e)
        }
    })
}