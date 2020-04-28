function jurosSimples(capital, taxa, tempo) {
    return capital + capital * (taxa / 100) * tempo
}
function jurosComposto(capital, taxa, tempo) {
    return (capital * Math.pow((1 + taxa / 100), tempo)).toFixed(2)
}

console.log(jurosSimples(1000, 2.5, 12))
console.log(jurosComposto(2000, 4, 4))