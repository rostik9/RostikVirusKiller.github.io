const buttons = document.querySelectorAll('.pagination_link');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const dataHref = button.getAttribute('data-href');
        window.location.href = `/${dataHref}`;
    });
});
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});