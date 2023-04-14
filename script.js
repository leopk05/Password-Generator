const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value;
const inputResult = document.getElementById("myInput")

var length = 10;

slider.oninput = function() {
    output.innerHTML = this.value;
    length = this.value;
}

const special = document.getElementById("special-char");
const upper = document.getElementById("upper");
const number = document.getElementById("number");
const noRepeat = document.getElementById("similar");

let specialState = [0];
let upperState = [0];
let numberState = [0];
let noRepeatState = [0];

checkState(special, specialState);
checkState(upper, upperState);
checkState(number, numberState);
checkState(noRepeat, noRepeatState);

function checkState(toggle, state) {
    toggle.addEventListener("change", function (event) {
        if (event.target.checked){
            state.pop();
            state.push(1);
        } else {
            state.pop();
            state.push(0);
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

const genPass = (lengthLocal) => {
    const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const special = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '{', '}', '[', ']', ':', ';', '?', ', ', '.', '|', '\\'];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const nonSpecial = [...uppercase, ...lowercase, ...numbers];
    var password = '';

    if (numberState[0] === 1 && specialState[0] === 0 && upperState[0] === 0 && noRepeatState[0] === 0) { //only number true
        for (let i = 0; i < lengthLocal; i++) {
            password += getRandomElement([...lowercase, ...numbers]);
        }
    } else if(numberState[0] === 1 && specialState[0] === 0 && upperState[0] === 0 && noRepeatState[0] === 0){

    }
    return password;
};

function buttonClicked() {
    const pass = genPass(length);
    console.log(pass)
    inputResult.value = pass;
}