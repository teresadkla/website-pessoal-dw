document.addEventListener('DOMContentLoaded', function () {
    var imageContainer = document.getElementById('intro');

    // Array de imagens
    var imageSources = [
        'images/poster.png',
        'images/1.png',
        'images/relogio.png'
    
    ];

    var usedImages = [];

    imageContainer.addEventListener('click', function (event) {
        // Ver se todas as imagens estão a ser usadas
        if (usedImages.length === imageSources.length) {
            // Se sim dar reset no array de imgs
            usedImages = [];
        }


        //Ir buscar uma imagem random não usada ao array
        var unusedImageSources = imageSources.filter(function (source) {
            return !usedImages.includes(source);
        });

        var randomIndex = Math.floor(Math.random() * unusedImageSources.length);
        var randomImageSource = unusedImageSources[randomIndex];

        // Marca a imagem como usada
        usedImages.push(randomImageSource);

        // Cria um elemento imagem
        var img = document.createElement('img');

        // Set a src nessa imagem
        img.src = randomImageSource;

        // Set na posição segundo o click
        img.style.position = 'absolute';
        img.style.left = (event.clientX - img.width / 2) + 'px';
        img.style.top = (event.clientY - img.height / 2) + 'px';

        // Efeito bounce
        img.classList.add('bounce');

        // Load img mantendo as suas proporções originias
        img.onload = function () {
            // Calcula o aspect ratio
            var aspectRatio = img.width / img.height;

            
            if (aspectRatio >= 1) {
                img.style.width = '300px';
                img.style.height = 'auto';
            } else {
                img.style.width = 'auto';
                img.style.height = '300px';
            }

            // Atualiza a posição segundo o click
            img.style.left = (event.clientX - img.clientWidth / 2) + 'px';
            img.style.top = (event.clientY - img.clientHeight / 2) + 'px';

            // Acrescenta a imagem ao contentor respetivo
            imageContainer.appendChild(img);
        };
    });
});


function drop(target, event) {
    event.preventDefault();
    target.innerHTML = event.dataTransfer.getData("text/plain");
  };

  