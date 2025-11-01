(function () {
    const revealElements = document.querySelectorAll('.reveal');

    function revealOnScroll() {
        const windowHeight = window.innerHeight;

        revealElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isInView = rect.top < windowHeight && rect.bottom > 0;

            if (isInView) {
                element.classList.add('reveal_active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
})();
