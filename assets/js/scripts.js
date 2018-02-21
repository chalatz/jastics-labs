$(document).ready(function(){

    var close_the_menu = function(page){
        if(page == 'home'){
            $('#close-menu').hide();
            $('#close-menu').fadeOut();
            $('#nav-items').fadeOut();
            $('#nav-wrapper').fadeOut().removeClass('fixed-menu');
            $('#open-menu').fadeIn();
        }
        if(page == 'page'){
            $('#close-menu--page').hide();

            $('#site-header__logo--page').show();
            $('#hire-us-btn--page').hide();

            $('#hire-us-btn--page').removeClass('hire-us-btn--white-bordered');

            $('#close-menu--page').fadeOut();
            $('#nav-items').fadeOut();
            $('#nav-wrapper').fadeOut();
            $('#open-menu--page').fadeIn();            
        }
    }    

    var handle_home_nav = function(){
        
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
            close_the_menu('home');
        });

        // Hide menu on ESC key
        $(document).on('keydown', function(e){            
            if($('body').attr('id') == 'home' && $('#nav-items').is(':visible') && e.keyCode == 27){
                close_the_menu('home');
            }            
        });

        // Hide menu if a click takes place outside of menu area
        $(document).on('click', function(event){
            if($('body').attr('id') == 'home' && !$(event.target).closest('#nav-wrapper').length && !$(event.target).closest('#open-menu').length && !$(event.target).closest('#nav-items').length){
                close_the_menu('home');
            }
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

    var handle_page_nav = function(){

        $('#open-menu--page').on('click', function(){

            $(this).hide();

            $('#site-header__logo--page').hide();

            $('#hire-us-btn--page').addClass('hire-us-btn--white-bordered').fadeIn();

            $('#close-menu--page').fadeIn();
            $('#nav-items').fadeIn();
            $('#nav-wrapper').fadeIn().addClass('fixed-menu');

        });

        $('#close-menu--page').on('click', function(){
            close_the_menu('page');
        });
        
        // Hide menu on ESC key
        $(document).on('keydown', function(e){            
            if($('body').attr('id') != 'home' && $('#nav-items').is(':visible') && e.keyCode == 27){
                close_the_menu('page');
            }            
        });

        // Hide menu if a click takes place outside of menu area
        $(document).on('click', function(event){
            if($('body').attr('id') != 'home' && !$(event.target).closest('#nav-wrapper').length && !$(event.target).closest('#open-menu--page').length && !$(event.target).closest('#nav-items').length){
                close_the_menu('page');
            }
        });        

    };

    var expertise_tabs = function(){

        $('.expertise__tag-link').on('click', function(e){

            var $this = $(this),
            theid = $this.attr('href');

            // Hide all tabbed content
            $('.expertise__content').hide();
            //$('.expertise__content').removeClass('expertise__content--active');

            // Remove the 'active' class from the anchors
            $('.expertise__tag-link').removeClass('expertise__tag-link--active');

            // Show the tabbed content
            $(theid).fadeIn('fast');
            //$(theid).addClass('expertise__content--active');

            // Add the 'active' class to the anchor clicked
            $this.addClass('expertise__tag-link--active');

            e.preventDefault();


        });

    };

    handle_home_nav();

    handle_page_nav();

    $('#expertise').easytabs({
        tabActiveClass: 'expertise__tag--active',
        cycle: 10000
    });

    //expertise_tabs();

});