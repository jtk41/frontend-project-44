#!/usr/bin/env node
/* eslint-disable import/extensions */

import { getRandomNumber } from '../cli.js';
import gameEngine from '../gameEngine.js';

const findGCD = (a, b) => (b === 0 ? a : findGCD(b, a % b));
const description = 'Find the greatest common divisor of given numbers.';

const gameLogic = () => {
  const firstRandNumber = getRandomNumber(100);

  const secondRandNumber = getRandomNumber(100);

  const correctAnswer = findGCD(firstRandNumber, secondRandNumber);

  return { correctAnswer, question: `Question: ${firstRandNumber} ${secondRandNumber}` };
};

gameEngine(description, gameLogic);
