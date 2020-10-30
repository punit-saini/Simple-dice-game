var h1 = document.querySelector('.container h1');
var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');

h1.addEventListener('click', run);

function run() {
    oneRand = Math.floor(Math.random()*6)+1;
    twoRand = Math.floor(Math.random()*6)+1;

    img1.setAttribute('src','dice'+oneRand + '.png');
    img2.setAttribute('src','dice'+twoRand + '.png');

    if(oneRand>twoRand){
         h1.innerHTML='🚩Player One Won';
    }
    else if (oneRand<twoRand){
        h1.innerHTML='Player Two Won🚩';
    }
    else {
        h1.innerHTML='Match Tied';
    }
};

