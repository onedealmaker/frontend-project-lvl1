import runEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'What number is missing in the progression?';

const getProgression = (progressionLength, firstMember, step) => {
  const progression = [firstMember];
  for (let newMemberIndex = progression.length; newMemberIndex < progressionLength; newMemberIndex += 1) {
    const lastMember = progression[newMemberIndex - 1];
    const newMember = lastMember + step;
    progression.push(newMember);
  }
  return progression;
};

const getQuestion = (progression, answerIndex) => {
  const riddle = [...progression];
  riddle[answerIndex] = '..';
  return riddle.join(' ');
};

const generateQuestionAndAnswer = () => {
  const progressionLength = getRandomNumber(5, 10);
  const step = getRandomNumber(5, 21);
  const firstMember = getRandomNumber(1, 10);
  const progression = getProgression(progressionLength, firstMember, step);
  const answerIndex = getRandomNumber(0, progressionLength - 1);
  const answer = progression[answerIndex].toString();
  const question = getQuestion(progression, answerIndex);
  return [question, answer];
};

export default () => runEngine(description, generateQuestionAndAnswer);
