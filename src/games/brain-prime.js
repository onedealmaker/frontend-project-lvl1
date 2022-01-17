import runEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isNumPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 3000);
  const rightAnswer = isNumPrime(question) ? 'yes' : 'no';
  return [String(question), rightAnswer];
};

export default () => runEngine(description, generateQuestionAndAnswer);
