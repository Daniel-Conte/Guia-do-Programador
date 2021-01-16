import $ from 'jquery'

import { onLoadHtmlSuccess } from '../core/include'

const duration = 300

function filterByCity(city) {
    $('[wm-city]').each(function(i, e) {
        const isTarget = $(this).attr('wm-city') === city || city === null
        if(isTarget) {
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(duration)
        } else {
            $(this).fadeOut(duration)
            $(this).parent().addClass('d-none')
        }
    })
}

function desactiveButton(btnSelected) {
    $('button').each(function(i, e) {
        if(e !== btnSelected) {
            $(e).removeClass('active')
        }
    })
}

$.fn.cityButtons = function() {
    const cities = new Set // Criando um Set para não repetir o nome das cidades(já que tem varios elementos com a mesma cidade)
    $('[wm-city]').each(function(i, e) {
        cities.add($(e).attr('wm-city'))
    })

    const btns = Array.from(cities).map(city => {
        const btn = $('<button>').addClass(['btn', 'btn-info']).html(city)
        btn.click(e => {
            filterByCity(city)

            desactiveButton(this)
            btn.addClass('active')
        })
        return btn
    })

    const btnAll = $('<button>').addClass(['btn', 'btn-info', 'active']).html('Todas')
    btnAll.click(e => {
        filterByCity(null)
        
        desactiveButton(this) 
        btnAll.addClass('active')
    })
    btns.push(btnAll)

    const btnGroup = $('<div>').addClass(['btn-group'])
    btnGroup.append(btns)

    $(this).html(btnGroup) // Esse this está referenciando o elemento que chamou esta função(cityButtons)

    return this
}

onLoadHtmlSuccess(function() { // Registra a função no array(core/include.js)
    $('[wm-city-buttons]').cityButtons() // Executa só quando a pagina HTML for carregada
})