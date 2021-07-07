
import { MESSAGE_ARRAY, NAMES_ARRAY, MIN_RANDOM_ID, MAX_RANDOM_ID } from './data.js';
import { getRandomPositiveInt } from './utils.js';

const createComment = (param) => new Array(param).fill(null).map(() => ({
  id: getRandomPositiveInt(1, 25),
  avatar: `img/avatar-${ getRandomPositiveInt(MIN_RANDOM_ID, MAX_RANDOM_ID) }.svg`,
  message: MESSAGE_ARRAY[getRandomPositiveInt(1, MESSAGE_ARRAY.length - 1)],
  name: NAMES_ARRAY[getRandomPositiveInt(1, NAMES_ARRAY.length - 1)],
}));

// Экспорт функции в мэйн
export { createComment };
