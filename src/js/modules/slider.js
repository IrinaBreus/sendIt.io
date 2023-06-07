const slider = () => {
    const field = document.querySelector('.comments__field'),
          cards = document.querySelectorAll('.comments__card'),
          slides = field.children,
          wrapper = document.querySelector('.comments__inner'),
          prevBtn = document.querySelector('.comments__slider .arrow_prev'),
          nexBtn = document.querySelector('.comments__slider .arrow_next'),
          width = wrapper.getBoundingClientRect(wrapper).width;
    
    let offset = 0;
    resize();
    wrapper.style.overflow = 'hidden';


    function resize () {
        if (window.screen.availWidth < 576) {
    
            field.style.width = 100 * slides.length + '%';
            
        } else {
            field.style.width = 100 * (slides.length / 2) + '%';
        }
    }
    window.addEventListener('resize', () => {
        resize();
    })

    
    cards.forEach(slide => slide.style.width = width);
    
    nexBtn.addEventListener('click', () => {
        next();
    });

    prevBtn.addEventListener('click', () => {
        prev();
    });

    function next() {
        offset += parseFloat(width) /2 ;
        field.style.transform = `translateX(-${offset}px)`;
        field.appendChild(slides[0]);
    }

    function prev() {
        offset -= parseFloat(width) / 2;
        field.style.transform = `translateX(-${offset}px)`;
        const active = slides[slides.length - 1];
            
        field.insertBefore(active, slides[0]);
    }
}

export default slider;

