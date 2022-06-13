// local Storage

const signUp = e => {
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
        formData.push({
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        userName: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    });
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(localStorage.getItem('formData'));
}

// username and password enable login function only if it isn't empty
function logInEmpty() {
    let username = document.getElementById('username2').value;
    let password = document.getElementById('password2').value;

    if (username.trim() != '' && password.trim() != '' ) {
        document.getElementById('loginButton').removeAttribute('disabled');
    } else {
         document.getElementById('loginButton').disabled = true;
    }
}
//
// Modal Login Success!
let logInModal = document.getElementById('logInModal');
let loginBtn = document.getElementById('loginButton');

//let closeModal = document.getElementById('close');

let registerModal = document.getElementById('registerModal');
let registerBtn = document.getElementById('registerButton');


loginBtn.onclick = function() {
    logInModal.style.display = "block";
}

//closeModal.onclick = function() {
 //   logInModal.style.display = "none";
//}

registerBtn.onclick = function() {
   registerModal.style.display = "block";
}


//Enable register button if necessary forms are filled.
function isEmptyRegister() {
    let a = document.getElementById('firstName').value;
    let b = document.getElementById('lastName').value;
    let c = document.getElementById('username').value;
    let d = document.getElementById('email').value;
    let e = document.getElementById('password').value;
    let f = document.getElementById('confirm-password').value;
    if (a.trim() != '' && b.trim() != '' && c.trim() != '' && d.trim() != '' && e.trim() != '' && f.trim() === e.trim() ) {
        document.querySelector('#registerButton').removeAttribute('disabled');
    } else {
        document.getElementById('registerButton').disabled = true;
    }
}

// Register form validation
const firstNameEl = document.querySelector('#firstName');
const lastNameEl = document.querySelector('#lastName');
const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');

const form = document.querySelector('#registerForm');

const checkFirstName = () => {
    let valid = false ;
    const min = 1,
          max = 50;

    const firstName = firstNameEl.value.trim();

    if (!isRequired(firstName)) {
        showError(firstNameEl, '❗ FIRST NAME cannot be blank. ❗ ');
    } else if (!isBetween(firstName.length, min, max)) {
        showError(firstNameEl, `❗ FIRST NAME must be between ${min} and ${max} characters.❗ `)
    }   else {
        showSuccess(firstNameEl, `✔ Great!`);
        valid=true;
    }
    return valid;
};

const checkLastName = () => {
    let valid = false ;
    const min = 1,
          max = 50;

    const lastName = lastNameEl.value.trim();

    if (!isRequired(lastName)) {
        showError(lastNameEl, '❗ LAST NAME cannot be blank. ❗ ');
    } else if (!isBetween(lastName.length, min, max)) {
        showError(lastNameEl, `❗ LAST NAME must be between ${min} and ${max} characters. ❗`)
    }   else {
        showSuccess(lastNameEl, `✔ Great!`);
        valid=true;
    }
    return valid;
};

const checkUsername = () => {

    let valid = false;

    const min = 5,
        max = 25;

    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, '❗ USERNAME cannot be blank. ❗');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `❗ USERNAME must be between ${min} and ${max} characters. ❗ `)
    } else {
        showSuccess(usernameEl, `✔ Great!`);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, '❗ EMAIL cannot be blank. ❗ ');
    } else if (!isEmailValid(email)) {
        showError(emailEl, '❗ EMAIL is not valid. ❗ ')
    } else {
        showSuccess(emailEl, `✔ Great!`);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;


    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, '❗ PASSWORD cannot be blank. ❗ ');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, '❗ PASSWORD must have at least 8 characters that includes at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*) ❗ ');
    } else {
        showSuccess(passwordEl, `✔ Great!`);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, '❗ Please enter the password again ❗ ');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, '❗ The password does not match ❗ ');
    } else {
        showSuccess(confirmPasswordEl, `✔ Great!`);
        valid = true;
    }

    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
    const success = formField.querySelector('#success');
    success.textContent = '';
};

const showSuccess = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '' ;
    // show success message
    const success = formField.querySelector('#success');
    success.textContent = message;
}


form.addEventListener('submit', function (e) {
    // preventDefault() prevents the form from submitting 
    //but I removed it since I already disabled the register button first
    // validate fields
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword(),
        isFirstNameValid = checkFirstName(),
        isLastNameValid = checkLastName();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid &&
        isFirstNameValid &&
        isLastNameValid;

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
        case 'firstName': 
            checkFirstName();
            break;
        case 'lastName':
            checkLastName();
            break;
    }
}));

// disabling enter key because idk how to solve it yet lol 
document.addEventListener('keypress', function (e) {
    if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
    }
});