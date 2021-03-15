import '../styles/about.css';
import { setHeaderListeners } from './constants';

const more = document.querySelector('#more');
const card = document.querySelectorAll('.team__item');
const cardContainer = document.querySelector('.team');

let showPerClick = 2;


if (window.screen.availWidth < 768) {
  showPerClick = 1;
  document.getElementById('2').classList.add('hidden');
  document.getElementById('3').classList.add('hidden');
  document.getElementById('4').classList.add('hidden');
}
else if (window.screen.availWidth < 1500) {
  showPerClick = 2;
  document.getElementById('3').classList.add('hidden');
  document.getElementById('4').classList.add('hidden');
}
else if (window.screen.availWidth < 1900) {
  showPerClick = 3;
  document.getElementById('4').classList.add('hidden');
}
else if (window.screen.availWidth > 1900) {
  showPerClick = 4;
} 

checkMoreState();

function showMore() {
  const hidden = cardContainer.querySelectorAll('.hidden');
  if (hidden.length > 0 & hidden.length > showPerClick) {
  for (var i = 0; i < showPerClick && i <= card.length; i++)
    hidden[i].classList.remove('hidden');
  } 
  if (hidden.length > 0 & hidden.length <= showPerClick) {
    showPerClick = hidden.length;
    for (var i = 0; i < showPerClick && i <= card.length; i++)
      hidden[i].classList.remove('hidden');
    } 
  checkMoreState();
}

function checkMoreState() {
  if (cardContainer.querySelector('.hidden')) {
  } else {
    more.classList.add('hidden');
  }
}

more.addEventListener('click', function() {
  showMore();

});

setHeaderListeners();