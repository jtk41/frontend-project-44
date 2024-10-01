#!/usr/bin/env node
/* eslint-disable import/extensions */

import { getRandomNumber } from '../cli.js';
import gameEngine from '../gameEngine.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameLogic = () => {
  let correctAnswer;

  const randomNumber = getRandomNumber(100);

  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return { correctAnswer, question: `Question: ${randomNumber}` };
};

gameEngine(description, gameLogic);
