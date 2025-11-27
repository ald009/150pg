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

document.addEventListener('DOMContentLoaded', slide);