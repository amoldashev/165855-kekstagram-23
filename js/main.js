//  Результат: целое число из диапазона "от...до"
//  диапазон может быть только положительный, включая ноль.
//  функция должна вести себя, если передать значение «до» меньшее, чем значение «от»
//  или равное ему


// Функция для проверки максимальной длины строки
const string = 'Если фокус находится в поле ввода комментария, нажатие на Esc не должно приводить к закрытию формы редактирования изображения формы редактиp';
const stringEmpty = '';
const MAX_VALUE = 140;
console.log(stringEmpty.length);
// const isTrue = (str) => str.length === 140;

const func = (str, max) => {

  if (str.length >= 0 && str.length <= max) {
    return true;
  } else if (str.length < 0) {
    return false;
  } else {
    return false;
  }
};

console.log(func(stringEmpty, MAX_VALUE));
