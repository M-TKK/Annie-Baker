var menuBtn = document.querySelector('#mobile-menu');
var mobileMenu = document.querySelector('.nav-menu');
var closeMenu = document.querySelector('#closeBtn');

menuBtn.addEventListener('click', toggleNav);
closeMenu.addEventListener('click', closeNav);

function toggleNav(e){
    e.preventDefault();
    mobileMenu.classList.add('active');
};

function closeNav(e){
    e.preventDefault();
    mobileMenu.classList.remove('active');
};




