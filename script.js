// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
});

// Newsletter form simulated submission
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Obrigado por subscrever a nossa newsletter!');
        newsletterForm.reset();
    });
}

// Contact form simulated submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensagem enviada! Obrigado pelo contacto.');
        contactForm.reset();
    });
}
