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

    var handle_nav = function(){
        
        $('#open-menu').on('click', function(){

            var banner_height = $('#banner').height(),
                nav_wrapper = $('#nav-wrapper'),
                banner_goto = $('#banner-goto'),
                banner_goto_left_offset = banner_goto.offset().left;

            $(this).hide();
            $('#close-menu').fadeIn();
            $('#nav-items').fadeIn();
            nav_wrapper.css('height', banner_height + 'px').fadeIn();

            if(banner_goto_left_offset >= $('#nav-wrapper').offset().left){
                banner_goto.addClass('go-to-next--hover-darkblue');
            } else {
                banner_goto.removeClass('go-to-next--hover-darkblue');
            }

        });

        $('#close-menu').on('click', function(){
            $(this).hide();
            $('#close-menu').fadeOut();
            $('#nav-items').fadeOut();
            $('#nav-wrapper').fadeOut();
            $('#open-menu').fadeIn();
        });

        $(window).resize(function(){
            if($('#nav-wrapper').is(':visible')){
                console.log('visible');
                var banner_height = $('#banner').height();
                $('#nav-wrapper').css('height', banner_height + 'px');
                if($('#banner-goto').offset().left >= $('#nav-wrapper').offset().left){
                    $('#banner-goto').addClass('go-to-next--hover-darkblue');
                } else {
                    $('#banner-goto').removeClass('go-to-next--hover-darkblue');
                }
            }
            
        });

    };

    handle_nav();

    clients_slider();

    clients_feedback();

});