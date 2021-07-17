const ojisan = document.getElementById('ojisan');
const wig = document.getElementById('wig');
const timer = document.getElementById('timer');
const pointArea = document.getElementById('pointArea');
const effect = document.getElementById('effect');
const modal = document.getElementById('modal');
const resultArea = document.getElementById('resultArea');
const left = document.getElementById('left');
const right = document.getElementById('right');
let wigLeft = Math.floor(Math.random() * 230)
wig.style.left = wigLeft + 'px';

let stopCountUp;
let stopCountDown;

let y = 0;
let defaultTime = 30;
let point = 0;
let ojisanLeft = 120;

var lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    var now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

const countUp = ()=> {

	let wigPosition = wig.getBoundingClientRect();
	wigLeft = wigPosition.left;
	let wigRight = wigPosition.right;
	let wigBottom = wigPosition.bottom;
	let ojisanPosition = ojisan.getBoundingClientRect();
	let ojisanTop = ojisanPosition.top;
	let ojisanLeft = ojisanPosition.left;
	let ojisanRight = ojisanPosition.right;
	
	// 当たり判定
	if(
		wigBottom > ojisanTop &&
		wigRight > ojisanLeft &&
		wigLeft < ojisanRight){
			point += 10;
			effect.style.display = 'block';
			y = 0;
			wigLeft = Math.floor(Math.random() * 230)
			wig.style.left = wigLeft + 'px';
		}
		
		wig.style.top = y + 'px';
		wig.style.display = 'block';
		y += 10;
		
		if(y > 240){
			y = 0;
			wig.style.display = 'none';
			wigLeft = Math.floor(Math.random() * 230)
			wig.style.left = wigLeft + 'px';
		}
		
		stopCountUp = setTimeout(countUp, 100);
	}
	
	countUp();
	
	const countDown = ()=> {
		effect.style.display = 'none';
		timer.textContent = defaultTime;
		defaultTime -= 1
		stopCountDown = setTimeout(countDown, 1000);

		// 制限時間が過ぎるとゲーム終了
		if(defaultTime < 0){
			clearTimeout(stopCountUp);
			clearTimeout(stopCountDown);
			modal.style.top = 60 + 'px';
			resultArea.textContent = point;
		}
	}

countDown();

left.addEventListener('mousedown', ()=> {
	if(!ojisan.classList.contains('turn')) {
		ojisan.classList.add('turn');
	};
	ojisanLeft -= 20;
	ojisan.style.left = ojisanLeft + 'px';
})

right.addEventListener('mousedown', ()=> {
	if(ojisan.classList.contains('turn')) {
		ojisan.classList.remove('turn');
	};
	ojisanLeft += 20;
	ojisan.style.left = ojisanLeft + 'px';
})
