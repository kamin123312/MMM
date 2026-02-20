document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const speedBackground = 0.5; // Скорость фона
    const speedForeground = 0.2; // Скорость переднего плана

    // Двигаем фон
    const background = document.querySelector('.parallax-background');
    background.style.transform = `translateY(${scrollY * speedBackground}px)`;

    // Двигаем передний план
    const foreground = document.querySelector('.parallax-foreground');
    foreground.style.transform = `translateY(${scrollY * speedForeground}px)`;
});