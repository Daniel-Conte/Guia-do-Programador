import $ from 'jquery' // Importando o jQuery do node_modules    

const loadHtmlSuccessCallbacks = [] // Array de funções para executar quando um HTML carregar com sucesso numa chamada ajax

export function onLoadHtmlSuccess(callback) { // Para registrar funções no array sem repetição
    if(!loadHtmlSuccessCallbacks.includes(callback)) { // "includes" procura determinado elemento dentro do array
        loadHtmlSuccessCallbacks.push(callback)
    }
}

function loadIncludes(parent = 'body') {
    $(parent).find('[wm-include]').each(function (i, e) {
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data) {
                $(e).html(data)
                $(e).removeAttr('wm-include') // Remove pra executar a função só uma vez(já que é recursiva)

                loadHtmlSuccessCallbacks.forEach(callback => callback(data)) // Executa todas as funções do array nos dados da response

                loadIncludes(e) // Chamada recursiva
                    // Reliza esse mesmo procedimento para os elementos caso eles tenham o atributo em suas tags
            }
        })
    })
}

loadIncludes()