import hamburger from './modules/hamburger';
import accordeon from './modules/accordeon';
import slider from './modules/slider';
import scrollSmooth from './modules/scrollSmooth';


document.addEventListener('DOMContentLoaded', () => {
    'use stricti';

    hamburger();
    accordeon();
    slider('.comments__field', '.arrow_prev-c', '.arrow_next-c');
    scrollSmooth();
    if (window.screen.availWidth <= 576) {
        slider('.mobile', '.arrow_prev-g', '.arrow_next-g');
    }
    window.addEventListener('resize', slider);
});