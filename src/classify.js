// src/classify.js

const axios = require("axios");

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function isPerfect(num) {
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }
    return num > 1 && sum === num;
}

function isArmstrong(num) {
    const digits = num.toString().split("").map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
    return sum === num;
}

function sumOfDigits(num) {
    return num.toString().split("").map(Number).reduce((acc, digit) => acc + digit, 0);
}

async function getFunFact(num) {
    try {
        const response = await axios.get(`http://numbersapi.com/${num}/math`);
        return response.data;
    } catch (error) {
        return "Could not fetch a fun fact.";
    }
}

async function classifyNumber(num) {
    const properties = [];
    if (isArmstrong(num)) properties.push("armstrong");
    properties.push(num % 2 === 0 ? "even" : "odd");

    return {
        number: num,
        is_prime: isPrime(num),
        is_perfect: isPerfect(num),
        properties: properties,
        digit_sum: sumOfDigits(num),
        fun_fact: await getFunFact(num),
    };
}

module.exports = { classifyNumber };
