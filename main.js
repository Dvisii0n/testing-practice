export function capitalize(string) {
    const firstLetter = string.charAt(0);
    return string.replace(firstLetter, firstLetter.toUpperCase());
}

export function reverseString(string) {
    let str = string.split("");
    let reversed = [];
    for (let i = str.length - 1; i >= 0; i--) {
        reversed.push(str[i]);
    }
    return reversed.join("");
}

export const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
};

export function caesarCipher(string, key) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let cypher = [];
    for (let i = 0; i < string.length; i++) {
        const ogChar = string.charAt(i);
        const ogCharLower = ogChar.toLowerCase();
        if (!alphabet.includes(ogCharLower)) {
            cypher.push(ogChar);
            continue;
        }
        const index = alphabet.indexOf(ogCharLower);
        const shiftedChar = alphabet.charAt((index + key) % alphabet.length);
        cypher.push(
            isUppercase(ogChar) ? shiftedChar.toUpperCase() : shiftedChar
        );
    }
    return cypher.join("");

    function isUppercase(char) {
        return char.toUpperCase() === char;
    }
}

export function analyzeArray(arr) {
    arr.sort((a, b) => a - b);
    return {
        average: arr.reduce((prev, curr) => prev + curr, 0) / arr.length,
        min: arr[0],
        max: arr[arr.length - 1],
        length: arr.length,
    };
}
