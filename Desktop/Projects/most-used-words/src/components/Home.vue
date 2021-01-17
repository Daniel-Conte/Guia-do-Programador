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
import { ipcRenderer } from 'electron'
    // "ipcRenderer" é usado no frontend da aplicação para se comunicar com o backend por meio de canais
import Pill from './Pill'

export default {
    name: 'Home',
    components: { Pill },
    data() {
        return {
            groupedWords: [],
            files: []
        }
    },
    methods: {
        processSubtitles() {
            const paths = this.files.map(file => file.path)

            ipcRenderer.send('process-subtitles', paths)
                // "ipcRenderer.send(<canal>, <dados>)" envia os dados para este canal no backend
            ipcRenderer.on('process-subtitles', (event, resp) => {
                // "ipcRenderer.on(<canal>, callback(evento, resp))" fica escutando este canal no backend enviar dados
                this.groupedWords = resp
            })
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