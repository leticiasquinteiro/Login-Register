function login(event){
    event.preventDefault();
    window.location.href = "welcome.html";
}

function singup(event){
    event.preventDefault();
    window.location.href = "welcome.html";
}

document.getElementById('toggle-form').addEventListener('click', function(e) { 
    e.preventDefault();
    var loginForm = document.getElementById('login-form');
    var singupForm = document.getElementById('singup-form');
    if(loginForm.style.display === 'none'){
        loginForm.style.display = 'block';
        singupForm.style.display = 'none';
        document.getElementById('toggle-form').innerText = 'Create an account';
    } else {
        loginForm.style.display = 'none';
        singupForm.style.display = 'block';
        document.getElementById('toggle-form').innerText = 'Login'
    }
});

function toggleNightMode(){
    document.body.classList.toggle('dark-mode');
}