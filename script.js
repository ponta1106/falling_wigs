const ojisan = document.getElementById('ojisan');
const wig = document.getElementById('wig');

let y = 10;
let count = 0;

const countUp = ()=> {
    wig.style.top = y + 'px';
    setTimeout(countUp, 100);
    y += 10;

    if(y > 260){
        y = 0;
    }
}

countUp();
