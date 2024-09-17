$(document).ready(function(){
    $('#play').click(function(){
        var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow, #bulb_red, #bulb_blue, #bulb_green, #bulb_pink, #bulb_orange').addClass('bulb-glow-yellow-after bulb-glow-red-after bulb-glow-blue-after bulb-glow-green-after bulb-glow-pink-after bulb-glow-orange-after');
        $('body').css('backgroud-color','#FFF');
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(6000).promise().done(function(){
            $('#bannar_coming').fadeIn('slow');
        });
    });
});