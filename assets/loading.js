// Background rotation
$(document).ready(function() {

    var $body = $('body');
    var classes = ['', 'b2', 'b3'];
    var index = 0;

    var preloadedImages = [];
    preloadedImages[0] = new Image();
    preloadedImages[0].src = '/assets/images/led_2.jpg';
    preloadedImages[1] = new Image();
    preloadedImages[1].src = '/assets/images/led_3.jpg';

    setInterval(function() {

        $body.removeClass(classes.join(' '));

        $body.addClass(classes[index]);

        index = (index + 1) % classes.length;
    }, 1500);
});
