const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
const content = document.querySelector('.content-wrapper');
const header = document.querySelector('.header-wrapper');
const sidebarListItems = document.querySelectorAll('.sidebar-list-item');
const allWindows = document.querySelectorAll('.window');

const hamburgerClickHandler = () => {
  hamburger.classList.toggle('hamburger-active');
  nav.classList.toggle('navigation-active');
  content.classList.toggle('content-wrapper-active');
  header.classList.toggle('header-wrapper-active');
};

hamburger.addEventListener('click', hamburgerClickHandler);


for (let sidebarListItem of sidebarListItems) {
  sidebarListItem.addEventListener('click', function () {
    const clickedElement = this;
    const activeItems = document.querySelectorAll(
      '.sidebar-list-item, .active'
    );

    for (let activeItem of activeItems) {
      activeItem.classList.remove('active');
    }
    clickedElement.classList.add('active');

    const clickedElementTag = clickedElement.getAttribute('data-tags');

    const windows = document.querySelectorAll('.' + clickedElementTag);

    for (let window of allWindows) {
      window.classList.remove('active');
    }

    for (let window of windows) {
      window.classList.add('active');
    }
  });
}
