import readlineSync from 'readline-sync';

const getUserName = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  return userName;
};

export default getUserName;

export const randomNumberTo100 = () => Math.ceil(Math.random() * 100);

export const randomNumberTo10 = () => Math.ceil(Math.random() * 10);

export const checkAnswer = (correctAnswer, userAnswer, userName) => {
  if (correctAnswer.toString() === userAnswer) {
    console.log(`Your answer: ${correctAnswer}\ncorrect`);
  } else {
    return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
  }
}

