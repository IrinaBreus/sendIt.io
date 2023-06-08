function accordeon () {
    const btns = document.querySelectorAll('.doubts__down');

    btns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const target = e.currentTarget;
            if (target.classList.contains('down_active')) {
                hidden();
            } else {
                hidden();
                target.classList.add('down_active');
                target.nextElementSibling.classList.add('answer_active');
            }
        })
    });

    function hidden() {
        btns.forEach(btn => {
            btn.classList.remove('down_active');
            btn.nextElementSibling.classList.remove('answer_active');
        })
    }
}

export default accordeon;