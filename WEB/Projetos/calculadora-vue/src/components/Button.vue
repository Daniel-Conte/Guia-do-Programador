<template>
    <button class="button" :class="{ double, triple, operation}">
        <!-- Irá setar a classe se o valor da propriedade for "true" -->
        {{ label }}
    </button>
</template>

<script>
export default {
    // As propriedades passadas para o componente ficam dentro de "props"
    props: {
        // Cada propriedade é um Objeto, então deve-se atribuir um Objeto para cada propriedade
        // É possível definir o tipo do valor da propriedade
        label: {}, // String é padrão, não precisa definir o tipo
        operation: { type: Boolean }, // Se for passada a propriedade para o componente, será "true"
        double: { type: Boolean },
        triple: { type: Boolean }
    }
}
</script>

<style>
:root {
    --bg-button: #f0f0f0;
    --border-button: solid 1px #888;
}

.button {
    font-size: 1.4em;
    background-color: var(--bg-button);
    border: none;
    border-right: var(--border-button);
    border-bottom: var(--border-button);
    outline: none;
}

.button:active {
    background-color: #ccc;
}

.button.double {
    grid-column: span 2;
}

.button.triple {
    grid-column: span 3;
}

.button.operation {
    background-color: #fa8231;
    color: #fff;
}

.button.operation:active {
    background-color: #fa8231cc;
}
</style>