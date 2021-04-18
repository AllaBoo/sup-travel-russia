import Popup from './Popup';
export class PopupLead extends Popup {
  constructor(popupName, formValidator, formName) {
    super(popupName);
    this.formValidator = formValidator;
    this.form = formName;
  }

  open = () => {
    super.open();
    super.clearForm();
    this.popup.querySelector('.popup__content').classList.add('popup__content_background-corners');
    this.form.classList.remove('hidden');
    this.popup.querySelector('.popup__title').textContent = 'Закажите звонок';
    this.popup.querySelector('.popup__subtitle').textContent = '';
    this.formValidator(this.form).setEventListeners();
    this._setSubmitListeners();
  }

  _orderCall = (event) => {
    event.preventDefault();
    if (this.formValidator(this.form).checkFormValid()) {
      const formData = {
        fio: this.form.fio.value,
        telephone: this.form.telephone.value,
        message: this.form.message.value,
        url: document.location.href
      };
      fetch('https://sup-travel-russia.com/send.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fio: formData.fio,
          telephone: formData.telephone,
          message: formData.message,
          url: formData.url,
        }),
      })
        .then(res => {
          this.form.classList.add('hidden');
          this.popup.querySelector('.popup__content').classList.remove('popup__content_background-corners');
          this.popup.querySelector('.popup__content').classList.add('popup__content_background-right');
          if (res.ok) {
            this.popup.querySelector('.popup__title').textContent = 'Спасибо!';
            this.popup.querySelector('.popup__subtitle').textContent = 'Наш администратор свяжется с Вами в ближайшее время.';
          } else {
            this.popup.querySelector('.popup__title').textContent = 'Упс!';
            this.popup.querySelector('.popup__subtitle').textContent = 'К сожалению, что-то пошло не так, и заявка не отправилась. Попробуйте перезагрузить страницу и заполнить данные снова';
          }
        })
        .catch((err) => { console.log(err.message);})
    }
  }

  _setSubmitListeners() {
    this.form.addEventListener('submit', this._orderCall);
  }
}
