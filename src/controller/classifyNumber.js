// src/controller/classifyNumber.js

const {
  isArmstrong,
  isPrime,
  isPerfect,
  sumOfDigits,
  getFunFact,
} = require("../helper/mathProperties");

const classifyNumber = async (req, res) => {
  const { number } = req.query;

  if (!number || isNaN(number) || !Number.isInteger(Number(number))) {
    return res.status(400).json({ number, error: true });
  }

  const num = parseInt(number);
  const properties = [];

  if (isArmstrong(num)) {
    properties.push("armstrong");
  }

  properties.push(num % 2 === 0 ? "even" : "odd");

  const funFact = await getFunFact(num);

  return res.json({
    number: num,
    is_prime: isPrime(num),
    is_perfect: isPerfect(num),
    properties,
    digit_sum: sumOfDigits(num),
    fun_fact: funFact,
  });
};

module.exports = { classifyNumber };
