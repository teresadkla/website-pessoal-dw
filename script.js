document.addEventListener('DOMContentLoaded', function () {
    var imageContainer = document.getElementById('intro');

    // Array of image sources
    var imageSources = [
        'images/poster.png',
        'images/1.png',
        'images/relogio.png'
        // Add more image sources as needed
    ];

    var usedImages = [];

    document.addEventListener('click', function (event) {
        // Check if all images have been used
        if (usedImages.length === imageSources.length) {
            // If all images have been used, reset the used images array
            usedImages = [];
        }

        // Get an unused random image source from the array
        var unusedImageSources = imageSources.filter(function (source) {
            return !usedImages.includes(source);
        });

        var randomIndex = Math.floor(Math.random() * unusedImageSources.length);
        var randomImageSource = unusedImageSources[randomIndex];

        // Mark the image as used
        usedImages.push(randomImageSource);

        // Create an image element
        var img = document.createElement('img');

        // Set the source of the image
        img.src = randomImageSource;

        // Set the position based on the click coordinates
        img.style.position = 'absolute';
        img.style.left = (event.clientX - img.width / 2) + 'px';
        img.style.top = (event.clientY - img.height / 2) + 'px';

        // Add the 'bounce' class to apply the animation
        img.classList.add('bounce');

        // Load the image to get its natural width and height
        img.onload = function () {
            // Calculate the aspect ratio
            var aspectRatio = img.width / img.height;

            // Set the width and height based on the aspect ratio
            if (aspectRatio >= 1) {
                img.style.width = '300px';
                img.style.height = 'auto';
            } else {
                img.style.width = 'auto';
                img.style.height = '300px';
            }

            // Update the position based on the click coordinates
            img.style.left = (event.clientX - img.clientWidth / 2) + 'px';
            img.style.top = (event.clientY - img.clientHeight / 2) + 'px';

            // Append the image to the container
            imageContainer.appendChild(img);
        };
    });
});