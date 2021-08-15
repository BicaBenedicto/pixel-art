const color = document.querySelectorAll('.color');

window.onload = function() {
  inicio();
}

function inicio() {
  let buttonVQV = document.getElementById('board-size');
  const borda = 5 * 42;
  const px = 'px';
  
  buttonVQV.type = 'number';
  buttonVQV.min = '1';

  addPixel(5);

  colorBorder.style.width = borda + px;
  colorBorder.style.height = borda + px;
}

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

function addPixel(number) {
  let numberPixels = number * number;
  for (let index = 1; index <= numberPixels; index += 1) {
    let pixel = document.createElement('div');

    pixel.className = 'pixel';
    colorBorder.appendChild(pixel);
  }
}

function removePixel() {
  const pixels = document.querySelectorAll('.pixel');

  for (const index of pixels) {
    index.remove();
  }
}

function checkRange(range) {
  let tamanho = range;
  if (range < 5) {
    tamanho = 5;
  } else if (range > 50) {
    tamanho = 50;
  }
  return tamanho;
}
function pixelPanel() {
  let numberPixels = document.getElementById('board-size').value;
  if (numberPixels) {
      numberPixels = checkRange(numberPixels);
      removePixel();
      addPixel(numberPixels);
      const borda = numberPixels * 42;
      const px = 'px';
      colorBorder.style.width = borda + px;
      colorBorder.style.height = borda + px;
  } else {
    alert('Board inválido!');
  }
}

const buttonAddPixel = document.getElementById('generate-board');
buttonAddPixel.addEventListener('click', pixelPanel);

function generateColor() {
  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);
  let colorGenerate = `rgb(${r}, ${g}, ${b})`;

  return colorGenerate;
}

function getInitColor() {
  let colorPaletteChildren = document.querySelectorAll('.color');

  for(let index = 1; index < colorPaletteChildren.length; index += 1) {
    colorPaletteChildren[index].style.backgroundColor = generateColor();
    console.log(colorPaletteChildren[index]);
    console.log(generateColor());
  }
}

getInitColor();