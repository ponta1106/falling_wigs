const ojisan = document.getElementById('ojisan');
const wig = document.getElementById('wig');
const uni = document.getElementById('uni');
const timer = document.getElementById('timer');
const pointArea = document.getElementById('pointArea');

let stopCountUp;
let stopCountDown;

// 座標を取得

let y = 0;
let defaultTime = 100;
let num = 20;
let point = 0;
let wigLeft;
let ojisanLeft = 0;
wigLeft = Math.floor(Math.random() * 230)
wig.style.left = wigLeft + 'px';

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
        y = 0;
    }

    uni.style.top = y + 'px';
    uni.style.display = 'block';
    wig.style.top = y + 'px';
    wig.style.display = 'block';
    y += 10;
    
    if(y > 240){
        y = 0;
        wigLeft = Math.floor(Math.random() * 230)
        uniLeft = Math.floor(Math.random() * 230)
        console.log(wigLeft);
        console.log(uniLeft);
        uni.style.left = uniLeft + 'px';
        wig.style.left = wigLeft + 'px';
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
