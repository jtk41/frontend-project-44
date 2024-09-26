#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getUserName, { randomNumberTo10, randomNumberTo100 } from '../cli.js';

const progression = () => {
  const userName = getUserName();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const secondRandNumber = randomNumberTo100();
    const sec = randomNumberTo10();
    let progressionNumb = secondRandNumber;
    const progression1 = [];
    for (let index = 0; index < 10; index += 1) {
      progressionNumb += sec;
      progression1.push(progressionNumb);
    }
    const correctAnswer = progression1[sec - 1];
    progression1.splice(sec - 1, 1, '..');

    const endProgression = progression1.toString().replaceAll(',', ' ');

    console.log(`Question: ${endProgression}`);
    const userAnswer = readlineSync.question();

    if (correctAnswer === +userAnswer) {
      console.log(`Your answer: ${correctAnswer}\ncorrect`);
    } else {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};
progression();
