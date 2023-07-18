function slider(sliderContent, prevBtn, nextBtn) {
    const prev = document.querySelector(prevBtn),
    next = document.querySelector(nextBtn),
    slider = document.querySelector(sliderContent),
    slides = slider.children,
    width = Math.round(slider.offsetWidth / slides.length);
    
    let offset = -width;
    drow();

    console.log(width);
    window.addEventListener('resize', drow);

    next.addEventListener('click', right);
    
    prev.addEventListener('click', left);

    function drow() {
        const slider = document.querySelector(sliderContent),
        width = Math.round(slider.offsetWidth / slides.length);
        slider.classList.remove('shifting');
        const active = slides[slides.length - 1];
        slider.insertBefore(active, slides[0]);
        slider.style.transform = `translateX(${-width}px)`;
    }
    function right() {
        next.removeEventListener('click', right);
        const slider = document.querySelector(sliderContent);
        moveStart(-1);
        
        setTimeout(() => {
            slider.appendChild(slides[0]);
            moveEnd(1);
            next.addEventListener('click', right);
        }, 1000);
        console.log(offset);
    }
    
    function left() {
        prev.removeEventListener('click', left);
        const slider = document.querySelector(sliderContent);
        moveStart(1);
        
        setTimeout(() => {
            const active = slides[slides.length - 1];
            slider.insertBefore(active, slides[0]);
            moveEnd(-1);
            prev.addEventListener('click', left);
        }, 1000);
        console.log(offset);
    }
    
    function moveStart(num) {
        offset += num * width;
        slider.classList.add('shifting');
        slider.style.transform = `translateX(${offset}px)`;
    }
    
    function moveEnd(num) {
        slider.classList.remove('shifting');
        offset += num * width;
        slider.style.transform = `translateX(${offset}px)`;
    }
}

export default slider;