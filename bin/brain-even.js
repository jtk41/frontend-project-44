#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

const brain = () => {
  const userName = getUserName();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    let even = '';

    const randomNumber = Math.ceil(Math.random() * 100);
    console.log(`Question:${randomNumber}`);

    const userAnswer = readlineSync.question();
    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      return console.log(`${userAnswer} not yes or not`);
    }
    if (randomNumber % 2 === 0) {
      even = 'yes';
    } else {
      even = 'no';
    }
    if (even === userAnswer) {
      console.log(`Your answer: ${even}
correct`);
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${even}.
Let's try again, ${userName}!`);
    }
  }
  return true;
};
brain();
