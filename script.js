const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

const special = document.getElementById("special-char");
const upper = document.getElementById("upper");
const number = document.getElementById("number");
const noRepeat = document.getElementById("similar");

let specialState = false;
let upperState = false;
let numberState = false;
let noRepeatState = false;

checkState(special, specialState);
checkState(upper, upperState);
checkState(number, numberState);
checkState(noRepeat, noRepeatState);


function checkState(toggle, state){
    toggle.addEventListener("change", function (event) {
        state = event.target.checked;
    });
}




function myFunction() {
    const copyText = document.getElementById("myInput");

    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(copyText.value);
}



