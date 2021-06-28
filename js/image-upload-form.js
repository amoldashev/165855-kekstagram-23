import {isEscEvent, cleanInputValue} from './utils/utils.js';

// 2. Пропишите тегу <form> правильные значения атрибутов method и адрес action для отправки формы на сервер.
// Форма загрузки
const uploadSelectImage = document.querySelector('#upload-select-image');

// Поле загрузки файлов
const inputUploadFile = uploadSelectImage.querySelector('#upload-file');

// Модуль загрузки файлов
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');

/* Кнопка для закрытия формы редактирования изображения*/
const uploadButton = document.querySelector('#upload-cancel');

// 5. После реализуйте закрытие формы.

// TODO:при закрытии формы дополнительно необходимо сбрасывать значение поля выбора файла
// #upload-file. В принципе, всё будет работать, если при повторной попытке загрузить
// в поле другую фотографию. Но! Событие change не сработает, если пользователь попробует
// загрузить ту же фотографию, а значит окно с формой не отобразится, что будет нарушением техзадания.
// Значение других полей формы также нужно сбрасывать.

function openFileSelector(input) {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  input.addEventListener(
    'change',
    onPopupEscKeydown,
  );
}

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeFileSelector(input);
  }
};

function closeFileSelector(input) {//Удаляет обработчик
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  input.removeEventListener(
    'change',
    openFileSelector,
  );}

uploadButton.addEventListener(// Добавляет событие на клик
  'click',
  () => {
    openFileSelector(inputUploadFile);
    uploadButton.tabIndex = '0'; // tabindex для кнопки закрытия формы редактирования
    cleanInputValue(inputUploadFile); // Значение поля загрузки нужно сбрасывать.
  },
);

uploadButton.removeEventListener(//Удаляет событие
  'click',
  () => {
    cleanInputValue(inputUploadFile);
    uploadButton.tabIndex = '0';
    closeFileSelector(inputUploadFile);
  },
);

uploadButton.addEventListener(
  'keydown',
  (evt) => {
    if (onPopupEscKeydown(evt)) { // Проверяем, что код клавиши равен 27
      openUploadModal();
      cleanInputValue(inputUploadFile);
    }
  },
);

// 6. TODO: Напишите код для валидации формы добавления изображения. Список полей для валидации:
// Хэш-теги
// const inputTextHashtags = uploadSelectImage.querySelector('input.text__hashtags');
// // const inputTextDescription = uploadSelectImage.querySelector('.text__description');

// const MIN_HASHTAG_LENGTH = 2;
// const MAX_HASHTAG_LENGTH = 20;

// // TODO:Regular Expressions to be used
// const HashtagExp = new RegExp('#[A-Za-zА-Яа-яЁё0-9]{1,19}', 'gi');
// // const symbolsExp = new RegExp('\W+', 'gi');

// const isRegExp = (input, RegExp) => input.value !== RegExp; // Compares str with a reg expression
// const RegExpArr = []; // Creates empty array for incoming data
// const matchExp = (arr)  => arr.match(RegExp);

// FIXME:Сравнить строку с регулярным выражением.
// const InputArr = [];
// currentIndex =
// const fillInputArr = (input) => {
//   for (let i = 0; i <= input.value.length; i++) {
//     let a = input.value.slice(i, 1);
//     a.match(new RegExp('\W+', 'gi'));
//     console.log(input.value.slice(i, 1));
//   }
// };

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
// inputTextHashtags.addEventListener(
//   'input',
//   () => {
//     const valueLength = inputTextHashtags.value.length;
//     if (inputTextHashtags.value.substr(0, 1) !== '#') {
//       inputTextHashtags.setCustomValidity('Начните вводить хэштег со знака решетка');
//     } else if (inputTextHashtags.value.length >= 1) { // Вернуть истину для регВыражения
//       takeResultsFromExp(inputTextHashtags, HashtagExp, RegExpArr);
//       if (RegExpArr.length > 0) {
//         inputTextHashtags.setCustomValidity('Contains special symbols');
//       }
//       inputTextHashtags.setCustomValidity('Спец. символы не допустимы');
//     } else if (valueLength < MIN_HASHTAG_LENGTH) {
//       inputTextHashtags.setCustomValidity(`Еще ${MIN_HASHTAG_LENGTH - valueLength} симв.`);
//     } else if (valueLength > MAX_HASHTAG_LENGTH) {
//       inputTextHashtags.setCustomValidity(`Удалите еще ${valueLength - MAX_HASHTAG_LENGTH} симв.`);
//     } else {
//       inputTextHashtags.setCustomValidity('');
//     }
//     inputTextHashtags.reportValidity();
//   },
// );

/* ----------------------------------------------------------------------- */
// const sentence = '#What #heck_ya what?';
// const LETTERS_ARRAY = [];
// const turnStrToLetters = (str, arr) => {
//   for (let i = 0; i <= str.length; i++) {
//     arr[i] = sentence;
//     // LETTERS_ARRAY[i] = HashtagExp.test(sentence)
//     if (arr.length >= true) {
//       console.log(arr[i]);
//     }
//   }
// };
// turnStrToLetters(sentence, LETTERS_ARRAY);

/* ------------------------------------------------------------------------ */

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
