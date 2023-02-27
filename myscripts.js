const pwd = document.querySelector('#password').value
const pwdConfirm = document.querySelector('#confirmpassword').value
const confirmButton = document.querySelector('.confirmButton')
const confirmMessage = document.querySelector('.confirmMessage')

function passwordConfirm(){
    if(pwd !== pwdConfirm){
        confirmMessage.textContent = "Passwords do not match"
    }
}

confirmButton.addEventListener('click', passwordConfirm())



