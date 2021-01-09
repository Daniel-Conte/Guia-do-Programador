<template>
    <div class="calculator">
        <Display value="" />
        <Button label="AC" @onClick="clearMemory" triple /> <!-- "onClick" NÃO é um evento padrão, ele foi criado na função "$emit()" do componente -->
        <Button label="/" @onClick="setOperation" operation /> <!-- Já que o evento criado "onClick" retorna a label do componente e a função "setOperation(operation)" está passada sem parâmetros (operation), o valor retornado de "onClick" é passado como parâmetro para a função -->
        <Button label="7" @onClick="addDigit" />
        <Button label="8" @onClick="addDigit" />
        <Button label="9" @onClick="addDigit" />
        <Button label="*" @onClick="setOperation" operation />
        <Button label="4" @onClick="addDigit" />
        <Button label="5" @onClick="addDigit" />
        <Button label="6" @onClick="addDigit" />
        <Button label="-" @onClick="setOperation" operation />
        <Button label="1" @onClick="addDigit" />
        <Button label="2" @onClick="addDigit" />
        <Button label="3" @onClick="addDigit" />
        <Button label="+" @onClick="setOperation" operation />
        <Button label="0" @onClick="addDigit" double />
        <Button label="." @onClick="addDigit" />
        <Button label="=" @onClick="setOperation" operation />
    </div>
</template>

<script>
import Button from '../components/Button'
import Display from '../components/Display'

export default {
    components: { Button, Display },
        // Sempre que for importar um componente, é necessário registrá-lo(incluir no Objeto "components")
    methods: {
        // Armazena os métodos
        clearMemory() {
            
        },
        setOperation(operation) {
            
        },
        addDigit(n) {
            
        }
    }
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