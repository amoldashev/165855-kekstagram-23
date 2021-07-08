const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview');

const SCALE_DEFAULT_VALUE = 100;
const SCALE_RATIO = 0.01;
const STEP = 25;

scaleControlValue.value = `${SCALE_DEFAULT_VALUE}%`;

const getCurrentValue = (input) => input.value;

const getNumberFromValue = (str) => {
  const searchTerm = '%';
  const lastIndex = str.toString().lastIndexOf(searchTerm);
  return str.toString().slice(0, lastIndex);
};

const setTransformScale = (value) => {
  imgUploadPreview.style.transform =`scale(${value * SCALE_RATIO})`;
};

const getMinusValue = (step, input) => {
  if (getNumberFromValue(input.value) > step) {
    const currentValue = getNumberFromValue(getCurrentValue(input)) - step;
    setTransformScale(currentValue);
    return input.value = `${currentValue}%`;
  } else {
    scaleControlSmaller.setAttribute('disabled', '');
    throw new Error('Ошибка');
  }
};

const getPlusValue = (step, input) => {
  if (getNumberFromValue(input.value) >= SCALE_DEFAULT_VALUE) {
    scaleControlBigger.setAttribute('disabled', '');
  } else if (getNumberFromValue(input.value) < SCALE_DEFAULT_VALUE) {
    scaleControlBigger.removeAttribute('disabled');
    const currentValue = parseInt(getNumberFromValue(getCurrentValue(input)), 10) + step;
    setTransformScale(currentValue);
    return input.value = `${currentValue}%`;
  } else {
    throw new Error('Ошибка');
  }
};

scaleControlSmaller.addEventListener(
  'click',
  () => {
    getMinusValue(STEP, scaleControlValue);
  },
);

scaleControlBigger.addEventListener(
  'click',
  () => {
    getPlusValue(STEP, scaleControlValue);
  },
);

// С помощью полученных обновлений (стили и скрипты необходимые для noUiSlider) от Кексобота реализуйте применение эффекта для изображения.
// Кроме визуального применения эффекта необходимо записывать значение в скрытое поле для дальнейшей отправки на сервер.
