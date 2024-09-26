#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getUserName, { randomNumberTo100, checkAnswer } from '../cli.js';

const calc = () => {
  const userName = getUserName();
  const operators = ['+', '-', '*'];

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomOperator = Math.floor(Math.random() * 3);

    const firstRandNumber = randomNumberTo100();
    
    const secondRandNumber = randomNumberTo100();

    let correctAnswer;
    
    if (randomOperator === 0) {
      correctAnswer = firstRandNumber + secondRandNumber;
    } else if (randomOperator === 1) {
      correctAnswer = firstRandNumber - secondRandNumber;
    } else {
      correctAnswer = firstRandNumber * secondRandNumber;
    }
    
    console.log(`Question: ${firstRandNumber} ${operators[randomOperator]} ${secondRandNumber}`);
    
    const userAnswer = readlineSync.question();

    checkAnswer(correctAnswer, userAnswer, userName)
  }

  console.log(`Congratulations, ${userName}!`);

  return true;
};
calc();
