#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getUserName from '../cli.js';

const even = () => {
  const userName = getUserName();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    let correctAnswer = '';

    const randomNumber = Math.ceil(Math.random() * 100);
    console.log(`Question:${randomNumber}`);

    const userAnswer = readlineSync.question();
    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      return console.log(`${userAnswer} not yes or not`);
    }
    if (randomNumber % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    if (correctAnswer.toString() === userAnswer) {
      console.log(`Your answer: ${correctAnswer}\ncorrect`);
    } else {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
    }
  }
  return true;
};
even();
