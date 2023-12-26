// forgot password via email/phone js
const resetBtn = document.querySelector('.reset-via-phone');
const phoneField = document.querySelector('.phone-section');
const emailField = document.querySelector('.email-section');
const emailBtn = document.querySelector('.email-btn');
const phoneBtn = document.querySelector('.phone-btn');
const paraText = document.querySelector('.paragraph-text');

resetBtn.addEventListener('click', () => {
if (emailField.style.display === 'none') {
    emailField.style.display = 'block';
    phoneField.style.display = 'none';
    emailBtn.style.display = 'block';
    phoneBtn.style.display = 'none';
    resetBtn.textContent = 'Reset Via Phone number ?';
    paraText.textContent = 'Enter an email address associated with your account and we will send you reset PIN code.';
} else {
    emailField.style.display = 'none';
    phoneField.style.display = 'block';
    emailBtn.style.display = 'none';
    phoneBtn.style.display = 'block';
    resetBtn.textContent = 'Reset Via Email Address ?';
    paraText.textContent = 'Enter a phone number associated with your account and we will send you reset PIN code.';
}
});

// Opt input js
const optInput = document.querySelectorAll('.opt-input');

optInput.forEach((input) => {
    input.addEventListener('input', function() {
        if (this.value.length > 1) {
            this.value = this.value.slice(0, 1);
        }
    })
})

// Forgot password and Change password div toggle js
const verifyBtns = document.querySelectorAll('.verify-btn');
const forgotPasswordDiv = document.querySelector('.forgot-password');
const changePasswordDiv = document.querySelector('.change-password');

changePasswordDiv.style.display = 'none';

verifyBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(forgotPasswordDiv.style.display === 'none') {
            forgotPasswordDiv.style.display = 'block';
            changePasswordDiv.style.display = 'none';
        }else {
            forgotPasswordDiv.style.display = 'none';
            changePasswordDiv.style.display = 'block';
        }
    })
})

// password show hide js
const passwordContainers = document.querySelectorAll('.password-div');

passwordContainers.forEach((container) => {
  const eyeIcons = container.querySelector('.eye-icons');
  const eyeCloseIcon = container.querySelector('.eye-close');
  const eyeOpenIcon = container.querySelector('.eye-open');
  const passwordInput = container.querySelector('.password'); // Replace with your input class

  eyeOpenIcon.style.display = 'none';

  eyeIcons.addEventListener('click', () => {
    const isClosed = eyeCloseIcon.style.display === 'none';

    eyeCloseIcon.style.display = isClosed ? 'block' : 'none';
    eyeOpenIcon.style.display = isClosed ? 'none' : 'block';
    passwordInput.type = isClosed ? 'password' : 'text';
  });
});
