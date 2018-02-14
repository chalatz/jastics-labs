$(document).ready(function(){

    var scroll_to = function(button_id, the_href){

        $('#'+button_id).on('click', function(event){
            $('html, body').animate({
                scrollTop: $('#'+the_href).offset().top
            }, 1000);
            event.preventDefault();
        });
    };

    var clients_slider = function(){

        $("#our-clients__content").lightSlider({
            item: 4,
            controls: false,
            // responsive: [
            //     {
            //         breakpoint: 768,
            //         settings: {
            //             item: 3
            //         }
            //     },
            //     {
            //         breakpoint: 460,
            //         settings: {
            //             item: 2
            //         }
            //     }
            // ]
        });

    };

    var init_arrow = function(){

        var first_client = $('.our-clients__item').first()
            first_client_left = first_client.position().left,
            first_client_width = first_client.width(),
            arrow_pos = first_client_left + first_client_width * .25,
            arrow_el = $('#our-clients__arrow');

        arrow_el.css('left', arrow_pos + 'px');

    };


    var clients_feedback = function(){

        var client = $('.our-clients__item');

        client.on('click', function(){
            
            var $this = $(this),
                client_id = $this.attr('data-client');

            $('.our-clients__item').removeClass('our-clients__item--active');
            $('.our-clients__feedback-item').removeClass('our-clients__feedback-item--active');

            $this.addClass('our-clients__item--active');
            $("#"+client_id).addClass('our-clients__feedback-item--active');

            var handle_arrow = function(el){
                var el_left = el.position().left,
                    el_width = el.width(),
                    arrow_pos = el_left + el_width * .25;
    
                $('#our-clients__arrow').animate({
                    left: arrow_pos + 'px'
                },1000);
            };

            handle_arrow($this);

        });       

    };

    scroll_to('banner-goto', 'what-we-do');
    scroll_to('what-we-do-goto', 'how-we-work');
    scroll_to('how-we-work-goto', 'our-clients');
    scroll_to('our-clients-goto', 'hire-us');    
    
    clients_slider();

    init_arrow();

    clients_feedback();

});