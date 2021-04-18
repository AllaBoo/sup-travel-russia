import '../styles/booking.css';
import { PopupBooking } from './PopupBooking';
import { FormValidator } from './FormValidator';
const formValidator = (...arg) => new FormValidator(...arg);
import { setHeaderListeners, bookingPopup, bookingButton, bookingForm } from './constants';

setHeaderListeners();

const popupBooking = new PopupBooking(bookingPopup, formValidator, bookingForm);

bookingButton.addEventListener('click', () => popupBooking.open());