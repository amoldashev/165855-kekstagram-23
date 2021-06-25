// 2. Пропишите тегу <form> правильные значения атрибутов method и адрес action для отправки формы на сервер.
// Форма загрузки
const uploadSelectImage = document.querySelector('#upload-select-image');

// Поле загрузки файлов
const inputUploadFile = uploadSelectImage.querySelector('#upload-file');

// Функция изменяет метод отправки формы
// const setMethod = () => UploadSelectImage.method = 'post';
// setMethod();

// Функция назначает атрибуту action адрес отправки формы
// const setAction = () => UploadSelectImage.action = 'https://23.javascript.pages.academy/kekstagram';
// setAction();

// 3. Проверьте разметку вашего проекта и добавьте недостающие атрибуты.
// Например, всем обязательным полям нужно добавить атрибут required.
// const inputList = document.querySelectorAll('input');
// inputList();

// Затем проверьте, правильные ли типы стоят у нужных полей, если нет — проставьте правильные
// Ни одному инпуту кроме input.upload-file не нужно задавать required. По умолчанию, указан required.
// const inputScaleControl = document.querySelector('input.scale__control'); // К примеру
// const scaleControlAttr = inputScaleControl.setAttribute("required", ""); // К примеру
// inputUploadFile.required = true;

// 4. Изучите, что значит загрузка изображения, и как, когда и каким образом
// показывается форма редактирования изображения. Напишите код и добавьте необходимые
// обработчики для реализации этого пункта техзадания. В работе вы можете опираться
// на код показа окна с полноразмерной фотографией, который вы, возможно, уже написали
// в предыдущей домашней работе.
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');

/* Кнопка для закрытия формы редактирования изображения*/
const uploadCancel = document.querySelector('#upload-cancel');

// EventListener во время изменения состояния поля загрузки файла
uploadSelectImage.addEventListener(
  'change',
  () => {
    imgUploadOverlay.classList.remove('hidden');
    body.classList.add('modal-open');
  },
);

// 5. После реализуйте закрытие формы.

// TODO:при закрытии формы дополнительно необходимо сбрасывать значение поля выбора файла
// #upload-file. В принципе, всё будет работать, если при повторной попытке загрузить
// в поле другую фотографию. Но! Событие change не сработает, если пользователь попробует
// загрузить ту же фотографию, а значит окно с формой не отобразится, что будет нарушением техзадания.
// Значение других полей формы также нужно сбрасывать.

uploadCancel.addEventListener(
  'click',
  (evt) => {
    evt.preventDefault();
    uploadCancel.tabIndex = '0'; // tabindex для кнопки закрытия формы редактирования
    inputUploadFile.value = ''; // Значение поля загрузки нужно сбрасывать.
    imgUploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
  },
);

uploadCancel.addEventListener(
  'keydown',
  (evt) => {
    if (evt.keyCode === 27) { // Проверяем, что код клавиши равен 27
      imgUploadOverlay.classList.add('hidden');
      body.classList.remove('modal-open');
      inputUploadFile.value = '';
    }
  },
);

// 6. TODO: Напишите код для валидации формы добавления изображения. Список полей для валидации:
// Хэш-теги
const inputTextHashtags = uploadSelectImage.querySelector('input.text__hashtags');
const inputTextDescription = uploadSelectImage.querySelector('.text__description');

const MIN_HASHTAG_LENGTH = 2;
const MAX_HASHTAG_LENGTH = 20;

// TODO:Regular Expressions to be used
const HashtagExp = new RegExp('#[A-Za-zА-Яа-яЁё0-9]{1,19}', 'gi');
const symbolsExp = new RegExp('\W+', 'gi');

const isRegExp = (input, RegExp) => input.value !== RegExp; // Compares str with a reg expression
const RegExpArr = []; // Creates empty array
const matchExp = (input)  => input.value.match(RegExp);

// FIXME:Сравнить строку с регулярным выражением.
// const InputArr = [];
// currentIndex =
const fillInputArr = (input) => {
  for (let i = 0; i <= input.value.length; i++) {
    console.log(input.value.slice(i, 1));
  }
};



fillInputArr(inputTextHashtags);
// Вернуть сообщение о спецсимволах

// const takeResultsFromExp = (input, RegExp, arr) => {
//   RegExpArr.push(input.value);
//   if(input.value.length >= 1) {
//     arr.forEach(call(_, 1, RegExpArr) {matchExp(inputTextHashtags, RegExp)});
//   }
//   return arr;
// };

// console.log(RegExpArr);
// const compareExp = (input, RegExp) => {
// }

// TODO:Проверка наличия хештега
inputTextHashtags.addEventListener(
  'input',
  () => {
    const valueLength = inputTextHashtags.value.length;
    if (inputTextHashtags.value.substr(0, 1) !== '#') {
      inputTextHashtags.setCustomValidity('Начните вводить хэштег со знака решетка');
    } else if (inputTextHashtags.value.length >= 1) { // Вернуть истину для регВыражения
      takeResultsFromExp(inputTextHashtags, HashtagExp);
      if (RegExpArr.length > 0) {
        inputTextHashtags.setCustomValidity('Contains special symbols');
      }
      inputTextHashtags.setCustomValidity('Спец. символы не допустимы');
    } else if (valueLength < MIN_HASHTAG_LENGTH) {
      inputTextHashtags.setCustomValidity(`Еще ${MIN_HASHTAG_LENGTH - valueLength} симв.`);
    } else if (valueLength > MAX_HASHTAG_LENGTH) {
      inputTextHashtags.setCustomValidity(`Удалите еще ${valueLength - MAX_HASHTAG_LENGTH} симв.`);
    } else {
      inputTextHashtags.setCustomValidity('');
    }
    inputTextHashtags.reportValidity();
  },

  // () => {
  //   const expression = /^#[A-Za-zА-Яа-я0-9]{1,19}$/; // Пытаюсь использовать regexp
  //   if (expression.test(inputTextHashtags.value)) {
  //     inputTextHashtags.setCustomValidity('Все хорошо!');
  //   }
  //   return false;
  // },
);

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
