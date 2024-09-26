#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getUserName, { randomNumberTo100 } from '../cli.js';

const findGCD = (a, b) => (b === 0 ? a : findGCD(b, a % b));

const gcd = () => {
  const userName = getUserName();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const firstRandNumber = randomNumberTo100();
    const secondRandNumber = randomNumberTo100();

    const correctAnswer = findGCD(firstRandNumber, secondRandNumber);
    console.log(`Question: ${firstRandNumber} ${secondRandNumber}`);
    const userAnswer = readlineSync.question();

    if (correctAnswer.toString() === userAnswer) {
      console.log(`Your answer: ${correctAnswer}\ncorrect`);
    } else {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};
gcd();
