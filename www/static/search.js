$("input")[0].addEventListener('change',()=>{
    const val = $("input").val()

    const data = qData.filter(item => {
        return item.question.indexOf(val) !== -1
    })

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
    $('.container .question').remove();
    $('.container').append(template({data}))
})
