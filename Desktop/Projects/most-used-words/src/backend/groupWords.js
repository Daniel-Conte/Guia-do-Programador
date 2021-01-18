export default words => {
    return new Promise((resolve, reject) => {
        try {
            const groupedWords = words.reduce((obj, word) => {
                if(obj[word]) {
                    obj[word] += 1
                } else {
                    obj[word] = 1
                }
    
                return obj
            }, {}) // { you: 3, she: 5 }
    
            const groupedWordsArray = Object
                .keys(groupedWords)
                .map(key => ({ name: key, amount: groupedWords[key] }))
                    // Colocando o Objeto dentro de "()" para a arrow function não confundí-lo com o corpo da função
                .sort((w1, w2) => w2.amount - w1.amount)
    
            resolve(groupedWordsArray)
        } catch (e) {
            reject(e)
        }
    })
}