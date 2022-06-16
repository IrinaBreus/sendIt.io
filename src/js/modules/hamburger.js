const hamburger = () => {
    const btnOpen = document.querySelector('.hamburger'),
          btnClose = document.querySelector('.menu-mobile__close'),
          menuBox = document.querySelector('.menu-mobile'),
          menuLists = document.querySelectorAll('.menu-mobile__lists li');
    
    btnOpen.addEventListener('click', () => {
        menuBox.style.top = 0;
    });

    btnClose.addEventListener('click', () => {
        menuBox.style.top = '';
    });

    menuLists.forEach(li => {
        li.addEventListener('click', () => {
            menuBox.style.top = '';
        })
    })
}

export default hamburger;