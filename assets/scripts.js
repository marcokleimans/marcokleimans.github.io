
//Background rotation
$(document).ready(function() {
    var $body = $('body');
    var classes = ['', 'img_2', 'img_3']; // The classes to cycle through, including no class (empty string).
    var index = 0;

    setInterval(function() {
        // Remove any previous class
        $body.removeClass(classes.join(' '));

        // Add the next class in the cycle
        $body.addClass(classes[index]);

        // Update index for next cycle
        index = (index + 1) % classes.length; // Cycle through the classes
    }, 1500); // 10,000 milliseconds = 10 seconds
});



