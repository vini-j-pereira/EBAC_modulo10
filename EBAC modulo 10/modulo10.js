$(document).ready(function(){
    $('#carousel-imgs').slick({
        autoplay:true
    })

    $('.menu-burguer').click(function(){
        $('nav').slideToggle();
    })
})