<template>
    <div class="calculator">
        <Display />
        <Button />
    </div>
</template>

<script>
import Button from '../components/Button'
import Display from '../components/Display'

export default {
    components: { Button, Display }
        // Sempre que for importar um componente, é necessário registrá-lo(incluir no Objeto "components")
}
</script>

<style>
.calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr repeat(5, 48px);
}
</style>