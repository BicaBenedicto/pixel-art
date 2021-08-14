const color = document.querySelectorAll('.color');

function unselectOthers(evento) {
  for (let c of color) {
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

function changeColor(evento) {
  const event = evento;
  for (let c of color) {
    if (c.classList.contains('selected')) {
      event.target.style.backgroundColor = c.style.backgroundColor;
    }
  }
}

const colorBorder = document.getElementById('pixel-board');
colorBorder.addEventListener('click', changeColor);

function clearBorder() {
  const colorBorderChildren = document.getElementById('pixel-board').children;

  for (let c of colorBorderChildren) {
    c.style.backgroundColor = 'white';
  }
}

const buttonClear = document.getElementById('clear-board');
buttonClear.addEventListener('click', clearBorder);
