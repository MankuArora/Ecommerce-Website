document.addEventListener('DOMContentLoaded', function() {
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginMessage = document.getElementById('loginMessage');
const signupMessage = document.getElementById('signupMessage');

  
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
          e.preventDefault();
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        if (localStorage.getItem(email)) {
            signupMessage.textContent = 'This email is already registered!';
            signupMessage.style.color = 'red';
        } else {
              
            localStorage.setItem(email, password);
            signupMessage.textContent = 'Sign up successful!';
            signupMessage.style.color = 'green';
        }
    });
}

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        
        const storedPassword = localStorage.getItem(email);

        if (storedPassword && storedPassword === password) {
            loginMessage.textContent = 'Login successful!';
            loginMessage.style.color = 'green';
              
            window.location.href = 'home.html';
        } else {
            loginMessage.textContent = 'Incorrect email or password!';
            loginMessage.style.color = 'red';
        }
    });
}
});
