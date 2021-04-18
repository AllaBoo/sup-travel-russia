import '../styles/faq.css';
import { setHeaderListeners } from './constants';

const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tabcontent');
const details = document.querySelectorAll("details");

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

// Add the onclick listeners.
// details.forEach((targetDetail) => {
//   targetDetail.addEventListener("click", () => {
//     // Close all the details that are not targetDetail.
//     details.forEach((detail) => {
//       if (detail !== targetDetail) {
//         detail.removeAttribute("open");
//       }
//     });
//   });
// });

setHeaderListeners();
activateAll();