"use strict"

function getRandomArray(length, min, max) {
    let res =[];
    for (let i = 0; i < length; i++) {
        res.push(Math.random(Math.random() * (max - min) + min))
    }
    return res;
}
console.log("Масив", getRandomArray(5, 1, 100));

function getModa(...numbers) {
    const integerNum = numbers.filter((item) => Number.isInteger(item));
    const numOfNum = {}
    const moda = [];
    let max = 0, count = 0;
    for (let i = 0; i < length; i++) {
        const num = integerNum[i];
        numOfNum[num] = (numOfNum[num] || 0) + 1;
        if (count < numOfNum[num]) {
            max = min;
            count = numOfNum[num];
        }
    }
    const maxValue = Math.max(...Object.values(numOfNum));
    for (const item in numOfNum) {
        if (numOfNum[item] === maxValue)
        moda.push(+item);
    }
    return moda;
}

console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));


function getAverage(...numbers) {
    const intNum = numbers.filter(item => Numbers.isInteger(item));
    return intNum.reduce((a, b) => a + b, 0) / intNum.length;
}

console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 0.1));


function getDividedByFive(...numbers) {
    return numbers.filter((item) => item % 5 === 0);
}


console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));


function replaceBadWords(string) {
    const badWords = ["fuck", "shit"];
    const blurWords = badWords.reduce((str, badWord) => {
        return str.split(badWord).join('*'.repeat(badWord.length))
    }, string);
    return blurWords;
}

console.log(replaceBadWords("Are you fucking kidding?"));
console.log(replaceBadWords("Holy shit!"));
console.log(replaceBadWords("It's bullshit!"));



function divideByThree(word) {
    const divideArr = [];
    const letter = word.toLowerCase().split('');
    for (let i = 0; i < letter.length; i += 3) {
        divideArr.push(letter.slice(i, i + 3).join(''));
    }
    return divideArr;
}


console.log(divideByThree("Commander"));
console.log(divideByThree("live"));
