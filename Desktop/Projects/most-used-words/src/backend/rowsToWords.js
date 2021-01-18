export default rows => {
    return new Promise((resolve, reject) => {
        try {
            const words = rows
                .filter(filterValidRow)
                .map(removeTags)
                .map(removePunctuation)
                .reduce(mergeRows)
                .toLowerCase()
                .split(' ')

            resolve(words)
        } catch (e) {
            reject(e)
        }
    })
}

const filterValidRow = row => {
    const notNumber = !parseInt(row.trim()) // Verifica se a linha só contém números
        // "trim()" remove espaços em branco
    const notEmpty = !!row.trim()
    const notInterval = !row.includes('-->') // Verifica se é o intervalo de tempo da linha da legenda

    return notNumber && notEmpty && notInterval
}
const removePunctuation = row => row.replace(/[!-/:-@]/g, '').trim()
const removeTags = row => row.replace(/<[^>]+>/gi, '')
const mergeRows = (fullText, row) => `${fullText} ${row}`