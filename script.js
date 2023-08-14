const login = document.getElementById('login');
const overlay = document.getElementById('overlay');
const back = document.getElementById('back');

login.addEventListener('click', () => {
  overlay.style.display = 'flex';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  overlay.style.transition = '1s';
});

back.addEventListener('click', () => {
  overlay.style.display = 'none';
});

const email = document.forms['form']['email'];
const password = document.forms['form']['password'];

const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

email.addEventListener('textInput', () => {
  if (email.value.length < 8) {
    email.style.border = '2.5px solid red';
    emailError.style.display = 'block';
    return false;
  }
});

password.addEventListener('textInput', () => {
  if (password.value.length < 8) {
    password.style.border = '2.5px solid red';
    passwordError.style.display = 'block';
    return false;
  }
});

email.addEventListener('textInput', () => {
  if (email.value.length >= 8) {
    email.style.border = '2.5px solid #4588ff';
    emailError.style.display = 'none';
  }
});

password.addEventListener('textInput', () => {
  if (password.value.length >= 8) {
    password.style.border = '2.5px solid #4588ff';
    passwordError.style.display = 'none';
  }
});
