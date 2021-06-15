// Переменные для получения случайного числа
const MAX_LIKE_COUNT = 2000;
const MIN_LIKE = 0;

// Выставляет случайное число лайков

const getRandomNumber = function(min, max) {
  return getRandomPositiveInt(min, max);
}

export {MAX_LIKE_COUNT, MIN_LIKE, getRandomNumber};
