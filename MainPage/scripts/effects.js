$('.menu-expander').click(function (e) { 
    e.preventDefault();
    if ($('.menu-collapsable').css("display") == 'none') {
        $('.menu-collapsable').slideDown();
    }
    else {
        HideExpandableMenu();
    }
    
});

function HideExpandableMenu() { 
    $('.menu-collapsable').slideUp();
 }

 $('.menu-collapsable').click(function (e) { 
     HideExpandableMenu();
     
 });

 // MAP
 $('#btn-map').click(function (e) { 
     e.preventDefault();
     $('#myModal').fadeIn();
 });

 $('.close').click(function (e) { 
     e.preventDefault();
     $('#myModal').fadeOut();
 });


 $(window).click(function (e) { 
     e.preventDefault();
     
     console.log($('#myModal'));
     console.log(e.target);
     if ($(e.target) == $('#myModal')) {
        $('#myModal').fadeOut();
     }
 });