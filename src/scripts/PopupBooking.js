import Popup from './Popup';
export class PopupBooking extends Popup {
  constructor(popupName, formValidator, formName) {
    super(popupName);
    this.formValidator = formValidator;
    this.form = formName;
  }

  open = () => {
    super.open();
    super.clearForm();
    this.form.classList.remove('hidden');
    this.popup.querySelector('.popup__title').textContent = 'Я хочу записаться';
    this.popup.querySelector('.popup__subtitle').textContent = '';
    this.formValidator(this.form).setEventListeners();
    this._setSubmitListeners();
  }

  _orderServise = (event) => {
    event.preventDefault();
      const formData = {
        fio: this.form.fio.value,
        telephone: this.form.telephone.value,
        message: this.form.message.value,
        url: document.location.href,
        servises: this.form.servises.value,
      };
      fetch('https://sup-travel-russia.com/book.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fio: formData.fio,
          telephone: formData.telephone,
          message: formData.message,
          url: formData.url,
          servises: formData.servises,
        }),
      })
        .then(res => {
          this.form.classList.add('hidden');
          this.popup.querySelector('.popup__content').classList.add('popup__content_background-right');
          if (res.ok) {
            this.popup.querySelector('.popup__title').textContent = 'Спасибо! Заявка отправлена';
            this.popup.querySelector('.popup__subtitle').textContent = 'Наш администратор свяжется с Вами в ближайшее время.';
          } else {
            this.popup.querySelector('.popup__title').textContent = 'Упс!';
            this.popup.querySelector('.popup__subtitle').textContent = 'К сожалению, что-то пошло не так, и заявка не отправилась. Попробуйте перезагрузить страницу и заполнить данные снова';
          }
        })
        .catch((err) => { console.log(err.message);})
    }

  _setSubmitListeners() {
    this.form.addEventListener('submit', this._orderServise);
  }
}
