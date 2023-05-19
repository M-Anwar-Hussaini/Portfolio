/* **************
* ALL VARIABLES *
************** */
const menuIcon = document.querySelector('.menu-icon');
const closeBtn = document.querySelector('.close-btn');
const navBar = document.querySelector('.mobile-nav');
const menuItems = document.querySelectorAll('.mobile-nav .menu-item');

// Conatact form variables
const userEmail = document.querySelector('#user-mail');
const userName = document.getElementById('username');
const userDescription = document.getElementById('message');
const contactForm = document.getElementById('form-contact');
const errorMessage = document.querySelector('.error-message');

/* ***************************** *
* MOBLILE VERSION HAMBURGER MENU *
* ***************************** */
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

/* ***************
 * FORM VALIDATION *
 **************** */
// Collaboration part: Erwin Amador
contactForm.addEventListener('submit', (event) => {
  const flag = userEmail.value !== userEmail.value.toLowerCase();
  if (flag) {
    event.preventDefault();
    errorMessage.textContent = 'The email address should be written in lower case.';
    return;
  }
  errorMessage.textContent = '';
});

/* *****************************************
 * SAVING DATA TO LOCAL STORAGE OF BROWSER *
 ***************************************** */