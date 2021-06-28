// Получение случайного числа

const getRandomPositiveInt = (min, max) =>
  min >= 0 && min < max
    ? ~~(min + Math.random() * (max - min + 1))
    : null;

export { getRandomPositiveInt };

// Событие кнопки 27

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

// Сбрасывает значение инпута
const cleanInputValue = (input) => input.value = '';

export {isEscEvent, cleanInputValue};
