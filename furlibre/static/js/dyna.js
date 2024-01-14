document.addEventListener('DOMContentLoaded', function () {
    var elementosNoBack = document.querySelectorAll('.noBack');

    function verificaScroll() {
        elementosNoBack.forEach(function(elemento) {
            if (window.scrollY > 0) {
                elemento.classList.remove('applyNoBack');
            } else {
                elemento.classList.add('applyNoBack');
            }
        });
    }

    window.addEventListener('scroll', verificaScroll);

    verificaScroll();
});