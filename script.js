//! Sign in and Sign up toggle event
const signUpLink = document.getElementById('signUpLink')
const signInSection = document.getElementById('signin')

const signInLink = document.getElementById('signInLink')
const signUpSection = document.getElementById('signup')

signUpLink.addEventListener('click', (event) => {
    event.preventDefault()
    signInSection.style.display = 'none'
    signUpSection.style.display = 'block'
})

signInLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    signUpSection.style.display = 'none';
    signInSection.style.display = 'block';
});