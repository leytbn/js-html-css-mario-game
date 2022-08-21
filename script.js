const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const posicaoPipe = pipe.offsetLeft;
    const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px','');

    console.log('loop');

    if (posicaoPipe <= 120 && posicaoPipe > 0 && posicaoMario <= 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${posicaoPipe}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${posicaoMario}px`;

        mario.src = './imgs/game-over.png';
        mario.style.width = '75px';
        mario.style.margin = '20px';
        
        clearInterval (loop);
    }

}, 10);

document.addEventListener('keydown', jump);