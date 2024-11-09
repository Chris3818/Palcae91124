// Flip animation for About Us heading
setInterval(() => {
    const heading = document.getElementById('about-heading');
    heading.style.transform = 'rotateY(180deg)';
    setTimeout(() => {
        heading.style.transform = 'rotateY(0deg)';
    }, 2500);
}, 5000);

// Flip animation for Services heading
setInterval(() => {
    const heading = document.getElementById('services-heading');
    heading.style.transform = 'rotateY(180deg)';
    setTimeout(() => {
        heading.style.transform = 'rotateY(0deg)';
    }, 2500);
}, 5000);

// Change navbar color on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    if (window.scrollY > 200) {
        navbar.style.backgroundColor = 'white';
        navLinks.forEach(link => link.style.color = 'black');
    } else {
        navbar.style.backgroundColor = 'transparent';
        navLinks.forEach(link => link.style.color = 'black');
    }
});
