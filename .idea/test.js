

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

console.log(genPass(20))











// const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// const special = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '{', '}', '[', ']', ':', ';', '?', ', ', '.', '|', '\\'];
// const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//
// const nonSpecial = [...uppercase, ...lowercase, ...numbers];
// var password = '';
//
// if (numberState[0] === 1 && specialState[0] === 0 && upperState[0] === 0 && noRepeatState[0] === 0) { //only number true
//     for (let i = 0; i < lengthLocal; i++) {
//         password += getRandomElement([...lowercase, ...numbers]);
//     }
// } else {
//     for (let i = 0; i < lengthLocal; i++) { //all true;
//         if (i !== 0 && special.includes(password[i - 1])) {
//             password += getRandomElement(nonSpecial);
//         } else password += getRandomElement([...nonSpecial, ...special]);
//     }
// }
// return password;










// Caso 0: Nenhum campo ativado
if (numberState[0] === 0 && specialState[0] === 0 && upperState[0] === 0 && noRepeatState[0] === 0) {
    // code here
}

// Caso 1: Um campo ativado
if (numberState[0] === 1 && specialState[0] === 0 && upperState[0] === 0 && noRepeatState[0] === 0) {
    // code here
}

if (numberState[0] === 0 && specialState[0] === 1 && upperState[0] === 0 && noRepeatState[0] === 0) {
    // code here
}

if (numberState[0] === 0 && specialState[0] === 0 && upperState[0] === 1 && noRepeatState[0] === 0) {
    // code here
}

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


