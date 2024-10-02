#!/usr/bin/env node
/* eslint-disable import/extensions */

import { getRandomNumber } from '../cli.js';
import gameEngine from '../gameEngine.js';

const findGCD = (a, b) => (b === 0 ? a : findGCD(b, a % b));
const description = 'Find the greatest common divisor of given numbers.';

const gameLogic = () => {
  const firstRandomNumber = getRandomNumber(100);

  const secondRandomNumber = getRandomNumber(100);

  const correctAnswer = findGCD(firstRandomNumber, secondRandomNumber);

  return { correctAnswer, question: `Question: ${firstRandomNumber} ${secondRandomNumber}` };
};

gameEngine(description, gameLogic);
