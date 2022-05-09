(function() {

    let email = document.forms['form']['email'];
    let password = document.forms['form']['password'];

    let password_error = document.querySelector('.password_error');
    let email_error = document.querySelector('.email_error');

    function validateEmail() {
        if (email.value.length <= 8) {
            email_error.style.display = 'block';
            email.style.border = '1px solid red';
            email.focus();
            return false;
        } else {
            email_error.style.display = 'none';
            email.style.border = '2px solid green';
        }
    }

    function validatePassword() {
        if (password.value.length < 10) {
            password_error.style.display = 'block';
            password.style.border = '1px solid red';
            password.focus();
            return false;
        } else {
            password.style.border = '2px solid green';
            password_error.style.display = 'none';
        }
    }

    email.addEventListener('textInput', validateEmail);
    password.addEventListener('textInput', validatePassword);

})();