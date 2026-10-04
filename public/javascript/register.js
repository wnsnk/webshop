'use strict';
import FormValidator from './modules/validate_form.js';
const formValidator = new FormValidator();

// console.log('tet');

const eMailInput = document.querySelector('#floatingInput');
const pass0Input = document.querySelector('#floatingPassword0');
const pass1Input = document.querySelector('#floatingPassword1');
const registerBtn = document.querySelector('#registerBtn');
const warningsDiv = document.querySelector('#warnings');

registerBtn.addEventListener('click', function () {
    // clear warnings
    warningsDiv.innerHTML = '';
    // check if inputs are filled
    if (!eMailInput.value) {
        warningsDiv.appendChild(
            formValidator.createWarningElement(
                'Email address can not be empty!',
            ),
        );
    }

    if (!pass0Input.value || !pass1Input.value) {
        warningsDiv.appendChild(
            formValidator.createWarningElement('Password can not be empty!'),
        );
    }

    const passwordValidation = formValidator.validatePassword(pass0Input.value);
    if (!passwordValidation[0]) {
        warningsDiv.appendChild(
            formValidator.createWarningElement(passwordValidation[1]),
        );
    }

    // CHECK IF PASSWORDS MATCH
    const passwordsMatch = pass0Input.value === pass1Input.value ? true : false;

    if (!passwordsMatch) {
        warningsDiv.appendChild(
            formValidator.createWarningElement('Passwords do not match!'),
        );
    }
});
