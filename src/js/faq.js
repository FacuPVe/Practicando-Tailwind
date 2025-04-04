function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    const arrow = button.querySelector('svg');
    const allAnswers = document.querySelectorAll('.faq-answer');
    const allArrows = document.querySelectorAll('.faq-button svg');

    allAnswers.forEach(item => {
        if (item !== answer && !item.classList.contains('hidden')) {
            item.classList.add('hidden');
        }
    });

    allArrows.forEach(item => {
        if (item !== arrow) {
            item.classList.remove('rotate-180');
        }
    });

    answer.classList.toggle('hidden');
    arrow.classList.toggle('rotate-180');
}

export { toggleFAQ }; 