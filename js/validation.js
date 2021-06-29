
// 6. TODO: Напишите код для валидации формы добавления изображения. Список полей для валидации:
// Хэш-теги
const inputTextHashtags = document.querySelector('.text__hashtags');
// const inputTextDescription = uploadSelectImage.querySelector('.text__description');

const MIN_HASHTAG_LENGTH = 2;
const MAX_HASHTAG_LENGTH = 20;

// // TODO:Regular Expressions to be used
const HashtagExp = new RegExp('#[A-Za-zА-Яа-яЁё0-9]{1,19}', 'gi');
const symbolsExp = new RegExp('\W+', 'gi');

// const getMatchResults = (input, RegExp) => input.value.match(RegExp); // Compares str with a reg expression
// console.log(getMatchResults(inputTextHashtags))

const RegExpArr = []; // Creates empty array for incoming data
// const matchExp = (arr)  => arr.match(RegExp);

// FIXME:Сравнить строку с регулярным выражением.

const fillInputArr = (input) => {
  const InputArr = new Array();
  let results;
  for (let i = 0; i <= input.value.length; i++) {
    InputArr.push(input.value.slice(i, 1)); //
    results = InputArr.toString().match(new RegExp('\W+', 'gi'));
    // console.log(results);
  }
  // if (!results <= 0) {
  //   input.setCustomValidity('Строка пустая');
  // }
};

// fillInputArr(inputTextHashtags);
// Вернуть сообщение о спецсимволах
// const takeResultsFromExp = (input, RegExp, arr) => {
//   arr.push(input.value);
//   if(input.value.length >= 1) {
//     arr.forEach(matchExp(inputTextHashtags, RegExp));
//   }
//   return RegExpArr;
// };

/* ------------------------------------------------------------------------------------------ */
// TODO:Проверка наличия хештега
inputTextHashtags.addEventListener(
  'input',
  () => {
    const valueLength = inputTextHashtags.value.length;
    const isHashtagFirst = inputTextHashtags.value.substr(0, 1) === '#';
    if (isHashtagFirst) {
      inputTextHashtags.setCustomValidity('Начните вводить хэштег со знака решетка!');
    } else if (inputTextHashtags.value.length >= 1) { // Вернуть истину для регВыражения
      fillInputArr(inputTextHashtags);
    } else if (fillInputArr(inputTextHashtags) === false) {
      console.log('false');
    } else if (valueLength < MIN_HASHTAG_LENGTH) {
      inputTextHashtags.setCustomValidity(`Еще ${MIN_HASHTAG_LENGTH - valueLength} симв.`);
    } else if (valueLength > MAX_HASHTAG_LENGTH) {
      inputTextHashtags.setCustomValidity(`Удалите еще ${valueLength - MAX_HASHTAG_LENGTH} симв.`);
    } else {
      inputTextHashtags.setCustomValidity('');
    }
    inputTextHashtags.reportValidity();
  },
);

/* ----------------------------------------------------------------------- */


// () => {
//   const expression = /^#[A-Za-zА-Яа-я0-9]{1,19}$/; // Пытаюсь использовать regexp
//   if (expression.test(inputTextHashtags.value)) {
//     inputTextHashtags.setCustomValidity('Все хорошо!');
//   }
//   return false;
// },


// function customValidation() {};

// customValidation.prototype = {
//   invalidities: [],
//   checkValidity: function(input) {
//     let validity = input.validity;

//     if (validity.rangeUnderflow) {
//       let min = getAttributeValue(input, 'min');
//       this.addInvalidity('The minimum value should be ' + min);
//     }
//   },
//   addInvalidity: function(message) {
//     this.invalidities.push(message);
//   },
//   getInvalidities: function() {
//     return this.invalidities.join('. \n');
//   }
// }

// var str = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЫЪЭЮЯабвгдеёжзийклмнопрстуфхцчшщьыъэюя';
// var regexp = /[А-Д]/gi;
// var matches_array = str.match(regexp);
// console.log(matches_array);

// RegEx
// \D - числа [^0-9]
// [\s] - whitespace
// [[:punct:]] - punctuation
// [\W] symbols
// [pattern, flags] flag - i => игнорирование регистра

// new RegExp('', 'i')
// const objPhrases = {
//   firstLetterIsHash: 'Хеш-тег начинается с символа \'#\' (решётка)',
//   specSymbols: 'Строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т.п.), cимволы пунктуации (тире, дефис запятая и т.п.), эмодзи и т.д.',
//   singleHash: 'Хеш-тег не может состоять только из одной решётки',
//   maxLength: 'Максимальная длина одного хэш-тега 20 символов, включая решётку',
//   register: 'Хэш-теги нечувствительны к регистру: #ХэшТег и #хэштег считаются одним и тем же тегом',
//   spaceValidation: 'Хэш-теги разделяются пробелами',
//   unique: 'Один и тот же хэш-тег не может быть использован дважды',
//   quantity: 'нельзя указать больше пяти хэш-тегов',
//   required: 'хэш-теги необязательны',
//   isEsc: 'Если фокус находится в поле ввода хэш-тега, нажатие на Esc не должно приводить к закрытию формы редактирования изображения',
// };
// Комментарий

// 7. TODO:Реализуйте логику проверки так, чтобы, как минимум, она срабатывала при попытке отправить форму
// и не давала этого сделать, если форма заполнена не по правилам. При желании, реализуйте проверки
//  сразу при вводе значения в поле.

// Как отменить обработчик Esc при фокусе?
// Задача не имеет одного верного решения, однако намекнём на самый простой — использовать stopPropagation
// для события нажатия клавиш в поле при фокусе

// Валидация хеш-тегов?
// Поля, не перечисленные в техзадании, но существующие в разметке, особой валидации не требуют.
