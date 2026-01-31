document.addEventListener('DOMContentLoaded', () => {
    // Reveal main container
    const container = document.querySelector('.container');
    if (container) {
        container.classList.add('visible');
    }

    // Staggered reveal for links
    const links = document.querySelectorAll('.link-item');
    links.forEach((link, index) => {
        // Delay each link by 100ms
        setTimeout(() => {
            link.classList.add('animate');
        }, 150 + (index * 80));
    });

    // Prices Toggle
    const pricesToggle = document.getElementById('prices-toggle');
    const pricesContent = document.getElementById('prices-content');

    if (pricesToggle && pricesContent) {
        pricesToggle.addEventListener('click', () => {
            const isOpen = pricesContent.classList.contains('open');
            
            if (isOpen) {
                pricesContent.classList.remove('open');
                pricesToggle.classList.remove('active');
            } else {
                pricesContent.classList.add('open');
                pricesToggle.classList.add('active');
            }
        });
    }
});
