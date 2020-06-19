$("#formCadastro").validate({
    rules: {
        teste: {
            required: true,
        },
        nome: {
            required: true,
            maxlength: 100,
            minlength: 5,
            minWords: 2
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true,
        },
        meta: {
            required: true,
        },
        plano:{
            required: true,
        },
        tempo_plano:{
            required: true,
            number: true
        },
        valor:{
            required: true,
            number: true
        }
    },
    errorElement: 'div',
    errorPlacement: function(error, element) {
        var placement = $(element).data('error');
        if (placement) {
            $(placement).append(error)
        } else {
            error.insertAfter(element);
        }
    }
});