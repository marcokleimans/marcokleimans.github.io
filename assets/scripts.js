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
    // Underline on Click
    var $megaMenuItem = $('.mega-menu a')
    $($megaMenuItem).on('click', function() {
        // Remove 'active' class from all menu items
        $($megaMenuItem).removeClass('active');

        // Add 'active' class to the clicked menu item
        $(this).addClass('active');
    });
    // Stop scroll before the H2 tag
    var menuHeight = $('.mega-menu').outerHeight(); // Get the height of the sticky menu
    $($megaMenuItem).on('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        var target = $(this.getAttribute('href'));
        if (target.length) {
            var scrollOffset = target.offset().top - menuHeight - 20;
            $('html, body').animate({
                scrollTop: scrollOffset
            }, 0);
        }
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
/*********
 CALCULATE AGE
 *********/
    var birthDate = new Date(1998, 7, 8); // Month is 0-indexed (7 = August)
    var today = new Date();
    var years = today.getFullYear() - birthDate.getFullYear();
    var isBeforeBirthday = (today.getMonth() < birthDate.getMonth()) ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate());
    if (isBeforeBirthday) {
        years--;
    }
    var lastBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (isBeforeBirthday) {
        lastBirthday.setFullYear(today.getFullYear() - 1);
    }
    var daysSinceLastBirthday = Math.floor((today - lastBirthday) / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    $('.age').text(years + ' years and ' + daysSinceLastBirthday + ' days old');
/*********
 LAST PUSH
*********/
    var repoOwner = 'marcokleimans';
    var repoName = 'marcokleimans.github.io';

    $.get(`https://api.github.com/repos/${repoOwner}/${repoName}/events`, function(data) {
        var lastPushEvent = data.find(event => event.type === 'PushEvent');
        if (lastPushEvent) {
            var lastPushTimestamp = lastPushEvent.created_at;
            var lastPushDate = new Date(lastPushTimestamp);
            const options = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            };
            var formattedDate = lastPushDate.toLocaleString("en-US", options);
            $('.last-push').text(formattedDate);
        }
    });

});


