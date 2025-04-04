export function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuButton = document.getElementById('close-mobile-menu');
    const mobileMenuContent = mobileMenu.querySelector('div');

    mobileMenuContent.classList.remove('right-0', 'translate-x-full');
    mobileMenuContent.classList.add('top-0', 'left-0', 'w-full', 'translate-y-[-100%]');

    function handleCloseMenu() {
        mobileMenuContent.classList.remove('animate-slide-down');
        mobileMenuContent.classList.add('animate-slide-up');

        setTimeout(() => {
            mobileMenu.classList.add('hidden');
            mobileMenuContent.classList.remove('animate-slide-up');
        }, 300);
    }

    function handleOpenMenu() {
        mobileMenu.classList.remove('hidden');
        mobileMenuContent.classList.remove('animate-slide-up');
        mobileMenuContent.classList.add('animate-slide-down');
    }

    mobileMenuButton.addEventListener('click', handleOpenMenu);
    closeMenuButton.addEventListener('click', handleCloseMenu);
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            handleCloseMenu();
        }
    });
} 