let jumpToTop = document.getElementById("jumptotop");

function topFunction() {
    document.documentElement.scrollTop = 0;
}

let request = new XMLHttpRequest();
request.addEventListener("load", processResponse);
request.open("GET", "https://api.tradingeconomics.com/markets/search/coffee?c=guest:guest&f=json");
request.send();

function processResponse (e) {
    
    let parsedResponse = JSON.parse(e.target.response);
    console.log(parsedResponse);
    let firstElement = parsedResponse[0];
    let last = firstElement.Last;
    let last2 = JSON.parse(e.target.response)[0].Last;
    //console.log(firstElement);
    let coffeePrice = document.getElementById("coffeePrice");
    coffeePrice.innerHTML = "$" + last;
}




let submit = document.getElementById("submit");
let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let responce = document.getElementById("responce")

submit.addEventListener("click", submitForm);

function submitForm(e) {
    e.preventDefault();
    let errorMessage = missingResponce (name.value, email.value, message.value);
    responce.innerHTML = errorMessage;

    if(errorMessage === "") {
        let request = new XMLHttpRequest();
        request.addEventListener("load", processFormResponse);
        request.open("", "");
        let body = {
            name: name.value,
            email: email.value,
            message: message.value,
            to: "your email address"
        };
        request.send(JSON.stringify(body));

        
    }
}

function processFormResponse (e) {
            
    let parsedResponse = JSON.parse(e.target.response);
    console.log(parsedResponse);
}

function missingResponce(name,email,message) {
    if (name === "" || email === "" || message === "") {
        responce = "*Please complete entire form above";     
    } else {
        responce = "";
    }
    
    return responce;
}