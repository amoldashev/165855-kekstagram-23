// Получение случайного числа
const getRandomPositiveInt = (min, max) =>
  min >= 0 && min < max
    ? ~~(min + Math.random() * (max - min + 1))
    : null;

// Кнопка Esc
const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';
// Кнопка Enter
const isEnter = (evt) => evt.key === 'Enter';
// Сбрасывает значение инпута
const cleanInputValue = (input) => input.value = '';

export {getRandomPositiveInt, isEscEvent, cleanInputValue, isEnter};
