// Variables
const menuIcon = document.querySelector('.menu-icon');
const closeBtn = document.querySelector('.close-btn');
const navBar = document.querySelector('.mobile-nav');
const menuItems = document.querySelectorAll('.mobile-nav .menu-item');

// Actions
menuIcon.addEventListener('click', () => {
  navBar.classList.add('is-active');
});

closeBtn.addEventListener('click', () => {
  navBar.classList.remove('is-active');
});

for (let i = 0; i < menuItems.length; i += 1) {
  menuItems[i].addEventListener('click', () => {
    navBar.classList.remove('is-active');
  });
}

/* *******************
* FOR POP UP WINDOWS *
******************* */
