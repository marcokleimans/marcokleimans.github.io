// Background rotation
$(document).ready(function() {
    var images = $('img'); // Select all the images
    var currentIndex = 0;   // Start with the first image
    var imageCount = images.length; // Get the number of images

    // Function to cycle through the images
    function rotateImages() {
        // Hide the current image
        images.eq(currentIndex).hide();

        // Update the index to the next image (cyclically)
        currentIndex = (currentIndex + 1) % imageCount;

        // Show the next image
        images.eq(currentIndex).show(); // Optional fade effect
    }

    // Set the interval for image rotation (1.5 seconds)
    setInterval(rotateImages, 1500); // 1500ms = 1.5 seconds
});
