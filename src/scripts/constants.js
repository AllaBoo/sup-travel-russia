import { Header } from './Header';
import { PopupLead } from './PopupLead';
import { FormValidator } from './FormValidator';

export const headerIcon = document.querySelector('.header__icon');
export const leadButton = document.querySelector('#leadButton');
export const leadPopup = document.querySelector('#leadPopup');
export const teamPopup = document.querySelector('#teamPopup');
export const leadForm = document.querySelector('#lead-form');
export const photoPopup = document.querySelector('#photoPopup');
export const closeButton = document.querySelector('.popup__close');
export const photo = document.querySelector('popup__photo');
export const bookingPopup = document.querySelector('#bookingPopup');
export const bookingForm = document.querySelector('#booking-form');
export const bookingButton = document.querySelector('#bookingButton');
export const formValidator = (...arg) => new FormValidator(...arg);
export const popupLead = new PopupLead(leadPopup, formValidator, leadForm);
export const header = new Header();

function setHeaderListeners() {
  leadButton.addEventListener('click', () => popupLead.open());
  headerIcon.addEventListener('click', () => header.openMenu());
}

export { setHeaderListeners }