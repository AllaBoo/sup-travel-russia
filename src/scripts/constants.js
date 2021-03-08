import { Header } from './Header';
import { Popup } from './Popup';

export const headerIcon = document.querySelector('.header__icon');
export const leadButton = document.querySelector('#leadButton');
export const leadPopup = document.querySelector('#leadPopup');
export const teamPopup = document.querySelector('#teamPopup');
export const photoPopup = document.querySelector('#photoPopup');
export const closeButton = document.querySelector('.popup__close');
export const photo = document.querySelector('popup__photo');
export const denis = document.querySelector('#denis');
export const popupLead = new Popup(leadPopup);
export const header = new Header();

function setHeaderListeners() {
  leadButton.addEventListener('click', () => popupLead.open());
  headerIcon.addEventListener('click', () => header.openMenu());
}

export { setHeaderListeners };