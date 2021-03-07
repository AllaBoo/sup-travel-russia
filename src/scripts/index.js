import '../styles/index.css';
import {preloader} from './preloader';
import LocomotiveScroll from 'locomotive-scroll';
import Menu from './menu';
import { setHeaderListeners } from './constants';

setHeaderListeners();

// menu (<nav> element)
const menuEl = document.querySelector('#locomotiveScroll');

if (window.screen.availWidth > 768) {
		// preload the images set as data attrs in the menu items
		preloader('.menu__item').then(() => {
				// initialize the smooth scroll
				const scroll = new LocomotiveScroll({el: menuEl, smooth: true, scrollFromAnywhere: true, repeat: true});

				// initialize menu
				new Menu(menuEl);
		});
}
(function() {

	function init(item) {
		const items = item.querySelectorAll('.slider__item');
    let current = 0;
    const timeTrans = 4000;
    let autoUpdate = true;

		//create button prev
		const prevbtn = document.querySelector('#prev');

		//create button next
		const nextbtn = document.querySelector('#next');

		//вставить количество картинок
		document.querySelector('#last-img').textContent = items.length > 10 ? items.length : `0${items.length}`;
    document.querySelector('.slider__progress').setAttribute('max', items.length);

		items[current].classList.add("current");
		var navigate = function(dir) {
			items[current].classList.remove("current");

			if (dir === 'right') {
				current = current < items.length-1 ? current + 1 : 0;
			} else {
				current = current > 0 ? current - 1 : items.length-1;
			}

			items[current].classList.add("current");
      document.querySelector('#current-img').textContent = current > 10 ? current+1 : `0${current+1}`;
      document.querySelector('.slider__progress').setAttribute('value', current+1);
		}
    
    item.addEventListener('mouseenter', function() {
			autoUpdate = false;
		});

		item.addEventListener('mouseleave', function() {
			autoUpdate = true;
		});

		setInterval(function() {
			if (autoUpdate) navigate('right');
		},timeTrans);
    
		prevbtn.addEventListener('click', function() {
			navigate('left');
		});

		nextbtn.addEventListener('click', function() {
			navigate('right');
		});

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
		item.addEventListener('touchstart', handleTouchStart, false);        
		item.addEventListener('touchmove', handleTouchMove, false);
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

	[].slice.call(document.querySelectorAll('.slider')).forEach( function(item) {
		init(item);
	});

})();