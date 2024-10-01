#!/usr/bin/env node
/* eslint-disable import/extensions */

import { getRandomNumber } from '../cli.js';
import gameEngine from '../gameEngine.js';

const description = 'What number is missing in the progression?';

const gameLogic = () => {
  const secondRandNumber = getRandomNumber(100);

  const sec = getRandomNumber(10);

  let progressionNumb = secondRandNumber;

  const progression = [];

  for (let i = 0; i < 10; i += 1) {
    progressionNumb += sec;
    progression.push(progressionNumb);
  }

  const correctAnswer = progression[sec - 1];

  progression.splice(sec - 1, 1, '..');

  const endProgression = progression.toString().replaceAll(',', ' ');

  return { correctAnswer, question: `Question: ${endProgression}` };
};

gameEngine(description, gameLogic);
