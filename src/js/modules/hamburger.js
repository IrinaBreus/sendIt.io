const hamburger = () => {
    const btnOpen = document.querySelector('.hamburger');
    const btnClose = document.querySelector('.menu-mobile__close');
    const menuBox = document.querySelector('.menu-mobile');
    
    btnOpen.addEventListener('click', () => {
        menuBox.style.top = 0;
    });

    btnClose.addEventListener('click', () => {
        menuBox.style.top = '';
    })
}

export default hamburger;