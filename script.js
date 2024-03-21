
const menuBtn = document.querySelector('.menu-btn');


menuBtn.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-menu');
});

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            
            event.preventDefault();
            
            
            const sectionId = link.getAttribute('href').substring(1);
            
            
            scrollToSection(sectionId);
        });
    });
});
