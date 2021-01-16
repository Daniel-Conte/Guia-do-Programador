<template> <!-- Onde ficará o "HTML" do componente -->
    <div id="app"> <!-- Este elemento "#app" irá substituir o "#app" que está no index.html -->
        <h1>Calculadora</h1>
        <Calculator />
    </div>
</template>

<script> /* Onde ficará o JS do componente */

import Calculator from './main/Calculator'

export default {
    components: { Calculator }
        // Sempre que for importar um componente, é necessário registrá-lo(incluir no Objeto "components")
}
</script>

<style> /* Onde ficará o CSS do componente */
    @font-face {
        font-family: 'RobotoMono';
        src: url('./fonts/RobotoMono-Thin.ttf');
    }

    * {
        font-family: 'RobotoMono', 'monospace';
    }

    body {
        margin: 0;
    }

    #app {
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        align-items: center;
        text-align: center;

        color: #fff;
        background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
    }
</style>