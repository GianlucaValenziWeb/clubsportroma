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
