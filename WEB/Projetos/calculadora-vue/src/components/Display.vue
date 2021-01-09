<template>
    <div class="display">
        {{ value }}
    </div>
</template>

<script>
export default {
    // Se não precisar fazer nenhuma configuração nas propriedades, só adicione-as dentro de um Array
    props: ['value']
}
</script>

<style>
    .display {
        grid-column: span 4;
        background-color: #0004;

        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 20px;
        font-size: 2.1em;
        overflow: hidden;
    }
</style>