document.addEventListener('DOMContentLoaded', function () {
    var imageContainer = document.getElementById('intro');

    document.addEventListener('click', function (event) {
        // Create an image element
        var img = document.createElement('img');

        // Set the source of the image (replace 'path/to/your/image.png' with your actual image path)
        img.src = 'path/to/your/image.png';

        // Set the position based on the click coordinates and image dimensions
        img.style.position = 'absolute';

        // Calculate the left position to center the image horizontally
        img.style.left = (event.clientX - img.width / 2) + 'px';

        // Calculate the top position to center the image vertically
        img.style.top = (event.clientY - img.height / 2) + 'px';

        // Append the image to the container
        imageContainer.appendChild(img);
    });
});
