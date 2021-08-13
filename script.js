const color = document.querySelectorAll('.color');
function unselectOthers(evento) {
  for (const c of color) {
    if (evento.target !== c) {
      c.classList.remove('selected');
    }
  }
}

function select(evento) {
  if (!evento.target.classList.contains('selected')) {
    unselectOthers(evento);
    evento.target.classList.add('selected');
  }
}

const colorPalette = document.getElementById('color-palette');
colorPalette.addEventListener('click', select);