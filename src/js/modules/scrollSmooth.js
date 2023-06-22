const scrollSmooth = () => {
    const links = document.querySelectorAll('[href^="#"]'),
           up = document.querySelector('.up');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            if (this.hash) {
                const el = document.querySelector(this.hash);
                const rect = el.getBoundingClientRect();
                window.scrollTo({
                    left: window.scrollX + rect.left,
                    top: window.scrollY + rect.top,
                    behavior: "smooth"
                });
            } else {
                window.scrollTo({
                    left: 0,
                    top: 0,
                    behavior: "smooth"
                });
            }
            console.log(this.hash);
        })
    });

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1700) {
            up.style.cssText = `opacity: 1;
                                cursor: pointer;`
        } else {
            up.style.cssText = `opacity: 0;
                                cursor: none;`
        }
    })
}

export default scrollSmooth;