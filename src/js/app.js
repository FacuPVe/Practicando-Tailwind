import { createObserver } from './observers.js';
import { initMobileMenu } from './mobileMenu.js';
import { initPageTransitions } from './pageTransitions.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log(`
    ⚠️ Literal copy of the code is not allowed
    Copyright © ${new Date().getFullYear()} - Facundo Ezequiel
    `);

    // Initialize page transitions
    initPageTransitions();

    // Initialize AOS
    AOS.init({
        duration: 800,
        offset: 100,
        once: true,
        easing: 'ease-out-cubic'
    });

    // Initialize mobile menu
    initMobileMenu();

    const missionCards = document.querySelectorAll('.mission-card');
    missionCards.forEach((card, index) => {
        createObserver([card], 'animate-fade-in-up', index * 200);
    });

    const programCards = document.querySelectorAll('.program-card');
    programCards.forEach((card, index) => {
        createObserver([card], 'animate-fade-in-up', index * 200);
    });

    const leftCards = document.querySelectorAll('.fade-right');
    const rightCards = document.querySelectorAll('.fade-left');

    leftCards.forEach((card, index) => {
        createObserver([card], 'animate-fade-in-right', index * 200);
    });

    rightCards.forEach((card, index) => {
        createObserver([card], 'animate-fade-in-left', index * 200);
    });

    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach((testimonial, index) => {
        createObserver([testimonial], 'animate-fade-in-up', index * 200);
    });

    const testimonialContainer = document.querySelector('.flex.overflow-x-auto');
    const testimonialDots = document.querySelectorAll('.flex.justify-center.mt-6.gap-2 button');

    if (testimonialContainer && testimonialDots.length > 0) {
        function getMostVisibleTestimonial() {
            let maxVisibility = 0;
            let mostVisibleIndex = 0;
            const containerRect = testimonialContainer.getBoundingClientRect();
            const containerRight = containerRect.right;
            const lastTestimonialIndex = testimonials.length - 1;

            testimonials.forEach((testimonial, index) => {
                const rect = testimonial.getBoundingClientRect();

                const visibleWidth = Math.min(rect.right, containerRight) -
                    Math.max(rect.left, containerRect.left);

                if (index === lastTestimonialIndex &&
                    testimonialContainer.scrollLeft + testimonialContainer.offsetWidth >=
                    testimonialContainer.scrollWidth - 10) {
                    maxVisibility = visibleWidth;
                    mostVisibleIndex = lastTestimonialIndex;
                } else if (visibleWidth > maxVisibility) {
                    maxVisibility = visibleWidth;
                    mostVisibleIndex = index;
                }
            });

            return mostVisibleIndex;
        }

        testimonialContainer.addEventListener('scroll', () => {
            const activeIndex = getMostVisibleTestimonial();
            updateDots(activeIndex);
        });

        function updateDots(activeIndex) {
            testimonialDots.forEach((dot, index) => {
                if (index === activeIndex) {
                    dot.classList.remove('bg-pink-300');
                    dot.classList.add('bg-pink-600');
                } else {
                    dot.classList.remove('bg-pink-600');
                    dot.classList.add('bg-pink-300');
                }
            });
        }

        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                const testimonial = testimonials[index];
                const containerWidth = testimonialContainer.offsetWidth;
                const scrollPosition = testimonial.offsetLeft - (containerWidth - testimonial.offsetWidth) / 2;

                testimonialContainer.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });

                updateDots(index);
            });
        });

        updateDots(0);
    }

    // Ejemplo: Manejar un evento de clic en un botónW
    // const miBoton = document.getElementById('mi-boton');
    // if (miBoton) {
    //     miBoton.addEventListener('click', function () {
    //         alert('¡Botón clickeado!');
    //     });
    // }

});


