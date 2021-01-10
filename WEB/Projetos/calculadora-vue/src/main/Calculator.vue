<template>
    <div class="calculator">
        <Display :value="displayValue" />
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
    data() {
        return {
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            current: 0
        }
    },
    components: { Button, Display },
        // Sempre que for importar um componente, é necessário registrá-lo(incluir no Objeto "components")
    methods: {
        clearMemory() {
            Object.assign(this.$data, this.$options.data())
            /*  Controle de estado
                - "this.$data" retorna os valores ATUAIS de "data" (estado atual)
                - "this.$options.data()" executa a função "data()" novamente, assim retornando os dados para os valores INICIAIS (estado inicial)
            */
        },
        setOperation(operation) {
            if(this.current === 0) {
                this.operation = operation
                this.current = 1
                this.clearDisplay = true
            } else {
                const equals = operation === "="
                const currentOperation = this.operation

                try {
                    this.values[0] = eval(`${this.values[0]} ${currentOperation} ${this.values[1]}`)
                } catch(e) {
                    this.$emit('onError', e)
                }

                this.values[1] = 0
                this.displayValue = this.values[0]
                this.operation = equals ? null : operation
                this.current = equals ? 0 : 1
                this.clearDisplay = true
            }
        },
        addDigit(n) {
            if(n === '.' && this.displayValue.includes('.')) return

            // Os dados do estado só podem ser acessados com "this", então é possível criar variáveis com o mesmo nome que não vai interferir
            const clearDisplay = (this.displayValue === '0' && n !== '.') || this.clearDisplay
            const currentValue = clearDisplay ? "" : this.displayValue
            const displayValue = currentValue + n

            this.displayValue = displayValue
                // Pra setar/modificar o estado, basta atribuir um valor
            this.clearDisplay = false

            if(n !== '.') {
                const i = this.current
                const newValue = parseFloat(displayValue)
                this.values[i] = newValue
            }
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