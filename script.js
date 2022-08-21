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

    if (posicaoPipe <= 120) {

        pipe.style.animation = 'none';
        pipe.style.left = '${posicaoPipe}px'
    }

}, 10);

document.addEventListener('keydown', jump);