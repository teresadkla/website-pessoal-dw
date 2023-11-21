document.addEventListener('DOMContentLoaded', function () {
    var imageContainer = document.getElementById('intro');

    document.addEventListener('click', function (event) {
        // Create an image element
        var img = document.createElement('img');

        // Set the source of the image (this can be a URL or a local path)
        img.src = 'images/poster.png';

        // Set other attributes if needed (e.g., width, height, etc.)
        img.width = 100;
        img.height = 100;

        // Set the position based on the click coordinates
        img.style.position = 'absolute';
        img.style.left = (event.clientX - img.width / 2) + 'px';
        img.style.top = (event.clientY - img.height / 2) + 'px';

        // Add the 'bounce' class to apply the animation
        img.classList.add('bounce');

        // Append the image to the container
        imageContainer.appendChild(img);
    });
});