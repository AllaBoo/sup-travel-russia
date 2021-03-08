import '../styles/program.css';
import { Popup } from './Popup';
import { setHeaderListeners, photoPopup } from './constants';

setHeaderListeners();

const popupPhoto = new Popup(photoPopup);

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
	
	const items = document.querySelectorAll('.tiles__line-img');
	let linksArr = []
	items.forEach(element => {
		linksArr.push(element.currentSrc);
		return linksArr;
	});
	let current = linksArr.findIndex(item => item.includes(photo.slice(2)));
	
	document.querySelector('#last-photo').textContent = items.length > 10 ? items.length : `0${items.length}`;
	document.querySelector('#cur-photo').textContent = current > 10 ? current+1  : `0${current+1}`;

	const navigate = function(dir) {
		if (dir === 'right') {
			current = current < items.length-1 ? current + 1 : 0;
			document.querySelector('.popup__photo').setAttribute('src', linksArr[current]);
		} else {
			current = current > 0 ? current - 1 : items.length-1;
			document.querySelector('.popup__photo').setAttribute('src', linksArr[current]);
		}
		document.querySelector('#cur-photo').textContent = current > 10 ? current+1 : `0${current+1}`;
	}
	
}


document.addEventListener('click', (event) => {
	if (event.target.classList.contains('tiles__line-img')) {
		photoZoomer(event.target)
	}
})