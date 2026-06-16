window.addEventListener('load', function() {

    // --- PROTECCIÓN CONTRA CAÍDAS DE SCROLLREVEAL ---
    // Solo ejecuta las animaciones si la librería está cargada en la página actual
    if (typeof ScrollReveal !== 'undefined') {
        
        if (document.getElementById('boletin-animado')) {
            ScrollReveal().reveal('#boletin-animado', { 
                delay: 300, 
                duration: 1000, 
                origin: 'left', 
                distance: '300px' 
            });
        }

        if (document.getElementById('seccion-tarjetas')) {
            ScrollReveal().reveal('#seccion-tarjetas', { 
                delay: 500, 
                duration: 1000, 
                origin: 'bottom', 
                distance: '80px' 
            });
        }
    }

    // --- ACTIVACIÓN Y CONTROL BI-DIRECCIONAL DEL CARRUSEL ---
    if (document.querySelector('.gallery-slider') && document.querySelector('.gallery-thumbs')) {
        
        // Slider de imágenes grandes
        var slider = new Swiper('.gallery-slider', {
            slidesPerView: 1,
            centeredSlides: true,
            loop: true,
            loopedSlides: 6, // Número exacto de tus imágenes
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            observer: true,
            observeParents: true
        });

        // Slider de miniaturas pequeñas
        var thumbs = new Swiper('.gallery-thumbs', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            centeredSlides: true,
            loop: true,
            loopedSlides: 6, // Crucial mantener el mismo valor para evitar bloqueos
            slideToClickedSlide: true,
            observer: true,
            observeParents: true
        });

        // Sincronización perfecta entre ambos elementos
        slider.controller.control = thumbs;
        thumbs.controller.control = slider;
    }
});