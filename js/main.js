// Первое задание. Получение целого числа + условия.
const ERROR_MESSAGE = new Error('Невозможно разобрать входные данные');

function getRandomInt (min, max) {
  const RANDOM = Math.floor(Math.random() * (max - min)) + min;

  if (RANDOM >= 0, max >= min) {
    min = Math.ceil(min);
    max = Math.floor(max);
  }

  if (max < min) {
    throw ERROR_MESSAGE;
  }
}

getRandomInt(-2, -5);

// Источник: [MDN] ('https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random')


// Второе задание!

const TEXT_VALUE = 'Строка - но не сто сорок символов';
const LENGTH_NUMBER = TEXT_VALUE.length;

function getLength (inspectedLine, maxLength) {
  if (LENGTH_NUMBER <= maxLength) {
    return true;
  } else {
    return false;
  }
}

getLength();
