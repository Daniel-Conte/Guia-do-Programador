import { ipcMain } from 'electron'
    // "ipcMain" é usado no backend da aplicação para se comunicar com o frontend por meio de canais
import pathsToRows from './pathsToRows'
import rowsToWords from './rowsToWords'
import groupWords from './groupWords'

// !!!!!! Para o Electron saber da existência deste arquivo e poder estabelecer a conexão entre o frontend e o backend é preciso importar este arquivo dentro do "background.js" !!!!!!!

ipcMain.on('process-subtitles', (event, paths) => {
    /*
        - "ipcMain.on(<canal>, <callback(evento, dados)>)" fica escutando este canal no frontend enviar dados
        - "canal" pode ser qualquer nome, desde que seja o mesmo usado no frontend para estabelecer a comunicação
            - Pode-se criar outros canais para estabelecer outras comunicações
        - "paths" é o argumento que vai ser passado no frontend
            - Pode ser passado qualquer coisa, neste caso é esperado que seja passado um array de paths dos arquivos de legenda
    */
    pathsToRows(paths)
        .then(rows => rowsToWords(rows))
        .then(words => groupWords(words))
        .then(groupedWords => event.reply('process-subtitles', groupedWords))
            // "event.reply(<canal>, <dados>)" envia uma resposta para o canal
})