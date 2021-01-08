import Vue from 'vue'
import App from './App'

new Vue({
    render: h => h(App)
        // "render" é uma função que renderiza componentes na DOM

    // Esta é outra forma criar a função "render"
    /* render(createElement) {
        return createElement(App)
    } */
}).$mount('#app')
    // ".$mount(<elemento>)" tem a mesma função do "el: <elemento>", seleciona o elemento para renderizar o componente