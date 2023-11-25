//DRAG E DROP PARA COMPLETAR O STICKER/ ILUSTRAÇÃO --> criação de uma dropzone 
//Código inspo exemplos do Interact.js


interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of the entire document
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'document',
        endOnly: false // Apply restriction during the entire drag
      })
    ],
    // enable autoScroll
    autoScroll: true,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,

      // call this function on every dragend event
      end(event) {
        var textEl = event.target.querySelector('#frase')
        textEl && (textEl.innerHTML =
          'moved a distance of ' +
          (Math.sqrt(Math.pow(event.pageX - event.x0, 2) + Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px')



      }
    }
  })
//-------------------------------------------

interact('#base')
  .dropzone({
    // Ativar dropzone no elemento base
    accept: '.draggable', // Aceitar apenas elementos com a classe "draggable"
    overlap: 0.75, // Ajustar esse valor conforme necessário para determinar a sobreposição
    ondropactivate: function (event) {
      // Adicionar classe ao elemento base durante a ativação da zona de soltar
      event.target.classList.add('drop-active');
    },
    ondragenter: function (event) {
      // Adicionar classe ao elemento base quando um elemento é arrastado sobre ele
      var draggableElement = event.relatedTarget;
      draggableElement.classList.add('can-drop');
    },
    ondragleave: function (event) {
      // Remover classe do elemento base quando um elemento deixa a área de soltar
      var draggableElement = event.relatedTarget;
      draggableElement.classList.remove('can-drop');
    },
    ondrop: function (event) {
      // Verificar se os elementos "olhos" e "sorriso" estão sobrepostos
      var olhos = document.getElementById('olhos');
      var sorriso = document.getElementById('sorriso');
      var base = event.target;

      if (isOverlapping(olhos, base) && isOverlapping(sorriso, base)) {
        // Se sobrepostos, mostrar a frase
        document.getElementById('frase').style.display = 'flex';
      }
    },
    ondropdeactivate: function (event) {
      // Remover classe do elemento base durante a desativação da zona de soltar
      event.target.classList.remove('drop-active');
    }
  });

// Função para verificar se dois elementos estão sobrepostos
function isOverlapping(element1, element2) {
  var rect1 = element1.getBoundingClientRect();
  var rect2 = element2.getBoundingClientRect();

  return (
    rect1.left < rect2.right &&
    rect1.right > rect2.left &&
    rect1.top < rect2.bottom &&
    rect1.bottom > rect2.top
  );
}

//--------------------------------------

function dragMoveListener(event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
  console.log('Dragging X:', event.dx, 'Dragging Y:', event.dy);

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the position attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener

