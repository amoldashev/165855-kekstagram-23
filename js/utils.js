// Получение случайного числа
const getRandomPositiveInt = (min, max) =>
  min >= 0 && min < max
    ? ~~(min + Math.random() * (max - min + 1))
    : null;

// Кнопка Esc
const isEscEvent = (evt) => evt.keyCode === 27;
// Кнопка Enter
const isEnterEvent = (evt) => evt.keyCode === 13;
// Сбрасывает значение инпута
const cleanInputValue = (input) => input.value = '';
// Вычисляет длину строки поля
const getValueLength = (input) => input.value.length;
// обрабатывает нажатие Esc
function handleEsc (cb) {
  return (evt) => {
    if (isEscEvent(evt)) {
      cb();
    }
  };
}

export {
  getRandomPositiveInt,
  isEscEvent,
  cleanInputValue,
  isEnterEvent,
  getValueLength,
  handleEsc
};
