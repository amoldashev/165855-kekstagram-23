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
const EFFECTS_ARRAY = ['none', 'chrome', 'sepia', 'marvin', 'fobos', 'heat']
// объект эффектов ???
let effect = {
  name: EFFECTS_ARRAY
}
// Получить текущее поле

// Добавить класс картинке сообтветствующий эффекту
const onChecked = (evt, radio) => {
  if (!evt.target.matches('.none')) { // делегирование
    imageUploadPreview.classList.add(`.effects__radio--${effect.getName}`)
  }
}
// Обработчик события по изменению радиокнопки
// effectsList.addEventListener(
//   'change',
//   () => {
//     onChecked(evt, radio);
//   }
// )
