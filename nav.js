// This file is a simple script to toggle the navbar links on mobile devices

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

// console.log(toggleButton);
// console.log(navbarLinks);

toggleButton.addEventListener('click', () => {
    // console.log(toggleButton)
    navbarLinks.classList.toggle('active')
    }
)