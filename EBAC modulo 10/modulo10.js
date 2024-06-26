$(document).ready(function(){
    $('#carousel-imgs').slick({
        autoplay:true
    })

    $('.menu-burguer').click(function(){
        $('nav').slideToggle();
    })
})


$("#telefone").mask('(00) 00000-0000', {
    placeholder: '(00) 00000-0000'
})

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true, 
            email: true
        },
        telefone: {
            required: true
        },
        mensagem: {
            required: true
        },
        autoInt: {
            required: false
        },
    },
    messages: {
        nome: 'Por favor, insira o seu nome',
        telefone: 'Este campo é obrigatorio.',
        email: 'Este campo é obrigatorio.'
    },
    submitHandler: function(form) {
        console.log(form);
    },
    invalidHandler: function(evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if(camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos obrigatorios`)
      }
    }
})

$('.lista-veiculos button').click(function() {
    const destino = $('#contato');

    const nomeVeiculo = $(this).parent().find('h3').text(); 

    $('#autoInt').val(nomeVeiculo);

    $('html').animate({
        scrollTop: destino.offset().top
    }, 1000)
})