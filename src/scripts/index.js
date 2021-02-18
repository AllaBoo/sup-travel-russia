import '../styles/index.css';
import { Header } from './Header';

const headerIcon = document.querySelector('.header__icon');
const leadButton = document.querySelector('#leadButton');
const leadPopup = document.querySelector('#leadPopup');
const closeButton = document.querySelector('.popup__close');
const header = new Header();

headerIcon.addEventListener('click', () => header.openMenu());

leadButton.addEventListener('click', () => {
  leadPopup.classList.add('popup_opened');
  document.querySelector('.body').append(leadPopup);
});

closeButton.addEventListener('click', () => {
  leadPopup.closest('.popup').classList.remove('popup_opened');
});