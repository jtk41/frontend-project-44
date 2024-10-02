#!/usr/bin/env node
/* eslint-disable import/extensions */

import { getRandomNumber } from '../cli.js';
import gameEngine from '../gameEngine.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameLogic = () => {
  let correctAnswer = 'yes';
  const randomNumber = getRandomNumber(100);
  if (randomNumber <= 1) {
    correctAnswer = 'no';
  }
  for (let i = 2; i <= Math.sqrt(randomNumber); i += 1) {
    if (randomNumber % i === 0) {
      correctAnswer = 'no';
    }
  }
  return { correctAnswer, question: `Question: ${randomNumber}` };
};

gameEngine(description, gameLogic);
