import readlineSync from 'readline-sync';

const answersToWin = 3; // count of game rounds

export default (gameDescription, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const gameIter = (attemptNum) => {
    if (attemptNum === answersToWin) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const questionAndAnswer = getQuestionAndAnswer();
    const [question, rightAnswer] = questionAndAnswer;
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`);
      return;
    }

    gameIter(attemptNum + 1);
  };

  gameIter(0);
};
