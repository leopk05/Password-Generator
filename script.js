const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value;
const inputResult = document.getElementById("myInput")
const copyText = document.getElementById("myInput");
const copyButton = document.getElementById("copyButton");

let length = 10;

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
    copyButton.textContent = "Copied"
    copyText.select();
    copyText.setSelectionRange(0, 22);
    navigator.clipboard.writeText(copyText.value);
}



const getRandomElement = arr => {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

const genPass = (lengthLocal) => {
    const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const special = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '{', '}', '[', ']', ':', ';', '?', ',', '.', '|', '\\'];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let password = ""

    const nonSpecial = [...upperCase, ...lowerCase, ...numbers];


    if (numberState[0] === 0 && specialState[0] === 0 && upperState[0] === 0) {
        password = finalPass(noRepeatState, lowerCase, lengthLocal);
    }





    if (numberState[0] === 1 && specialState[0] === 0 && upperState[0] === 0) {
        password = finalPass(noRepeatState, [...numbers,...lowerCase], lengthLocal);
    }



    if (numberState[0] === 0 && specialState[0] === 1 && upperState[0] === 0) {
        password = finalPass(noRepeatState, [...special,...lowerCase], lengthLocal);
    }



    if (numberState[0] === 0 && specialState[0] === 0 && upperState[0] === 1) {
        password = finalPass(noRepeatState, [...upperCase,...lowerCase], lengthLocal);
    }



    if (numberState[0] === 1 && specialState[0] === 1 && upperState[0] === 0) {
        password = finalPass(noRepeatState, [...special, ...numbers, ...lowerCase], lengthLocal);
    }





    if (numberState[0] === 1 && specialState[0] === 0 && upperState[0] === 1) {
        password = finalPass(noRepeatState, [...numbers, ...upperCase, ...lowerCase], lengthLocal);
    }




    if (numberState[0] === 0 && specialState[0] === 1 && upperState[0] === 1) {
        password = finalPass(noRepeatState, [...special, ...upperCase, ...lowerCase], lengthLocal);
    }




    if (numberState[0] === 1 && specialState[0] === 1 && upperState[0] === 1) {
        password = finalPass(noRepeatState, [...numbers, ...special, ...upperCase, ...lowerCase], lengthLocal);
    }












    return password;

};



function finalPass(repeatState, arrayToUse, lengthLocal){
    let password = ""
    if (repeatState[0] === 1){
        while (password.length < lengthLocal){
            let current = getRandomElement(arrayToUse)
            if (!password.includes(current)) {
                password += current
            }
        }
    } else {
        while (password.length < lengthLocal){
            let current = getRandomElement(arrayToUse)
            password += current;
        }

    }
    return password;
}









function buttonClicked() {
    copyButton.textContent = "Copy" //need to add copy button different here..
    inputResult.value = genPass(length);
    if (length >= 16){
        inputResult.classList.add("adjust")
    } else {
        inputResult.classList.remove("adjust")
    }
}


