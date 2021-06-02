// Первое задание. Получение целого числа + условия.
function getRandomInt (min, max) {
  let random = Math.floor(Math.random() * (max - min)) + min;

  if (random >= 0, max >= min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    console.log('Получено случайное значение: ' + random.toString());
  } else {
    console.log('Получено отрицательное значение! ' + random.toString());
  };

  if (max < min ) {
    console.log('Используется недопустимый диапазон значений');
  };
};

getRandomInt(-2, -5);

Источник: [MDN] ('https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random')


// Второе задание!

let textValue = 'Строка - но не сто сорок символов';
let lengthNumber = textValue.length;
let maxLength = 140;

function getLength (textValue, maxLength) {
  if (lengthNumber <= 140) {
    console.log('Число не превышает 140 симоволов ' + lengthNumber.toString());
    return true;
  } else {
      console.log('Число вводимых символов превышает максимальное значение! ' + lengthNumber.toString());
      return false;
    }
}

getLength();
