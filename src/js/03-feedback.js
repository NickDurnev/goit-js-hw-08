const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.elements.email;
const messageInput = feedbackForm.elements.message;
const storageKey = 'feedback-form-state';
const throttle = require('lodash.throttle');

checkInputStorage()

feedbackForm.addEventListener('input', throttle(saveData, 500));
feedbackForm.addEventListener('submit', submitData);

function saveData() {
    const input = {
        email: emailInput.value,
        message: messageInput.value,
    }
    localStorage.setItem(storageKey, JSON.stringify(input));
}

function checkInputStorage() {
    const savedInputs = localStorage.getItem(storageKey);
    if (savedInputs) {
        const parsedInputs = JSON.parse(savedInputs);
        emailInput.value = parsedInputs.email;
        messageInput.value = parsedInputs.message;
    }
}

function submitData(e) {
    e.preventDefault();
    console.log(localStorage.getItem(storageKey));
    localStorage.removeItem(storageKey);
    e.currentTarget.reset();
}