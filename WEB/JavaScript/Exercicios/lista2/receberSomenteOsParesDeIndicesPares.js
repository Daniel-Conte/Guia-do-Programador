function receberSomenteOsParesDeIndicesPares(elementos) {
    return elementos.filter((elem, i) => i % 2 === 0 && elem % 2 === 0)
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))