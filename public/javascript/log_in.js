'use strict';

import { logInUser } from './modules/fetch.js';

import FormValidator from './modules/validate_form.js';
const formValidator = new FormValidator();

const eMailInput = document.querySelector('#floatingInput');
const passwordInput = document.querySelector('#floatingPassword');
const logInBtn = document.querySelector('#logInBtn');
const warningsDiv = document.querySelector('#warnings');

logInBtn.addEventListener('click', function () {
    warningsDiv.innerHTML = '';
    if (!eMailInput.value || !passwordInput.value) {
        warningsDiv.appendChild(
            formValidator.createWarningElement('Please fill in all fields!'),
        );
    } else {
        logInUser(eMailInput.value, passwordInput.value);
    }
});
