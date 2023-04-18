const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value;
const inputResult = document.getElementById("myInput")
const copyText = document.getElementById("myInput");
const copyButton = document.getElementById("copyButton");

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
    const special = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '{', '}', '[', ']', ':', ';', '?', ', ', '.', '|', '\\'];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const nonSpecial = [...upperCase, ...lowerCase, ...numbers];
    let password = '';





    for (let i = 0; i < lengthLocal; i++) {
        password += getRandomElement([...lowerCase, ...numbers]);
    }
    if (numberState[0] === 0 && specialState[0] === 0 && upperState[0] === 0) {
        //add dentro de cada if se tem o norepeat state on ou of, e ai dividir o codigo nesse if ou else
        // Caso 1: Nenhum campo ativado
        // code here
    }

    if (numberState[0] === 1 && specialState[0] === 0 && upperState[0] === 0) {
        // Caso 2: Somente numberState ativado
        // code here
    }

    if (numberState[0] === 0 && specialState[0] === 1 && upperState[0] === 0) {
        // Caso 3: Somente specialState ativado
        // code here
    }

    if (numberState[0] === 0 && specialState[0] === 0 && upperState[0] === 1) {
        // Caso 4: Somente upperState ativado
        // code here
    }

    if (numberState[0] === 1 && specialState[0] === 1 && upperState[0] === 0) {
        // Caso 5: numberState e specialState ativados
        // code here
    }

    if (numberState[0] === 1 && specialState[0] === 0 && upperState[0] === 1) {
        // Caso 6: numberState e upperState ativados
        // code here
    }

    if (numberState[0] === 0 && specialState[0] === 1 && upperState[0] === 1) {
        // Caso 7: specialState e upperState ativados
        // code here
    }

    if (numberState[0] === 1 && specialState[0] === 1 && upperState[0] === 1) {
        // Caso 8: Todos os campos ativados
        // code here
    }














    return password;
};

function buttonClicked() {
    copyButton.textContent = "Copy"
    inputResult.value = genPass(length);
}