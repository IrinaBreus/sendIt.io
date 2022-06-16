function accordeon () {
    const btns = document.querySelectorAll('.doubts-block__arrow');

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            btn.classList.toggle('rotateAp');

            let question = btn.previousElementSibling.lastElementChild;
            question.classList.toggle('show');
            
        })
    })
}

export default accordeon;