document.addEventListener("DOMContentLoaded", function () {
    const carrossel = document.querySelector(".carrossel");
    const slides = document.querySelectorAll(".carrossel .slide");
    const totalSlides = slides.length;
    let currentIndex = 0;

    // Configura o posicionamento inicial de cada slide
    function setupSlides() {
        slides.forEach((slide, index) => {
            slide.style.left = `${index * 100}%`; // Posiciona os slides lado a lado
        });
    }

    // Mostra o slide atual
    function showSlide(index) {
        const offset = -index * 100; // Calcula o deslocamento baseado no índice atual
        carrossel.style.transform = `translateX(${offset}%)`;
        carrossel.style.transition = "transform 0.5s ease-in-out"; // Animação suave
    }

    // Avança para o próximo slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides; // Garante que o índice volte ao início
        showSlide(currentIndex);
    }

    // Volta para o slide anterior
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Garante que o índice seja circular
        showSlide(currentIndex);
    }

    // Inicializa o carrossel
    setupSlides();
    showSlide(currentIndex);

    // Alterna os slides automaticamente a cada 3 segundos
    setInterval(nextSlide, 3000);

    // Adiciona eventos para navegação manual
    const prevButton = document.querySelector(".btn-prev");
    const nextButton = document.querySelector(".btn-next");

    if (prevButton && nextButton) {
        prevButton.addEventListener("click", prevSlide);
        nextButton.addEventListener("click", nextSlide);
    }
});

// Código relacionado ao mapa
function initMap() {
    const location = { lat: -37.817209, lng: 144.955923 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Agência de Viagens",
    });

    const infoWindow = new google.maps.InfoWindow({
        content: "<h3>Agência de Viagens</h3><p>Planeje sua próxima aventura conosco!</p>",
    });

    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });
}
