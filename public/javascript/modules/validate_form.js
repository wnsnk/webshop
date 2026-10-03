const upperCaseLetters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];
const lowerCaseLetters = [];
for (const letter of upperCaseLetters) {
    lowerCaseLetters.push(letter.toLowerCase);
}
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialChars = ['!', '@', '#', '$', '%', '&', '*', '?'];
/**
 * Validates the password.
 *
 * @param   password The password that needs to be validated.
 *@returns Array with boolean and reason.
 */
export function validatePassword(password) {
    const splitPassword = password.split('');

    const minCharacters = 8;
    const maxCharacters = 30;
    let hasUpperCase, hasLowerCase, hasNumber, hasSpecialCharacter;

    if (password.length < minCharacters) {
        return [false, 'Password is too short'];
    } else if (password.length > maxCharacters) {
        return [false, 'Password is too long'];
    }

    for (const character of splitPassword) {
        if (upperCaseLetters.includes(character)) {
            hasUpperCase = true;
        } else if (lowerCaseLetters.includes(character)) {
            hasLowerCase = true;
        } else if (numbers.includes(character)) {
            hasNumber = true;
        } else if (specialChars.includes(character)) {
            hasSpecialCharacter = true;
        }
    }
    // returns undefined????
    console.log(
        'uppercase:',
        hasUpperCase,
        'lowercase',
        hasLowerCase,
        'numbers',
        hasNumber,
        'specialchars',
        hasSpecialCharacter,
    );
    if (!hasUpperCase) {
        return [false, 'Password needs atleast 1 uppercase letter.'];
    } else if (!hasLowerCase) {
        return [false, 'Password needs atleast 1 lowercase letter.'];
    } else if (!hasNumber) {
        return [false, 'Password needs atleast 1 number [0-9].'];
    } else if (!hasSpecialCharacter) {
        return [
            false,
            'Password needs atleast 1 special character (!, @ #, $, %, &, *, ?).',
        ];
    } else {
        return [true, 'Password is valid.'];
    }
}

/**
 * Creates A Bootstrap warning Element.
 *
 * @param   string  The message the warning should display.
 */
export function createWarningElement(string) {
    const warningEl = document.createElement('div');
    warningEl.classList = 'alert alert-warning';
    warningEl.role = 'alert';
    warningEl.textContent = string;
    return warningEl;
}
