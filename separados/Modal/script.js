
function mostrar_modal(abrir, onde, fechar) {

  const mostrar = document.querySelector(abrir);
  const modal = document.querySelector(onde);
  const sair = document.querySelector(fechar);

  mostrar.addEventListener('click', () => modal.classList.add('mostrar'));

  sair.addEventListener('click', (e) => {

    console.log(e.target);

    if (e.target.className !== '') {
      modal.classList.remove('mostrar');
    }
  });
}

mostrar_modal('.foto-5', '.modal-container', '.fechar');


