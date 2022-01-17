import runEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'What number is missing in the progression?';

const getProgression = (progressionLength, firstMember, step) => {
  const progression = [];
  for (let memberIndex = 0; memberIndex < progressionLength; memberIndex += 1) {
    const lastMember = progression[progression.length - 1];
    if(progression.length < 1) {
      progression.push(firstMember);
    } else {progression.push(lastMember + step)}
  }
  return progression;
};

const getQuestion = (progression, answerIndex) => {
  const riddle = [...progression];
  riddle[answerIndex] = '..';
  return riddle.join(' ');
};

const generateQuestionAndAnswer = () => {
  const progressionLength = 10;
  const step = getRandomNumber(5, 21)
  const firstMember = getRandomNumber(1, 10);
  const progression = getProgression(progressionLength, firstMember, step);
  const answerIndex = getRandomNumber(0, progressionLength - 1);
  const answer = progression[answerIndex].toString();
  const question = getQuestion(progression, answerIndex);
  return [question, answer];
};

export default () => runEngine(description, generateQuestionAndAnswer);
