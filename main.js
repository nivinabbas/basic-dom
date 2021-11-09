const header = document.createElement('h1');
const subHeader = document.createElement('h2');
header.innerHTML = 'The Best Game Ever';
subHeader.innerHTML = 'Created game by Nivin';
header.style.color = '#c0392b';
subHeader.style.color = 'green';
header.style.fontFamily = 'Helvetica';
subHeader.setAttribute('class', 'sub-header');
document.body.appendChild(header);
document.body.appendChild(subHeader);

// console.log(document);
const playingField = document.getElementById('playing-field');
// console.log(playingField);

const down = document.getElementById('down');
// console.log(down);

const ball = document.getElementById('block');

ball.style.backgroundColor = 'yellow';

const moveRight = function () {
  let num = parseInt('15px'); //15
  let x = parseInt(document.getElementById('block').style.left) + num || 0;
  x += 'px';
  document.getElementById('block').style.left = x;
};
