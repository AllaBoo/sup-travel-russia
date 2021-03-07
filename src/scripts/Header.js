export class Header {
  constructor() {
    this.headerIcon = document.querySelector('.header__icon');
    this.templateClose = document.querySelector('#icon-close').content.querySelector('img');
    this.templateOpen = document.querySelector('#icon-open').content.querySelector('img');
  }

  openMenu() {
    while (this.headerIcon.firstChild) {
      this.headerIcon.removeChild(this.headerIcon.firstChild);
    };
    const cross = this.templateClose.cloneNode(true);
    this.headerIcon.append(cross);
    this.headerIcon.addEventListener('click', () => this.closeMenu());
    document.querySelector('.header__nav').classList.add('header__nav_opened');
    document.querySelector('.header__menu').classList.add('header__menu_opened');
  }

  closeMenu() {
    while (this.headerIcon.firstChild) {
      this.headerIcon.removeChild(this.headerIcon.firstChild);
    };
    const open = this.templateOpen.cloneNode(true);
    this.headerIcon.append(open);
    this.headerIcon.addEventListener('click', () => this.openMenu());
    document.querySelector('.header__nav').classList.remove('header__nav_opened');
    document.querySelector('.header__menu').classList.remove('header__menu_opened');
  }
}

