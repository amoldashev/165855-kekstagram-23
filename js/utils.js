// Получение случайного числа
const getRandomPositiveInt = (min, max) =>
  min >= 0 && min < max
    ? ~~(min + Math.random() * (max - min + 1))
    : null;

// Кнопка Esc
const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';
// Кнопка Enter
const isEnterEvent = (evt) => evt.key === 'Enter';
// Сбрасывает значение инпута
const cleanInputValue = (input) => input.value = '';
// Вычисляет длину строки поля
const getValueLength = (input) => input.value.length;

export {
  getRandomPositiveInt,
  isEscEvent,
  cleanInputValue,
  isEnterEvent,
  getValueLength
};
