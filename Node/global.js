//Objetos no global podem ser acessados e modificados(menos com freeze) em qualquer arquivo
//console.log(global)
global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal!'
})