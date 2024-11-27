$('button').click(function () {
var targets = $(this).prop({ariaExpanded: true});
$('html, body').animate({scrollTop: $(targets).offset().top - 60 }, 900);
return false;
});

$('a[href^="#"]').click(function () {
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top - 60 }, 900);
return false;
});


$(document).ready(function(){
    //Event for pushed the video
    $('#carousel2').carousel({
        pause: true,
        interval: false
    });
});