<template>
    <v-container fluid>
        <v-form>
            <v-file-input
                label="Selecione as Legendas"
                prepend-icon="mdi-message-text"
                append-outer-icon="mdi-send"
                outlined
                multiple
                chips
                v-model="files"
                @click:append-outer="processSubtitles"
                 />
                 <!--
                     "prepend-icon" -> Ícone que fica na frente(fora) do campo input
                     "append-outer-icon" -> Ícone que fica atrás(fora) do campo input
                     "outlined" -> Add borda no campo input
                     "multiple" -> Permite add vários arquivos
                     "chips" -> Mostra cada arquivo adicionado dentro de uma "pill"
                     ":append-outer" -> Vincula o evento "click" à área do ícone atrás(fora) do campo input (append-outer-icon)
                 -->
        </v-form>
        <div class="pills">
            <Pill v-for="word in groupedWords" :key="word.name" :name="word.name" :amount="word.amount" />
        </div>
    </v-container>
</template>

<script>
import Pill from './Pill'

export default {
    name: 'Home',
    components: {
        Pill
    },
    data() {
        return {
            groupedWords: [
                { name: 'i', amount: 1234},
                { name: 'you', amount: 900},
                { name: 'he', amount: 853}
            ],
            files: []
        }
    },
    methods: {
        processSubtitles() {
            console.log(this.files)
        }
    }
}
</script>

<style>
    .pills {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>