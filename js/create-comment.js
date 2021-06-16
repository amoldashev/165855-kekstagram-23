
import { MIN_RANDOM_ID, MAX_RANDOM_ID } from './parameters.js';
import { MESSAGE_ARRAY, NAMES_ARRAY } from './data.js';
import { getRandomNumber } from './get-random-number.js';

const createComment = (param) => new Array(param).fill(null).map(() => ({
  id: getRandomNumber(1, 25),
  avatar: `img/avatar-${ getRandomNumber(MIN_RANDOM_ID, MAX_RANDOM_ID) }.svg`,
  message: MESSAGE_ARRAY[getRandomNumber(1, MESSAGE_ARRAY.length - 1)],
  name: NAMES_ARRAY[getRandomNumber(1, NAMES_ARRAY.length - 1)],
}));

// Экспорт функции в мэйн
export { createComment };
