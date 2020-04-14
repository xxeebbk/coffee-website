let jumpToTop = document.getElementById("jumptotop");

function topFunction() {
    document.documentElement.scrollTop = 0;
}

let submit = document.getElementById("submit");
let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let responce = document.getElementById("responce")

submit.addEventListener("click", submitForm);

function submitForm(e) {
    e.preventDefault();
    responce.innerHTML = missingResponce (name.value, email.value, message.value);
}

function missingResponce(name,email,message) {
    if (name === "" || email === "" || message === "") {
        responce = "*Please complete entire form above";
    }
    
    return responce;
}