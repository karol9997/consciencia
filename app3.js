
const elementos = document.querySelectorAll('.texto, .imagem');

function aparecerAoRolar() {
  const alturaJanela = window.innerHeight;
  elementos.forEach(el => {
    const posicao = el.getBoundingClientRect().top;
    if (posicao < alturaJanela - 100) el.classList.add('visivel');
  });
}
window.addEventListener('load', aparecerAoRolar);
window.addEventListener('scroll', aparecerAoRolar);


const modalAutores = document.getElementById('modal-autores');
const btnAutores = document.getElementById('btn-autores');
const fecharAutores = document.getElementById('modal-close-autores');
const fecharAutores2 = document.getElementById('modal-close-autores-2');

btnAutores.addEventListener('click', () => abrirModal(modalAutores));
fecharAutores.addEventListener('click', () => fecharModal(modalAutores));
fecharAutores2.addEventListener('click', () => fecharModal(modalAutores));


const modalImagens = document.getElementById('modal-imagens');
const btnImagens = document.getElementById('btn-imagens');
const fecharImagens = document.getElementById('modal-close-imagens');
const fecharImagens2 = document.getElementById('modal-close-imagens-2');

btnImagens.addEventListener('click', () => abrirModal(modalImagens));
fecharImagens.addEventListener('click', () => fecharModal(modalImagens));
fecharImagens2.addEventListener('click', () => fecharModal(modalImagens));


function abrirModal(modal) {
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function fecharModal(modal) {
  modal.hidden = true;
  document.body.style.overflow = '';
}

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target.dataset.close) e.target.closest('.modal').hidden = true;
  });
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    [modalAutores, modalImagens].forEach(modal => {
      if (!modal.hidden) fecharModal(modal);
    });
  }
});
