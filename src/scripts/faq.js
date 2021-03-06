import '../styles/faq.css';
import { Header } from './Header';
const header = new Header();
import { headerIcon, leadButton, leadPopup, closeButton } from './constants';
// DOM Elements
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tabcontent');

const activateTab = tabnum => {
  document.querySelector('#all').classList.remove('tab_active')
  tabs.forEach( tab => {
    tab.classList.remove('tab_active')
  })
  
  tabContents.forEach( tabContent => {
      tabContent.classList.remove('tabcontent_active')
  })

  document.querySelector('#tab' + tabnum).classList.add('tab_active')
  document.querySelector('#tabcontent' + tabnum).classList.add('tabcontent_active')
}

// Event Listeners
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
      activateTab(tab.dataset.tab)
  })
})

const activateAll = () => {
  document.querySelector('#all').classList.add('tab_active')
  tabContents.forEach( tabContent => {
    tabContent.classList.add('tabcontent_active')
  }) 
  tabs.forEach( tab => {
    tab.classList.remove('tab_active')
  })
}

document.querySelector('#all').addEventListener('click', () => activateAll());

activateAll();

headerIcon.addEventListener('click', () => header.openMenu());

leadButton.addEventListener('click', () => {
  leadPopup.classList.add('popup_opened');
  document.querySelector('.body').append(leadPopup);
});

closeButton.addEventListener('click', () => {
  leadPopup.closest('.popup').classList.remove('popup_opened');
});