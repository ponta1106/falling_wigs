const ojisan = document.getElementById('ojisan');
const wig = document.getElementById('wig');
const timer = document.getElementById('timer');
let stopCountUp;
let stopCountDown;

let y = 0;
let defaultTime = 100;
let num = 20;
let wigLeft;
let ojisanLeft = 0;
wigLeft = Math.floor(Math.random() * 230)
wig.style.left = wigLeft + 'px';

const countUp = ()=> {
  wig.style.top = y + 'px';
  wig.style.display = 'block';
  y += 10;
  
  if(y > 240){
    wigLeft = Math.floor(Math.random() * 230)
    wig.style.left = wigLeft + 'px';
    wig.style.display = 'none';
    y = 0;
  }
  
  stopCountUp = setTimeout(countUp, 100);
}

countUp();

addEventListener( "keydown", keydownfunc );

function keydownfunc(e) {
  
  if(e.keyCode === 37){
    ojisanLeft -= 10;
    ojisan.style.left = ojisanLeft + 'px';
  };
  
  if(e.keyCode === 39){
    ojisanLeft += 10;
    ojisan.style.left = ojisanLeft + 'px';
  };
  
}

const countDown = ()=> {
  console.log(num);
  timer.textContent = num;
  num -= 1;

  stopCountDown = setTimeout(countDown, 1000);
  
  if(num < 0){
    clearTimeout(stopCountUp);
    clearTimeout(stopCountDown);
  }
  
}

countDown();
