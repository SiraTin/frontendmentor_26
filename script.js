let email = document.getElementById('mail');
let submit = document.getElementById('submit');
let form = document.querySelector('form');
let emailError = document.querySelector('.error');


email.addEventListener("input", (event)=>{
    if(email.validity.valid){
        emailError.textContent = "";
        emailError.className = "error";
        email.className = "input_email";
    }else{
        showError();
    }
});

form.addEventListener("submit", (event)=>{
    if(!email.validity.valid){
        showError();
        event.preventDefault();
    }
});

function showError(){
    if(email.validity){
        emailError.textContent = "Please provide a valid email address."
    }
    
    email.className = "input_email red_border"
}