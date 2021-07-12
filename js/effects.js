const imageUploadPreview = document.querySelector('.img-upload__preview');
const effectsRadio = document.querySelector('.effects__radio');
const effectsPreviewChrome = document.querySelector('.effects__preview--chrome');
const effectsList = document.querySelector('.effects__list');
const foundRadioItems = effectsList.querySelectorAll('.effects__radio');
const effectLevelValue = document.querySelector('.effect-level__value');


const RADIOS_ARRAY = Array.from(foundRadioItems);

/* --------------- ПОСТОЯННЫЕ ------------------- */
// примечание 1% = 0.01;

const RANGE_STEP = 0.1;
const COMMON_MIN_VALUE = 0;
const COMMON_MAX_VALUE = 100;
const FOBOS_MAX_VALUE = 3;
const HOT_MIN_VALUE = 1;

/* ---------------------------------------------- */

// const chromeRadio = () => {
//   if () {}
// }
/* ------------------------------------------------------------- */
// Собрать массив классов с эффектами ???
const EFFECTS_ARRAY = ['chrome', 'sepia', 'marvin', 'phobos', 'heat'];

// Найти в живой коллекции совпадения по массиву
// const findClass = (evt, arr) => {
//   arr.forEach((element) => {
//     if (evt.target.value === arr.element) {
//       console.log('element');
//     }
//   });
// };

const matchWithArr = (evt, arr) => {
  arr.forEach(
    (element) => {
      if (evt.target.value === element) {
        element;
      }
    });
};

// объект эффектов ???
// const effect = {
//   name: EFFECTS_ARRAY,

// }
// Получить текущее поле

// Добавить класс картинке сообтветствующий эффекту
const onRadioCheckedHandler = (evt) => {
  if (!evt.target.matches('.none')) { // делегирование
    evt.stopPropagation();
    imageUploadPreview.classList.add(`effects__radio--${matchWithArr(evt, EFFECTS_ARRAY)}`);
  } else {
    imageUploadPreview.classList.add('effects__radio--none');
  }
};
// Обработчик события по изменению радиокнопки
effectsList.addEventListener(
  'change',
  (evt) => {
    onRadioCheckedHandler(evt);
  },
);
