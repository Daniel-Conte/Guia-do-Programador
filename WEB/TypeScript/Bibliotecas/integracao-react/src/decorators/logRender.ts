// Para criar um tipo que aceite componentes, basta criar um tipo que exige um construtor e que retorna um objeto com o método "render()"
type Componente = {
    new(...args: any[]): {
        render(): any
    }
}

// Este decorator irá imprimir uma mensagem no console antes e depois do componente ser renderizado
export default function logRender<C extends Componente>(componente: C) {
    return class extends componente {
        render() {
            console.log('Preparando para renderizar...')
            const r: any = super.render()
                // "super.render()" vai executar o método "render()" do componente pai
            console.log('Renderização concluída!')
            return r
        }
    }
}