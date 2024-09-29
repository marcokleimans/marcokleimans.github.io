$(document).ready(function() {
/***********
 THEME TOGGLE
 **********/
    var $body = $('body');
    var $checkbox = $('#switch');

    // Set initial theme based on checkbox state
    if ($checkbox.is(':checked')) {
        $body.removeClass('light-theme').addClass('dark-theme');
    } else {
        $body.removeClass('dark-theme').addClass('light-theme');
    }

    // Toggle theme when checkbox is clicked
    $checkbox.on('change', function() {
        if ($checkbox.is(':checked')) {
            $body.removeClass('light-theme').addClass('dark-theme');
        } else {
            $body.removeClass('dark-theme').addClass('light-theme');
        }
    });
/***********
 MENU BORDER
 **********/
    var $megaMenuItem = $('.mega-menu a')
    $($megaMenuItem).on('click', function() {
        // Remove 'active' class from all menu items
        $($megaMenuItem).removeClass('active');

        // Add 'active' class to the clicked menu item
        $(this).addClass('active');
    });
/***************
 HAMBURGER MENU
******************/
    // Toggle menu open/close on clicking the bars icon
    $('.hamburger-toggle').on('click', function() {
        $('.hamburger-menu-container').toggleClass('open'); // Toggle the 'open' class
    });

    // Close the menu when a menu item is clicked
    $('.hamburger-menu a').on('click', function() {
        $('.hamburger-menu-container').removeClass('open'); // Remove 'open' class to close menu
    });
});
//Background rotation
// $(document).ready(function() {
//     var $body = $('body');
//     var classes = ['', 'img_2', 'img_3']; // The classes to cycle through, including no class (empty string).
//     var index = 0;
//
//     setInterval(function() {
//         // Remove any previous class
//         $body.removeClass(classes.join(' '));
//
//         // Add the next class in the cycle
//         $body.addClass(classes[index]);
//
//         // Update index for next cycle
//         index = (index + 1) % classes.length; // Cycle through the classes
//     }, 1500); // 10,000 milliseconds = 10 seconds
// });
//


