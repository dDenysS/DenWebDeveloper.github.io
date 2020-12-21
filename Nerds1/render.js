const templateScript = $('#template-questions').html()

Handlebars.registerHelper('type', function (correct) {
    if (correct === null) {
        return 'warning'
    }

    if (correct === 'Неправильно!') {
        return 'wrong'
    } else {
        return 'success'
    }
})

Handlebars.registerHelper('textStatus', function (correct) {
    if (correct === null) {
        return 'Невідомо'
    }

    return correct
})

const template = Handlebars.compile(templateScript)

$('.container').append(template({data:qData}))
