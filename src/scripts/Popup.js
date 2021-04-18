export default class Popup {
  constructor(popupName) {
    this.popup = popupName;
    this.close = this.close.bind(this);
  }

  open() {
    this.popup.classList.add('popup_opened');
    this._setListeners();
    document.querySelector('.body').append(this.popup);
    document.querySelector('.header').classList.add('hidden');
    document.querySelector('.body').classList.add('body_fixed');
  }

  clearForm() {
    this.popup.querySelectorAll('.popup__error-message').forEach((inputElement) => {
      inputElement.textContent = '';
    });
    this.popup.querySelectorAll('.popup__input').forEach((inputElement) => {
      inputElement.value = '';
      inputElement.classList.remove('popup__input_valid');
      inputElement.classList.remove('popup__input_invalid');
      inputElement.classList.add('popup__input_default');
    });
  }

  close = (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.popup.closest('.popup').classList.remove('popup_opened');
    document.querySelector('.header').classList.remove('hidden');
    document.querySelector('.body').classList.remove('body_fixed');
  }

  _setListeners() {
    this.popup.querySelector('.popup__close').addEventListener('click', this.close);
    document.addEventListener('backbutton', this.close, false);
  }

}
