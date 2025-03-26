const bar= document.getElementById("bar");
const nav=document.getElementById("navbar");
const cl=document.getElementById("close");

if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add("active")
    })
}
if(cl){
    cl.addEventListener("click",()=>{
        nav.classList.remove("active")
    })
}

document.getElementById('menBtn').addEventListener('click', function() {
    document.getElementById('menCategories').style.display = 'block';
    document.getElementById('womenCategories').style.display = 'none';
    document.getElementById('KidCategories').style.display = 'none';
});

document.getElementById('womenBtn').addEventListener('click', function() {
    document.getElementById('womenCategories').style.display = 'block';
    document.getElementById('menCategories').style.display = 'none';
    document.getElementById('KidCategories').style.display = 'none';
});

document.getElementById('KidBtn').addEventListener('click', function() {
    document.getElementById('KidCategories').style.display = 'block';
    document.getElementById('menCategories').style.display = 'none';
    document.getElementById('womenCategories').style.display = 'none';
});

//document.getElementById('signupForm').addEventListener('submit', function(e) {
  //  e.preventDefault();
    //const username = document.getElementById('username').value;
    //const email = document.getElementById('email').value;
    //const password = document.getElementById('password').value;

    // Save the details to localStorage
    //localStorage.setItem('username', username);
    //localStorage.setItem('email', email);
    //localStorage.setItem('password', password);

    //alert('Signup successful! Please login.');
    //window.location.href = 'login.html'; // Redirect to login page
//});


// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select form elements
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginMessage = document.getElementById('loginMessage');
    const signupMessage = document.getElementById('signupMessage');
  
    // Handle sign-up
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();  // Prevent the form from refreshing the page
  
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
  
            // Check if the email is already registered
            if (localStorage.getItem(email)) {
                signupMessage.textContent = 'This email is already registered!';
                signupMessage.style.color = 'red';
            } else {
                // Store email and password in localStorage (simulating a backend database)
                localStorage.setItem(email, password);
                signupMessage.textContent = 'Sign up successful!';
                signupMessage.style.color = 'green';
            }
        });
    }

    // Handle login
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            // Retrieve stored password for the email
            const storedPassword = localStorage.getItem(email);

            // Validate login
            if (storedPassword && storedPassword === password) {
                loginMessage.textContent = 'Login successful!';
                loginMessage.style.color = 'green';
                // Redirect to the homepage after successful login
                window.location.href = 'home.html';
            } else {
                loginMessage.textContent = 'Incorrect email or password!';
                loginMessage.style.color = 'red';
            }
        });
    }
});


