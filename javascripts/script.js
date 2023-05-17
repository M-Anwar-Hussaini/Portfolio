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
const projectBtns = document.querySelectorAll('btn--project');
const allProjects = [
  {
    name: 'First Project',
    description: 'lorem',
    image: 'path/to/featured-image-1.jpg',
    technologies: 'Technologies used in Project 1',
    liveVersion: 'https://www.example.com/project1',
    sourceCode: 'https://www.github.com/project1',
  },
  {
    name: 'Project 2',
    description: 'Description of Project 2',
    image: 'path/to/featured-image-2.jpg',
    technologies: 'Technologies used in Project 2',
    liveVersion: 'https://www.example.com/project2',
    sourceCode: 'https://www.github.com/project2',
  },
  // Add more projects as needed
];
