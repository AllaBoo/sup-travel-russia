import '../styles/contacts.css';
import { Header } from './Header';
const header = new Header();
import { headerIcon, leadButton, leadPopup, closeButton } from './constants';
headerIcon.addEventListener('click', () => header.openMenu());

leadButton.addEventListener('click', () => {
  leadPopup.classList.add('popup_opened');
  document.querySelector('.body').append(leadPopup);
});

closeButton.addEventListener('click', () => {
  leadPopup.closest('.popup').classList.remove('popup_opened');
});