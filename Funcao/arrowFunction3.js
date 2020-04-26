let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)
comparaComThis(obj)
comparaComThis(this)

comparaComThisArrow = param => console.log(this === param)  //na arrow function o this permanece referenciando o local em que ele foi declarado
comparaComThisArrow(obj)
comparaComThisArrow(global)
comparaComThisArrow(this)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)