const trilhaCarrossel = document.querySelector('.carousel-track');
const itensCarrossel = document.querySelectorAll('.carousel-item');
const botaoEsquerda = document.querySelector('.carousel-button.left');
const botaoDireita = document.querySelector('.carousel-button.right');
let indiceAtual = 0;

function atualizarCarrossel() {
  const larguraItem = itensCarrossel[0].clientWidth;
  trilhaCarrossel.style.transform = `translateX(-${indiceAtual * larguraItem}px)`;
}

botaoEsquerda.addEventListener('click', () => {
  indiceAtual = (indiceAtual > 0) ? indiceAtual - 1 : itensCarrossel.length - 1;
  atualizarCarrossel();
});

botaoDireita.addEventListener('click', () => {
  indiceAtual = (indiceAtual < itensCarrossel.length - 1) ? indiceAtual + 1 : 0;
  atualizarCarrossel();
});

window.addEventListener('resize', atualizarCarrossel);
