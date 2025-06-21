// Funzioni per il menu mobile
const openBtn = document.getElementById('hamburger-btn');
const closeBtn = document.getElementById('close-btn');
const mobileNav = document.getElementById('mobile-nav-overlay');

openBtn.addEventListener('click', () => {
    mobileNav.style.width = '100%';
});

closeBtn.addEventListener('click', () => {
    mobileNav.style.width = '0%';
});