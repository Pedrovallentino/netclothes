document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('#carousel-section');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;
    let autoSlideInterval;
    const intervalTime = 5000; // 5 segundos

    // Função para definir a imagem de fundo de cada slide
    function setBackgroundImages() {
        slides.forEach(slide => {
            const imageUrl = slide.getAttribute('data-image-url');
            if (imageUrl) {
                slide.style.backgroundImage = `url('${imageUrl}')`;
            }
        });
    }

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, intervalTime);
    }

    function pauseAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Início automático
    setBackgroundImages(); // Chama a função para aplicar as imagens
    showSlide(currentIndex); // Mostra o slide inicial
    startAutoSlide();

    // Navegação manual
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetTimer();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetTimer();
    });

    // Pausa inteligente (Hover)
    carousel.addEventListener('mouseenter', pauseAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);

    // Reinício do temporizador
    function resetTimer() {
        pauseAutoSlide();
        startAutoSlide();
    }
});