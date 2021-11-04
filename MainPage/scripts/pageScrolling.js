const os = 0;
jQuery(function($) {

    $('.about-us-link').click(function() { $.scrollTo($('#about-us'), {duration: 500, offset: os}); });
    $('.contact-link').click(function() { $.scrollTo($('#contact'), {duration: 500, offset: os}); });
}
);


$(window).scroll(
    function() {
        if($(this).scrollTop() > 200) {
            $('#btn-goto-about').fadeOut("fast");
        }
        else {
            $('#btn-goto-about').fadeIn("fast");
        } 
    }
    
);