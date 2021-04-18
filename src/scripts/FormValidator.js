export class FormValidator {
  constructor(formName) {
    this.formName = formName;
  }


  setEventListeners = () => {
    Array.from(this.formName).forEach((inputElement) => {
      if (inputElement.type !== 'submit' && inputElement.tagName !== 'button') {
        inputElement.addEventListener('input', this._handleValidate)
      }
    })
    Array.from(this.formName).forEach((inputElement) => {
      if (inputElement.type !== 'submit' && inputElement.name !== 'servises' && inputElement.name !== 'g-recaptcha-response') {
        inputElement.addEventListener('blur', this._setInputState)
      }
    })
  }

  _setInputState = (event) => {
    if (!event.target.checkValidity()) {
      event.target.classList.add('popup__input_invalid');
      
    } else if (event.target.checkValidity()) {
      event.target.classList.add('popup__input_valid');
    }
  }

  _handleValidate = (event) => {
    event.target.classList.remove('popup__input_valid');
    event.target.classList.remove('popup__input_invalid');
    event.target.classList.remove('popup__input_default');
    const submit = event.target.form.querySelector('.popup__button');
    const [...inputs] = event.target.form.elements;
    this._errorHandler(event.target);
    if (inputs.every(this._checkInputValid)) {
      this._setSubmitButtonState(submit, true);
    } else {
      this._setSubmitButtonState(submit, false);
    }
  }

  _setSubmitButtonState(formButton, validState) {
    if (validState) {
      formButton.removeAttribute('disabled');
      formButton.classList.add('popup__button_active');
    } else {
      formButton.setAttribute('disabled', true);
      formButton.classList.remove('popup__button_active');
    }
  }

  _errorHandler = (inputElement) => {
    const errorElement = this.formName.querySelector(`#error-${inputElement.id}`);
    const valid = this._checkInputValid(inputElement);
    errorElement.textContent = inputElement.validationMessage;
    return valid;
  }

  _checkInputValid = (inputElement) => {
    inputElement.setCustomValidity('');
    if (inputElement.validity.valueMissing && inputElement.name !== 'agre') {
      inputElement.setCustomValidity('Это обязательное поле');
      return false;
    }
    else if (inputElement.validity.valueMissing && inputElement.name == 'agre') {
      inputElement.setCustomValidity('Согласие обязательно для заказа звонка');
      return false;
    }
    else if (inputElement.validity.tooShort) {
      inputElement.setCustomValidity('Должно быть от 2 до 30 символов');
      return false
    }
    else if (inputElement.validity.patternMismatch && inputElement.type === 'tel') {
      inputElement.setCustomValidity('Верный формат +7-XXX-XXX-XX-XX');
      return false;
    }
    else if (inputElement.validity.patternMismatch && inputElement.type === 'email') {
      inputElement.setCustomValidity('Неправильный формат email');
      return false;
    }

    return inputElement.checkValidity();
  }

  checkFormValid = () => {
    const inputs = [...this.formName.elements];
    let valid = true;
    inputs.forEach((inputElement) => {
      if (inputElement.type !== 'submit' && inputElement.tagName !== 'button') {
        if (!this._errorHandler(inputElement)) valid = false;
      }
    });

    return valid;
  }

}