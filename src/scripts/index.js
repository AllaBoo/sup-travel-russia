import '../styles/index.css';
import { Header } from './Header';
import Cursor from './cursor';
import {preloader} from './preloader';
import LocomotiveScroll from 'locomotive-scroll';
import Menu from './menu';

const headerIcon = document.querySelector('.header__icon');
const leadButton = document.querySelector('#leadButton');
const leadPopup = document.querySelector('#leadPopup');
const closeButton = document.querySelector('.popup__close');
const header = new Header();

headerIcon.addEventListener('click', () => header.openMenu());

leadButton.addEventListener('click', () => {
  leadPopup.classList.add('popup_opened');
  document.querySelector('.body').append(leadPopup);
});

closeButton.addEventListener('click', () => {
  leadPopup.closest('.popup').classList.remove('popup_opened');
});

// menu (<nav> element)
const menuEl = document.querySelector('.html');

// preload the images set as data attrs in the menu items
preloader('.menu__item').then(() => {
    // initialize the smooth scroll
    const scroll = new LocomotiveScroll({el: menuEl, smooth: true, scrollFromAnywhere: true, repeat: true});

    // initialize custom cursor
    // const cursor = new Cursor(document.querySelector('.cursor'));

    // initialize menu
    new Menu(menuEl);
});