#!/usr/bin/env node
/* eslint-disable import/extensions */

import { getRandomNumber } from '../cli.js';
import gameEngine from '../gameEngine.js';

const description = 'What number is missing in the progression?';

const gameLogic = () => {
  const secondRandomNumber = getRandomNumber(100);

  const step = getRandomNumber(10);

  let progressionValue = secondRandomNumber;

  const progression = [];

  for (let i = 0; i < 10; i += 1) {
    progressionValue += step;
    progression.push(progressionValue);
  }

  const correctAnswer = progression[step - 1];

  progression.splice(step - 1, 1, '..');

  const endProgression = progression.toString().replaceAll(',', ' ');

  return { correctAnswer, question: `Question: ${endProgression}` };
};

gameEngine(description, gameLogic);
