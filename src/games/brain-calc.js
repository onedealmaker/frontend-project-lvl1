import runEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'What is the result of the expression?';
const operators = '-+*';

const calculate = (firstMember, operator, secondMember) => {
  switch (operator) {
    case '-':
      return firstMember - secondMember;
    case '+':
      return firstMember + secondMember;
    case '*':
      return firstMember * secondMember;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generateQuestionAndAnswer = () => {
  const firstMember = getRandomNumber(1, 100);
  const secondMember = getRandomNumber(1, 100);
  const operatorIndex = getRandomNumber(0, operators.length - 1);
  const operator = operators.charAt(operatorIndex);
  const question = `${firstMember} ${operator} ${secondMember}`;
  const rightAnswer = String(calculate(firstMember, operator, secondMember));
  return [question, rightAnswer];
};

export default () => runEngine(description, generateQuestionAndAnswer);
