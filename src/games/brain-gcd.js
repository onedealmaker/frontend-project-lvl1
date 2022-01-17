import runEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (firstMember, secondMember) => {
  if (secondMember === 0) {
    return firstMember;
  }

  return findGcd(secondMember, firstMember % secondMember);
};

const generateQuestionAndAnswer = () => {
  const firstMember = getRandomNumber(1, 50);
  const secondMember = getRandomNumber(1, 50);
  const question = `${firstMember} ${secondMember}`;
  const rightAnswer = String(findGcd(firstMember, secondMember));
  return [question, rightAnswer];
};

export default () => runEngine(description, generateQuestionAndAnswer);
