const logo = document.querySelector('#logo');
const menu = document.querySelector('.menu');
const fundo = document.querySelector('.fundo');
const texto = document.querySelector('.texto');
const slider = document.querySelector('.slider');



const tl = new TimelineMax();

tl.fromTo(
  fundo,
  1.2,
  { height: "0%" },
  { height: "100%", ease: Power2.easeInOut }
).fromTo(
  fundo,
  1.4,
  { width: "80%" },
  { width: "100%", ease: Power2.easeInOut }
).fromTo(
  slider,
  1.2,
  { x: "-100%" },
  { x: "0%", ease: Power2.easeInOut }, "-=1.2"

);