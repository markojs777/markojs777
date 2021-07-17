'use strict';

const faqs = document.querySelectorAll('.question-and-answer');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    const currActive = document.querySelector('.question-and-answer.active');
    if (currActive && currActive !== faq) {
      currActive.classList.toggle('active');
    }
    faq.classList.toggle('active');
  });
});
