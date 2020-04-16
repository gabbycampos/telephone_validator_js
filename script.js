function telephoneCheck(str) {
    const regex = /^(1 |1)*(\d{3}|\(\d{3}\))[ -]{0,1}(\d{3})[ -]{0,1}(\d{4}$)/g;
    return regex.test(str);
}
//console.log(telephoneCheck("555-555-5555"));

function checkInput(str) {
    var check = telephoneCheck(str);
    if (check) {
        answer.textContent = "Yes, that's a valid phone number!"
    } else {
        answer.textContent = "Not a valid phone number - check the format."
    }
}

let myForm = document.getElementById('validator');
let wordInput = document.getElementById('text');
let answer = document.getElementById('answer');

myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let userInput = wordInput.value;
    answer.innerHTML = telephoneCheck(userInput);
})

// regexpal.com
