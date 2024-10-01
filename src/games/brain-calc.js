#!/usr/bin/env node
/* eslint-disable import/extensions */

import { getRandomNumber } from '../cli.js';
import gameEngine from '../gameEngine.js';

const description = 'What is the result of the expression?';

const gameLogic = () => {
  const randomOperator = Math.floor(Math.random() * 3);

  const operators = ['+', '-', '*'];

  const firstRandNumber = getRandomNumber(100);

  const secondRandNumber = getRandomNumber(100);

  let correctAnswer;

  if (randomOperator === 0) {
    correctAnswer = firstRandNumber + secondRandNumber;
  } else if (randomOperator === 1) {
    correctAnswer = firstRandNumber - secondRandNumber;
  } else {
    correctAnswer = firstRandNumber * secondRandNumber;
  }

  return { correctAnswer, question: `Question: ${firstRandNumber} ${operators[randomOperator]} ${secondRandNumber}` };
};

gameEngine(description, gameLogic);
