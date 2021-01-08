<template> <!-- Onde ficará o "HTML" do componente -->
    <div id="app"> <!-- Este elemento "#app" irá substituir o "#app" que está no index.html -->
        <h1>Olá Vue!</h1>
    </div>
</template>

<script> /* Onde ficará o JS do componente */
export default {

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