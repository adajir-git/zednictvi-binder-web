document.addEventListener('DOMContentLoaded', function() {
    // Definujeme různé hodnoty pro scroll podle šířky obrazovky
    let scrollAmount;
    const desktopScrollAmount = 1050; // Hodnota pro počítače
    const mobileScrollAmount = 600;   // Menší hodnota pro telefony, můžete ji upravit

    // Zjistíme šířku okna
    const windowWidth = window.innerWidth;
    
    // Rozhodneme, jakou hodnotu použít
    if (windowWidth > 768) { // 768px je standardní breakpoint pro desktop
        scrollAmount = desktopScrollAmount;
    } else {
        scrollAmount = mobileScrollAmount;
    }

    // Provedeme plynulý scroll po malé prodlevě
    setTimeout(() => {
        window.scrollTo({
            top: scrollAmount,
            behavior: 'smooth'
        });
    }, 500); // 0.5s prodleva
});