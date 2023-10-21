const signInForm = document.getElementById('signin')
const signInEmail = document.getElementById('login-email')
const signInPassword = document.getElementById('login-password')

const retrievedEmail = localStorage.getItem('email')
const retrievedPassword = localStorage.getItem('password')

signInForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputEmail = signInEmail.value.trim()
    const inputPassword = signInPassword.value.trim()
    if(inputEmail === retrievedEmail && inputPassword === retrievedPassword){
        alert('Logged in successfully')
        window.location.href = "home.html"
    } else {
        alert('Invalid username or password')
    }
}) 