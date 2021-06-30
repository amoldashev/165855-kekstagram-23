
// 6. TODO: Напишите код для валидации формы добавления изображения. Список полей для валидации:

const { get } = require("browser-sync");

// Хэш-теги
const inputTextHashtags = document.querySelector('.text__hashtags');
// const formUpload = document.querySelector('#upload-select-image');
// const inputTextDescription = uploadSelectImage.querySelector('.text__description');

const MIN_HASHTAG_LENGTH = 2;
const MAX_HASHTAG_LENGTH = 20;

// // TODO:Regular Expressions to be used
const HashtagExp = new RegExp('^#[A-Za-zА-Яа-яЁё0-9]{1,19}$', 'gi');
const symbolsExp = new RegExp('\W+', 'gi');

// FIXME:Сравнить строку с регулярным выражением.

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
const validity = {
  message: 'Cтрока после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т.д.'
};

const isHashtagFirst = (input) => input.value.substr(0, 1) === '#';
const valueLength = (input) => input.value.length;

const pushUniqueHashtags = (input) => {
  const uniqueSet = new Set();
  return uniqueSet.add(input.value.toLowerCase().trim().split(' ').filter((hashtag) => hashtag)); // Взять хэштег из инпута
};

const isSpaceAfterHash = (input) => input.value.test(/#+\s/);
const isHashAfterSpace = (input) => input.value.test(/\s+#/);

const validateHashtag = (input) => {
  if (input.value !== '') {
    const hashtags = pushUniqueHashtags(input);
    hashtags.forEach((hashtag) => {
      if (!HashtagExp.test(hashtag)) {
        input.setCustomValidity(validity.message);
        input.classList.add('invalid');
        evt.preventDefault();
      } else if (hashtags.length !== uniqueSet.size) {
        input.setCustomValidity('Хештеги не должны повторятся');
        input.classList.add('invalid');
        evt.preventDefault();
      } else {
        input.setCustomValidity('');
      }
    });
  }
  input.reportValidity();
};

const getCustomValidation = (input) => {
  if (input.value === '') {
    input.setCustomValidity(validity.message);
  } else if (isHashtagFirst(input) === false) {
    input.setCustomValidity('Начините хэштег с решетки!');
  } else if (valueLength(input) < MIN_HASHTAG_LENGTH) {
    input.setCustomValidity(`Еще ${MIN_HASHTAG_LENGTH - valueLength(input)} симв.`);
  } else if (valueLength(input) > MAX_HASHTAG_LENGTH) {
    input.setCustomValidity(`Удалите еще ${valueLength(input) - MAX_HASHTAG_LENGTH} симв.`);
  } else if (isSpaceAfterHash) {
    pushUniqueHashtags(input);
    input.setCustomValidity('Введите следующий хэштег после пробела. Максимум 5');
  } else if (isHashAfterSpace) {
    input.setCustomValidity('Пока не понятно');
  } else {
    input.setCustomValidity('');
  }
  input.reportValidity();
};
/* ------------------------------------------------------------------------------------------ */
// TODO:Проверка наличия хештега
inputTextHashtags.addEventListener(
  'input',
  () => {
    getCustomValidation(inputTextHashtags);
    // validateHashtag(inputTextHashtags);
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

// const MAX_HASHTAGS = 5;
// const REG_HASHTAG = /^#[A-za-zА-Яа-я0-9]{1,19}$/;
// const INVALID_INPUT_STYLE = 'red';
// const VALID_INPUT_STYLE = 'green';
// const TEXT_VALIDATE = `Хэш-тег должен начинаться с символа # и состоять из букв и чисел.
// Максимальная длина одного хэш-тега 20 символов, включая символ #.
// Хэш-теги должны разделяться пробелами`;
// const ERROR_NO_REPEAT = 'Хэштеги не должны повторяться';
// const MAX_COMMENTS_SYMBOL = 140;
// const textHashtags = document.querySelector('.text__hashtags');
// const textDescription = document.querySelector('.text__description');

// const validationFormHashtag = (evt) => {
//   if (textHashtags.value !== '') {
//     const hashtags = textHashtags.value.toLowerCase().trim().split(' ').filter((hashtag) => hashtag);
//     const hashtagsSet = new Set(hashtags);
//     hashtags.forEach((hashtag) => {
//       if (!REG_HASHTAG.test(hashtag)) {
//         textHashtags.setCustomValidity(TEXT_VALIDATE);
//         textHashtags.style.outlineColor = INVALID_INPUT_STYLE;
//         evt.preventDefault();
//       } else if (hashtags.length !== hashtagsSet.size) {
//         textHashtags.setCustomValidity(ERROR_NO_REPEAT);
//         textHashtags.style.outlineColor = INVALID_INPUT_STYLE;
//         evt.preventDefault();
//       } else {
//         textHashtags.setCustomValidity('');
//         textHashtags.style.outlineColor = VALID_INPUT_STYLE;
//       }
//       textHashtags.reportValidity();
//     });
//     if (hashtags.length > MAX_HASHTAGS) {
//       textHashtags.setCustomValidity(`Количество хэштегов должно быть не более ${MAX_HASHTAGS}`);
//     }
//   } else {
//     textHashtags.setCustomValidity('');
//     textHashtags.style.outlineColor = VALID_INPUT_STYLE;
//   }
// };
// textHashtags.addEventListener('input', validationFormHashtag);

// const validationFormDescription = (evt) => {
//   const textDescriptionLength = checkStringLength(textDescription.value, MAX_COMMENTS_SYMBOL);
//   if (!textDescriptionLength) {
//     textDescription.setCustomValidity(`Удалите лишние ${textDescription.value.length - MAX_COMMENTS_SYMBOL} симв.`);
//     textDescription.style.outlineColor = INVALID_INPUT_STYLE;
//     evt.preventDefault();
//   } else {
//     textDescription.setCustomValidity('');
//     textDescription.style.outlineColor = VALID_INPUT_STYLE;
//   }
//   textDescription.reportValidity();
// };
// textDescription.addEventListener('input', validationFormDescription);
