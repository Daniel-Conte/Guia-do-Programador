import $ from 'jquery' // Importando o jQuery do node_modules

function loadIncludes(parent = 'body') {
    $(parent).find('[wm-include]').each(function (i, e) {
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data) {
                $(e).html(data)
                $(e).removeAttr('wm-include') // Remove pra executar a função só uma vez(já que é recursiva)

                loadIncludes(e) // Chamada recursiva
            }
        })
    })
}

loadIncludes()