$(document).ready(function(){

    var clients_slider = function(){

        $('.our-clients__content').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false
        });

    };

    var clients_feedback = function(){

        var client = $('.our-clients__item');

        client.on('click', function(){
            
            var client_id = $(this).attr('data-client');

            $('.our-clients__item').removeClass('our-clients__item--active');
            $('.our-clients__feedback-item').removeClass('our-clients__feedback-item--active');

            $(this).addClass('our-clients__item--active');
            $("#"+client_id).addClass('our-clients__feedback-item--active');

            console.log('clicked ' + client_id);

        });       

    };

    clients_slider();

    clients_feedback();

});