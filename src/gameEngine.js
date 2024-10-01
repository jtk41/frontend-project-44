import getUserName from '../src/cli.js';
import readlineSync from 'readline-sync';

const gameEngine = (description, gameLogic) => {
    const userName = getUserName();
    console.log(description)
    for (let i = 0; i < 3; i += 1) {


    gameLogic();
    const { correctAnswer, question } = gameLogic()
    console.log(question)
    const userAnswer = readlineSync.question();

    if (correctAnswer.toString() === userAnswer) {
        console.log(`Your answer: ${correctAnswer}\ncorrect`);
    } else {
        return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
    }
}

    console.log(`Congratulations, ${userName}!`);
  
    return true;
};

export default gameEngine;