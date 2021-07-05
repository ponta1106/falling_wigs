const ojisan = document.getElementById('ojisan');
const wig = document.getElementById('wig');
const timer = document.getElementById('timer');
const pointArea = document.getElementById('pointArea');
const effect = document.getElementById('effect');
const modal = document.getElementById('modal');
const resultArea = document.getElementById('resultArea');

let stopCountUp;
let stopCountDown;

let y = 0;
let defaultTime = 10;
let point = 0;
let ojisanLeft = 0;

const countUp = ()=> {

	let wigPosition = wig.getBoundingClientRect();
	let wigLeft = wigPosition.left;
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
			pointArea.textContent = point;
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
			modal.style.top = 100 + 'px';
			resultArea.textContent = point;
		}
	}

countDown();

addEventListener( "keydown", keydownfunc );

function keydownfunc(e) {
	
	if(e.keyCode === 37){
		if(!ojisan.classList.contains('turn')) {
			ojisan.classList.add('turn');
		};
		ojisanLeft -= 10;
		ojisan.style.left = ojisanLeft + 'px';
	};
	
	if(e.keyCode === 39){
		if(ojisan.classList.contains('turn')) {
			ojisan.classList.remove('turn');
		};
		ojisanLeft += 10;
		ojisan.style.left = ojisanLeft + 'px';
	};
	
}
