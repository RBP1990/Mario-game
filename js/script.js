const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
      mario.classList.add('jump');

setTimeout(() => {  mario.classList.remove('jump');}, 500);

}

const loop = setInterval(() => {
      const pipePosition = pipe.offsetLeft;
      const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');

      console.log(marioPosition);

      if (pipePosition <= 120 && marioPosition < 100) {
            pipe.style.animation = 'none'; // corrigido para parar a animação
            pipe.style.left = `${pipePosition}px`; //Mantém a posição do pipe
      }
      }, 10);
window.document.addEventListener('keydown', jump);