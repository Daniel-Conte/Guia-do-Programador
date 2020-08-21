(function($) {
    $.fn.temporizador = function(opcoes) {
        const opcoesFinais = $.extend({ // ".extend(<{ valoresPadrao }>, <objetoPreferencia>)" Seta valores padrao para determinado objeto
            // Neste caso, se dentro do objeto "opcoes" não estiver contido o elemento "mensagem", sera setado o valor padrao 
            mensagem: 'Em breve!',
            horario: '23:59:59'
        }, opcoes)

        function criarSpanClass(classe, valorHtml) {
            return $(`<span class="${classe}">`).html(valorHtml)
        }

        const horaDezena = criarSpanClass('digito', '0')
        const horaUnidade = criarSpanClass('digito', '0')
        const minutoDezena = criarSpanClass('digito', '0')
        const minutoUnidade = criarSpanClass('digito', '0')
        const segundoDezena = criarSpanClass('digito', '0')
        const segundoUnidade = criarSpanClass('digito', '0')

        const separadorHora = criarSpanClass('separador', ':')
        const separadorMinuto = criarSpanClass('separador', ':')
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

        $(this).addClass('temporizador')
        $(this).append(horaDezena, horaUnidade, separadorHora, minutoDezena, minutoUnidade, separadorMinuto, segundoDezena, segundoUnidade, mensagem)

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
        const horarioAlvo = regex.exec(opcoesFinais.horario) //"RegExp.exec(<string>)" executa a regex em cima de uma string e retorna um array com os resultados
            // Neste caso, retorna um array com 1 elemento. Indice:
                // 0 -> horario "18:00:00"
                // 1 -> hora "18"
                // 2 -> minuto "00"
                // 3 -> segundo "00"
        //console.log(horarioAlvo)

        let temporizador = setInterval(() => {
            const agora = new Date() // Horario atual
            const alvo = new Date() // Horario alvo
            alvo.setHours(horarioAlvo[1], horarioAlvo[2], horarioAlvo[3]) // "Date.setHours(<hora>, [<minuto>], [<segundo>])" modifica o horario

            const diferencaEmMili = alvo.getTime() - agora.getTime() // "Date.getTime()" retorna o tempo em milisegundos
            if(diferencaEmMili >= 0) {
                const diferenca = regex.exec(new Date(diferencaEmMili).toISOString())
            }
        }, 1000)

        return this
    }
})(jQuery)