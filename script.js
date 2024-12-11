// Seleziona la freccetta
const arrowUp = document.querySelector('.arrow-up');

// Aggiungi un evento per mostrare/nascondere la freccetta in base allo scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Mostra la freccetta dopo aver scollato 200px
        arrowUp.style.display = 'flex';
    } else {
        arrowUp.style.display = 'none';
    }
});

// Aggiungi un effetto di scorrimento verso l'alto
arrowUp.addEventListener('click', (e) => {
    e.preventDefault(); // Evita il comportamento predefinito del link
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Scorrimento fluido
    });
});




// Seleziona tutti i link della navbar
const navLinks = document.querySelectorAll('.navbar a');

// Ottieni il percorso dell'URL della pagina corrente
const currentPage = window.location.pathname.split('/').pop();

// Aggiungi la classe 'active' al link corrispondente
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // Seleziona tutti gli elementi con le classi 'article' e 'storia-block'
    const items = document.querySelectorAll('.article, .storia-block, .gallery, .partita, .container-strutture, .container-categorie, .dream-img');

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');  // Aggiunge la classe quando l'elemento è visibile
            } else {
                entry.target.classList.remove('visible');  // Rimuove la classe quando l'elemento esce dal viewport
            }
        });
    }, { threshold: 0.1 });

    // Osserva ogni elemento selezionato
    items.forEach(function (box) {
        observer.observe(box);
    });
});









const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));

const scrollLeft = document.querySelectorAll(".scroll-left");
scrollLeft.forEach((el) => observer.observe(el));

const scrollRight = document.querySelectorAll(".scroll-right");
scrollRight.forEach((el) => observer.observe(el));

