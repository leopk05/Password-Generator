

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

    for (let i = 0; i < lengthLocal; i++) {
        password += getRandomElement([...nonSpecial, ...special]);
    }




    return password;
};


let teste10 = "testando";

console.log(teste10.includes("d"));




















if (numberState[0] === 0 && specialState[0] === 0 && upperState[0] === 0 && noRepeatState[0] === 1) {
    // code here
}

// Caso 2: Dois campos ativados
if (numberState[0] === 1 && specialState[0] === 1 && upperState[0] === 0 && noRepeatState[0] === 0) {
    // code here
}

if (numberState[0] === 1 && specialState[0] === 0 && upperState[0] === 1 && noRepeatState[0] === 0) {
    // code here
}

if (numberState[0] === 1 && specialState[0] === 0 && upperState[0] === 0 && noRepeatState[0] === 1) {
    // code here
}

if (numberState[0] === 0 && specialState[0] === 1 && upperState[0] === 1 && noRepeatState[0] === 0) {
    // code here
}

if (numberState[0] === 0 && specialState[0] === 1 && upperState[0] === 0 && noRepeatState[0] === 1) {
    // code here
}

if (numberState[0] === 0 && specialState[0] === 0 && upperState[0] === 1 && noRepeatState[0] === 1) {
    // code here
}

// Caso 3: Três campos ativados
if (numberState[0] === 1 && specialState[0] === 1 && upperState[0] === 1 && noRepeatState[0] === 0) {
    // code here
}

if (numberState[0] === 1 && specialState[0] === 1 && upperState[0] === 0 && noRepeatState[0] === 1) {
    // code here
}

if (numberState[0] === 1 && specialState[0] === 0 && upperState[0] === 1 && noRepeatState[0] === 1) {
    // code here
}

if (numberState[0] === 0 && specialState[0] === 1 && upperState[0] === 1 && noRepeatState[0] === 1) {
    // code here
}

// Caso 4: Todos os campos ativados
if (numberState[0] === 1 && specialState[0] === 1 && upperState[0] === 1 && noRepeatState[0] === 1) {
    // code here
}


