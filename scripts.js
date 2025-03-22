// Efecto de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación al hacer scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const chatButton = document.querySelector('.btnChat');
    const chatForm = document.getElementById('formularioChat');
    const emailForm = document.getElementById('emailForm');

    // Mostrar/Ocultar el formulario al hacer clic
    chatButton.addEventListener('click', () => {
        chatForm.style.display = (chatForm.style.display === 'block') ? 'none' : 'block';
    });

    // Enviar correo con mailto
    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userEmail = document.getElementById('userEmail').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        const mailtoLink = `mailto:loiss.rodriguezz@gmail.com?subject=${encodeURIComponent(subject)}&body=De: ${userEmail}%0D%0A%0D%0AMensaje:%0D%0A${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;

        chatForm.style.display = 'none';
        emailForm.reset();
    });
});
