const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value;
const inputResult = document.getElementById("myInput")

let length;

slider.oninput = function() {
    output.innerHTML = this.value;
    length = this.value;
}

const special = document.getElementById("special-char");
const upper = document.getElementById("upper");
const number = document.getElementById("number");
const noRepeat = document.getElementById("similar");

let specialState;
let upperState;
let numberState;
let noRepeatState;

checkState(special, specialState);
checkState(upper, upperState);
checkState(number, numberState);
checkState(noRepeat, noRepeatState);

function checkState(toggle, state){
    toggle.addEventListener("change", function (event) {
        if (event.target.checked){
            state = true;
        } else {
            state = false
        }
    });
}
function copyFunction() {
    const copyText = document.getElementById("myInput");

    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(copyText.value);
}





const getRandomElement = arr => {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}


const generateRandomPasswordSelection = (length) => {
    const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const special = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '{', '}', '[', ']', ':', ';', '?', ', ', '.', '|', '\\'];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const nonSpecial = [...uppercase, ...lowercase, ...numbers];
    let password = '';

    if (numberState && !specialState && !upperState && !noRepeatState) { //only number true
        for (let i = 0; i < length; i++) {
            password += getRandomElement([...lowercase, ...uppercase])
        }
    } else {
        for (let i = 0; i < length; i++) { //all true;
            // Previous character is a special character
            if (i !== 0 && special.includes(password[i - 1])) {
                password += getRandomElement(nonSpecial);
            } else password += getRandomElement([...nonSpecial, ...special]);
        }
    }


    return password;
}


function buttonClicked(){
    var pass = generateRandomPasswordSelection(length)
    console.log(pass)
    inputResult.innerHTML = pass;
}
