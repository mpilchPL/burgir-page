$('.menu-expander').click(function (e) { 
    console.log("burgir");
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
     $('#myModal').fadeIn();
 });

 $('.close').click(function (e) { 
     $('#myModal').fadeOut();
 });


 $(window).click(function (e) { 
     
    
     if ($(e.target) == $('#myModal')) {
        $('#myModal').fadeOut();
     }
 });