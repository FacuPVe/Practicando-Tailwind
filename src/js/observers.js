function createObserver(elements, animationClass, delay = 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.remove('invisible');
                    entry.target.classList.add(animationClass);
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => {
        el.classList.add('invisible');
        observer.observe(el);
    });
}

export { createObserver };