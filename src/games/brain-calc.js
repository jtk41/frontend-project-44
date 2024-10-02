#!/usr/bin/env node
/* eslint-disable import/extensions */

import { getRandomNumber } from '../cli.js';
import gameEngine from '../gameEngine.js';

const description = 'What is the result of the expression?';

const gameLogic = () => {
  const randomOperator = Math.floor(Math.random() * 3);

  const operators = ['+', '-', '*'];

  const firstRandomNumber = getRandomNumber(100);

  const secondRandomNumber = getRandomNumber(100);

  let correctAnswer;

  if (randomOperator === 0) {
    correctAnswer = firstRandomNumber + secondRandomNumber;
  } else if (randomOperator === 1) {
    correctAnswer = firstRandomNumber - secondRandomNumber;
  } else {
    correctAnswer = firstRandomNumber * secondRandomNumber;
  }

  return { correctAnswer, question: `Question: ${firstRandomNumber} ${operators[randomOperator]} ${secondRandomNumber}` };
};

gameEngine(description, gameLogic);
