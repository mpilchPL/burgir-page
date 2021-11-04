$('.menu-expander').click(function (e) { 
    if ($('.menu-collapsable').css("display") == 'none') {
        $('.menu-collapsable').slideDown();
        $('audio#burgirAudio')[0].play();
    }
    else {
        HideExpandableMenu();
    }
    
});

$('#btn-order-table').click(function (e) { 
    location.href='../booking/booking.html';
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
     if (e.target == document.getElementById("myModal")) {
        $('#myModal').fadeOut();
     }
 });

 $('#logo-img').click(function (e) { 
     $('audio#sound')[0].play();
 });