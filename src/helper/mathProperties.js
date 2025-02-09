// src/helper/mathProperties.js

const axios = require("axios");

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const isPerfect = (num) => {
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      if (i != num / i) {
        sum += num / i;
      }
    }
  }
  return num > 1 && sum === num;
};

const isArmstrong = (num) => {
  const digits = num.toString().split("").map(Number);
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(digit, digits.length),
    0
  );

  return sum === num;
};

const sumOfDigits = (num) => {
    return num.toString().split("").map(Number).reduce((acc, digit) => acc + digit, 0);
}

const getFunFact = async (num) => {
  try {
    const response = await axios.get(`http://numbersapi.com/${num}/math`);
    return response.data;
  } catch (error) {
    return "No fun fact available.";
  }
};

module.exports = { isPrime, isPerfect, isArmstrong, sumOfDigits, getFunFact };
