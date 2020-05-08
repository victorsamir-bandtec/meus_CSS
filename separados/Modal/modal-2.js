
const imagens = document.querySelectorAll('img');

const modal_container = document.querySelector('.modal-container');

const modal_img = document.querySelector('.modal-img');

const fechar = document.querySelector('.fechar');

let img_Src = "";



for (let i = 0; i < imagens.length; i++) {
  imagens[i].addEventListener('click', () => {

    img_Src = imagens[i].getAttribute('src');
    modal_img.setAttribute('src', img_Src);
    modal_container.classList.toggle('mostrar');

  });
}

fechar.addEventListener('click', () => modal_container.classList.toggle('mostrar'));