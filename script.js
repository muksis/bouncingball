let velocityX = 3;
let velocityY = 5;
let positionX = 0;
let positionY = 0;
let reverseX = false;
let reverseY = false;
const ball = document.querySelector('#ball');

function moveBall() {
  const Xmin = 0;
  const Xmax = 500;

  const Ymin = 0;
  const Ymax = 500;
  
  ball.style.left = positionX + 'px';
  ball.style.top = positionY + 'px';

  if (reverseX) {
    positionX -= velocityX;
  } else {
    positionX += velocityX;
  }

  if (reverseY) {
    positionY -= velocityY;  
  } else {
    positionY += velocityY;
  }

  if (positionX > Xmax) {
    reverseX = true;
    ball.style.background = '#e28743';
  } else if (positionX === Xmin) {
    reverseX = false;
    ball.style.background = '#063970';
  }
  if (positionY > Ymax) {
    reverseY = true;
    ball.style.background = '#eab676';
  } else if (positionY === Ymin) {
    reverseY = false;
    ball.style.background = '#69bdd2';
    }
  }

setInterval(moveBall, 20);