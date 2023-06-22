const hamburger = () => {
    const trigger = document.querySelector('.nav__open'),
          hamburger = document.querySelector('.hamburger'),
          close = document.querySelector('.hamburger__close'),
          lists = document.querySelectorAll('.hamburger__menu li');

    trigger.addEventListener('click', () => {
        hamburger.style.top = 0;
        hamburger.style.opacity = 1;
    });
    close.addEventListener('click', closeHumburger);

    lists.forEach(list => {
        list.addEventListener('click', closeHumburger);
    })

    function closeHumburger() {
        hamburger.style.top = -150 + '%';
        hamburger.style.opacity = 0;
    }
}

export default hamburger;