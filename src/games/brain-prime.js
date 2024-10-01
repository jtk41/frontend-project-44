#!/usr/bin/env node
/* eslint-disable import/extensions */

import { getRandomNumber } from '../cli.js';
import gameEngine from '../gameEngine.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameLogic = () => {
  let correctAnswer = 'yes';
  const randNumber = getRandomNumber(100);
  if (randNumber <= 1) {
    correctAnswer = 'no';
  }
  for (let i = 2; i <= Math.sqrt(randNumber); i += 1) {
    if (randNumber % i === 0) {
      correctAnswer = 'no';
    }
  }
  return { correctAnswer, question: `Question: ${randNumber}` };
};

gameEngine(description, gameLogic);
