document.addEventListener('DOMContentLoaded', function () {
    var imageContainer = document.getElementById('intro');
    //Array das imagens
    var imageSources = [
        'images/poster.png',
        'images/CCC.png',
        'images/credencial.png',
        'images/SA.png',
        'images/dot.png'
    ];

    var usedImages = [];

    imageContainer.addEventListener('click', function (event) {
        // Ver se todas as imagens estão a ser usadas
        if (usedImages.length === imageSources.length) {
            usedImages = [];
        }
        //Ir buscar uma imagem random não usada ao array
        var unusedImageSources = imageSources.filter(function (source) {
            return !usedImages.includes(source);
        });

        var randomIndex = Math.floor(Math.random() * unusedImageSources.length);
        var randomImageSource = unusedImageSources[randomIndex];
        //Imagem usada
        usedImages.push(randomImageSource);
        //Cria elemento imagem
        var img = document.createElement('img');
        //Atribuir a src à img
        img.src = randomImageSource;
        //Atribuir estilo à img
        img.style.position = 'absolute';


        img.style.left = (event.clientX - 50 - img.width / 2) + 'px';

        img.style.top = (event.clientY - img.height / 2) + 'px';

        img.classList.add('bounce');

        img.onload = function () {
            var aspectRatio = img.width / img.height;

            if (aspectRatio >= 1) {
                img.style.width = '450px';
                img.style.height = 'auto';
            } else {
                img.style.width = 'auto';
                img.style.height = '450px';
            }
            //Imagens centradas e atuazlia a pos segundo o click
            img.style.left = (event.clientX - 230 - img.clientWidth / 2) + 'px';
            img.style.top = (event.clientY - 160 - img.clientHeight / 2) + 'px';
            // Acrescenta a imagem ao contentor respetivo
            imageContainer.appendChild(img);
        };
    });
});

function drop(target, event) {
    event.preventDefault();
    target.innerHTML = event.dataTransfer.getData("text/plain");
};






