function initializeSmoothScroll() {
    // 1. Smooth scroll links: Select only links whose 'href' starts with '#'
    const scrollLinks = document.querySelectorAll('.navbar_center a[href^="#"]'); 
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Stop the default jump
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const navbarOffset = 80;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
                window.scrollTo(0, targetPosition);
            }
        });
    });

    // 2. Scroll-to-top button
    const scrollUpButton = document.getElementById('scroll-up-btn');
    if (scrollUpButton) {
        scrollUpButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.scrollTo(0, 0);
        });
    }
}
