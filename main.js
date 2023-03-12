const listaDeTeclas = document.querySelectorAll('.tecla');
const len = listaDeTeclas.length;
const audios = {};
let audioAtual;

function tocaSom(seletorAudio) {
  const elemento = audios[seletorAudio];
  
  if (elemento) {
    if (audioAtual && audioAtual !== elemento) {
      audioAtual.pause();
    }
    elemento.play();
    audioAtual = elemento;
  } else {
    console.log('Elemento não encontrado ou seletor inválido');
  }
}

for (let contador = 0; contador < len; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;
  
  audios[idAudio] = document.querySelector(idAudio);
  
  tecla.addEventListener('click', function() {
    tocaSom(idAudio);
  });
  
  tecla.addEventListener('keydown', function(evento) {
    if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.add('ativa');
    }
  });
  
  tecla.addEventListener('keyup', function() {
    tecla.classList.remove('ativa');
  });
}
