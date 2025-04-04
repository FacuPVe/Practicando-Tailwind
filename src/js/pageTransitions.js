export function initPageTransitions() {
    const mainContent = document.getElementById('mainContent');
    if (!mainContent) return;

    mainContent.style.opacity = '0';

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            mainContent.style.transition = 'opacity 0.3s ease-out';
            mainContent.style.opacity = '1';
        });
    });
} 