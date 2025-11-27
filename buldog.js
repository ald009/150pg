function slide() {
    const slides = document.querySelectorAll('.slide');
    if (!slides.length) return; // guard against empty NodeList

    let i = 0;
    if (!slides[0].classList.contains('active')) {
        slides[0].classList.add('active');
    }

    setInterval(() => {
        slides[i].classList.remove('active');
        i = (i + 1) % slides.length;
        slides[i].classList.add('active');
    }, 3000);
}

let slides = [];
let current = 0;
let autoInterval = null;

function initSlides() {
    slides = document.querySelectorAll('.slide');
    if (!slides.length) return;
    // find any .active, otherwise set first
    const idx = Array.from(slides).findIndex(s => s.classList.contains('active'));
    current = idx >= 0 ? idx : 0;
    if (!slides[current].classList.contains('active')) slides[current].classList.add('active');
}

// advance one slide (callable from onclick)
function nextSlide() {
    if (!slides.length) return;
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}

// optional: previous slide
function prevSlide() {
    if (!slides.length) return;
    slides[current].classList.remove('active');
    current = (current - 1 + slides.length) % slides.length;
    slides[current].classList.add('active');
}

// automatic slideshow starter
function slide() {
    initSlides();
    if (!slides.length) return;
    if (autoInterval) clearInterval(autoInterval);
    autoInterval = setInterval(nextSlide, 3000);
}

// expose manual controls for inline onclick
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.slide = slide; // optional: keep original name

document.addEventListener('DOMContentLoaded', initSlides);