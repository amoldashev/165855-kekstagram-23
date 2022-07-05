const modal = document.querySelector('.img-upload__overlay');
const preview = document.querySelector('.img-upload__preview');

modal.classList.remove('hidden');

const scaleValue = document.querySelector('.scale__control--value');
const smallerBtn = document.querySelector('.scale__control--smaller');
const biggerBtn = document.querySelector('.scale__control--bigger');

const MAX_VALUE = 100;
const DEFAULT_VALUE = 100;
const MIN_VALUE = 25;
const SCALE_STEP = 25;
preview.style.transform = `scale(${DEFAULT_VALUE}%)`;
scaleValue.value = `${DEFAULT_VALUE}%`;
let currentValue = Number(scaleValue.value.slice(0, -1));

const smallerBtnHandler = () => {
  currentValue -= SCALE_STEP;

  if (currentValue >= MIN_VALUE) {
    preview.style.transform = `scale(${currentValue}%)`;
    scaleValue.value = `${currentValue}%`;
  } else {
    return currentValue = MIN_VALUE;
  }
};

smallerBtn.addEventListener('click', smallerBtnHandler);

const biggerBtnHandler = () => {
  currentValue += SCALE_STEP;

  if (currentValue <= MAX_VALUE) {
    preview.style.transform = `scale(${currentValue}%)`;
    scaleValue.value = `${currentValue}%`;
  } else {
    return currentValue = MAX_VALUE;
  }
};

biggerBtn.addEventListener('click', biggerBtnHandler);

const filters = {
  original: '',
  grayscale: 0.1,
  sepia: 0.1,
  invert: 0.1, // в процентах
  blur: 0.1, // в пикселях
  brightness: 0.1,
};

const effects = [
  'none',
  'chrome',
  'sepia',
  'marvin',
  'phobos',
  'heat',
];

const effectsElem = document.querySelectorAll('.effects__preview');
const img = document.querySelector('.img-upload__preview');

const effectHandler = (evt) => {
  const effect = evt.target.className.split(' ').slice(2, 3).join();
  img.className = '';
  img.classList.add('img-upload__preview');
  img.classList.add(`${effect}`);
};

const setEffectEvents = () => {
  effectsElem.forEach((effect) => {
    effect.addEventListener('click', effectHandler);
  });
};

setEffectEvents();

export {
  filters,
  effects
};
