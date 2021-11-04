const os = 0;
jQuery(function($) {

    
    $('.about-us-link').click(function() { $.scrollTo($('#about-us'), {duration: 500, offset: os}); });
    $('#link2').click(function() { $.scrollTo($('#services'), {duration: 500, offset: os}); });
    $('#link3').click(function() { $.scrollTo($('#doctors'), {duration: 500, offset: os}); });
    $('#link4').click(function() { $.scrollTo($('#footer'), {duration: 500, offset: os}); });
    
    $('#scrollup').click(function() { $.scrollTo($('body'), 500); });
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