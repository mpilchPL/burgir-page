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