export class Popup {
  constructor(popupName) {
    this.popup = popupName;
    this.close = this.close.bind(this);
  }

  open() {
    this.popup.classList.add('popup_opened');
    this._setListeners();
    document.querySelector('.body').append(this.popup);
    document.querySelector('.header').classList.add('hidden');
  }

  close() {
    this.popup.closest('.popup').classList.remove('popup_opened');
    this._deleteListeners();
    document.querySelector('.header').classList.remove('hidden');
  }

  _setListeners() {
    this.popup.querySelector('.popup__close').addEventListener('click', this.close);
  }

  _deleteListeners() {
    this.popup.querySelector('.popup__close').removeEventListener('click', this.close);
  }

}
