import '../styles/program.css';
import Swiper, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Scrollbar } from 'swiper/core';
SwiperCore.use([Navigation, Scrollbar, Pagination]);
import { FormValidator } from './FormValidator';
const formValidator = (...arg) => new FormValidator(...arg);
import { PopupPhoto } from './PopupPhoto';
import { PopupBooking } from './PopupBooking';
import { setHeaderListeners, photoPopup, bookingPopup, bookingButton, bookingForm } from './constants';

setHeaderListeners();

const popupPhoto = new PopupPhoto(photoPopup);
const popupBooking = new PopupBooking(bookingPopup, formValidator, bookingForm);

function photoZoomer (pic) {
	const photo = pic.getAttribute('src');
	document.querySelector('#prevPhoto').addEventListener('click', function() {
		navigate('left');
	});

	document.querySelector('#nextPhoto').addEventListener('click', function() {
		navigate('right');
	});

	document.querySelector('.popup__photo').setAttribute('src', photo);
	popupPhoto.open();
	
	const items = document.querySelectorAll('.media');
	let linksArr = []
	items.forEach(element => {
		linksArr.push(element.currentSrc);
		return linksArr;
	});
	let current = linksArr.findIndex(item => item.includes(photo.slice(2)));
	
	document.querySelector('#last-photo').textContent = items.length > 9 ? items.length : `0${items.length}`;
	document.querySelector('#cur-photo').textContent = current > 8 ? current+1  : `0${current+1}`;

	const navigate = function(dir) {
		if (dir === 'right') {
			current = current < items.length-1 ? current + 1 : 0;
			document.querySelector('.popup__photo').setAttribute('src', linksArr[current]);
		} else {
			current = current > 0 ? current - 1 : items.length-1;
			document.querySelector('.popup__photo').setAttribute('src', linksArr[current]);
		}
		document.querySelector('#cur-photo').textContent = current > 8 ? current+1 : `0${current+1}`;
	}
		//keyboard navigation
		document.addEventListener('keydown', function(ev) {
			var keyCode = ev.keyCode || ev.which;
			switch (keyCode) {
				case 37:
					navigate('left');
					break;
				case 39:
					navigate('right');
					break;
			}
		});	
	// swipe navigation
		// from http://stackoverflow.com/a/23230280
		document.querySelector('.popup__photo').addEventListener('touchstart', handleTouchStart, false);        
		document.querySelector('.popup__photo').addEventListener('touchmove', handleTouchMove, false);
		var xDown = null;
		var yDown = null;
		function handleTouchStart(evt) {
			xDown = evt.touches[0].clientX;
			yDown = evt.touches[0].clientY;
		};
		function handleTouchMove(evt) {
			if ( ! xDown || ! yDown ) {
				return;
			}

			var xUp = evt.touches[0].clientX;
			var yUp = evt.touches[0].clientY;

			var xDiff = xDown - xUp;
			var yDiff = yDown - yUp;

			if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
				if ( xDiff > 0 ) {
					/* left swipe */
					navigate('right');
				} else {
					navigate('left');
				}
			} 
			/* reset values */
			xDown = null;
			yDown = null;
		};

}


document.addEventListener('click', (event) => {
	if (event.target.classList.contains('media')) {
		photoZoomer(event.target)
	}
})

var swiper = new Swiper('.timeline', {
	slidesPerView: 6,
	spaceBetween: 30,
	keyboard: { enabled: true },
	breakpoints: { 
		319: { slidesPerView: 2, spaceBetween: 15 },
		768: { slidesPerView: 3, spaceBetween: 20 },
		1024: { slidesPerView: 4, spaceBetween: 30 },
		1440: { slidesPerView: 5, spaceBetween: 60 },
	},
	scrollbar: { el: '.swiper-scrollbar' },
	navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
});

var swiper = new Swiper('#media', {
	slidesPerView: 4,
	slidesPerGroup: 4,
	spaceBetween: 60,
	keyboard: { enabled: true },
	breakpoints: { 
		319: { slidesPerView: 1, spaceBetween: 0, slidesPerGroup: 1, },
		768: { slidesPerView: 2, spaceBetween: 20, slidesPerGroup: 2, },
		1024: { slidesPerView: 3, spaceBetween: 30, slidesPerGroup: 3, },
		1440: { slidesPerView: 4, spaceBetween: 60, slidesPerGroup: 4, },
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	centeredSlides: false
});

bookingButton.addEventListener('click', () => popupBooking.open());