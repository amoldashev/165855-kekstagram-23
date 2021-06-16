import { getRandomPositiveInt } from './utils/utils.js';

// Вызывает случайное число лайков

const getRandomNumber = function(min, max) {
  return getRandomPositiveInt(min, max);
};

export { getRandomNumber };
