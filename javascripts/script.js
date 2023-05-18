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

/* ***************
 * FORM VALIDATION *
 **************** */
const email = document.querySelector('#user-mail');
const contactForm = document.getElementById('form-contact');
const errorMessage = document.querySelector('.error-message');

// Collaboration part: Erwin Amador
contactForm.addEventListener('submit', (event) => {
  const flag = email.value !== email.value.toLowerCase();
  if (flag) {
    event.preventDefault();
    errorMessage.textContent = 'The email address should be written in lower case.';
    return;
  }
  errorMessage.textContent = '';
});
