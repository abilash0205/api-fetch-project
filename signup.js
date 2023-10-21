const signUpForm = document.getElementById('signup')

signUpForm.addEventListener('submit', (event) => {
    event.preventDefault()
    validateInputs()
})
function validateInputs(){
    const userName = document.getElementById('signup-name').value.trim()
    const userEmail = document.getElementById('signup-email').value.trim()
    const userPassword = document.getElementById('signup-password').value.trim()
    let isValid = true
    
    if(userName === ""){
        alert('Username is required')
        isValid = false
    } 

    if(userEmail == ""){
        alert('Email is required')
        isValid = false
    } else if(!validateEmail(userEmail)){
        alert('Enter a valid email')
        isValid = false
    } else {
        localStorage.setItem('email', userEmail)
    }

    if(userPassword === ""){
        alert('Password is required')
        isValid = false
    } else {
        localStorage.setItem('password', userPassword)
    }   

    if(isValid){
        window.alert('Created account successfully')
        window.location.href = "/API Fetching/home.html"
    }
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };