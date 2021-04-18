import '../styles/contacts.css';
import { FormValidator } from './FormValidator';
const formValidator = (...arg) => new FormValidator(...arg);
import { setHeaderListeners } from './constants';

setHeaderListeners();

formValidator(document.querySelector('#contacForm')).setEventListeners();

document.querySelector('#contacForm').addEventListener('submit', (event) => {
	event.preventDefault();
if (formValidator(document.querySelector('#contacForm')).checkFormValid()) {
  const formData = {
    fio: document.querySelector('#contacForm').fio.value,
    email: document.querySelector('#contacForm').email.value,
    message: document.querySelector('#contacForm').message.value,
  };
  fetch('https://sup-travel-russia.com/contact.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fio: formData.fio,
      email: formData.email,
      message: formData.message,
    }),
  })
    .then(res => {
      document.querySelector('#contacForm').classList.add('hidden');
      if (res.ok) {
        document.querySelector('#contactTitle').textContent = 'Сообщение отправлено';
      } else {
        document.querySelector('#contactTitle').textContent = 'Ошибка при отправке сообщения';
      }
    })
    .catch((err) => { console.log(err.message);})
}
})