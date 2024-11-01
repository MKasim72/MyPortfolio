let menuBtn = document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
        }
    });
    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Ensure navbar and icon reset when scrolling
    menuBtn.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

ScrollReveal({ 
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content , heading',{origin:"top"})
ScrollReveal().reveal('.home-img , .services-container,.portfolio-box,.contact form,.GitButton',{origin:"bottom"})
ScrollReveal().reveal('.home-content h1, .about-img',{origin:"left"})
ScrollReveal().reveal('.home-content p, .about-content',{origin:"right"})

const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer','Python Developer','UI|UX Designer','MERN Stack Developer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true
})

