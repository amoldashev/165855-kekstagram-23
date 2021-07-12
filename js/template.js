const imageUploadPreview = document.querySelector('.img-upload__preview');
const image = imageUploadPreview.querySelector('img');
const imgUploadEffectLevel = document.querySelector('.img-upload__effect-level');
const effectLevelValue = imgUploadEffectLevel.querySelector('.effect-level__value');
const slider = imgUploadEffectLevel.querySelector('.effect-level__slider');
const effectsList = document.querySelector('.effects__list');

const DEFAULT_VALUE = 100;
const STEP = 0.1;
const MIN_RANGE_VALUE = 0;
const MAIN_MAX_VALUE = 1;
const MARVIN_STEP = 1;
const OPTIONAL_MAX_VALUE = 3;
const MIN_HEAT_VALUE = 1;


const toArr = {
  chrome: {
    name: 'grayscale',
    min: MIN_RANGE_VALUE,
    max: MAIN_MAX_VALUE,
    step: STEP,
  },
  sepia: {
    name: 'sepia',
    min: MIN_RANGE_VALUE,
    max: MAIN_MAX_VALUE,
    step: STEP,
  },
  marvin: {
    name: 'invert',
    min: MIN_RANGE_VALUE,
    max: DEFAULT_VALUE,
    step: MARVIN_STEP,
    unit: '%',
  },
  phobos: {
    name: 'blur',
    min: MIN_RANGE_VALUE,
    max: OPTIONAL_MAX_VALUE,
    step: STEP,
    unit: 'px',
  },
  heat: {
    name: 'brightness',
    min: MIN_HEAT_VALUE,
    max: OPTIONAL_MAX_VALUE,
    step: STEP,
  },
};

const setEffect = (name) => {
  const {
    min,
    max,
    step,
    name: filterName,
    unit = '',
  } = toArr[name];

  if (slider.noUiSlider) {
    slider.noUiSlider.off();
    slider.noUiSlider.updateOptions({
      range: {
        min,
        max,
      },
      start: max,
      step,
    });
  } else {
    slider.classList.remove('hidden');
    noUiSlider.create(slider, {
      range: {
        min,
        max,
      },
      start: max,
      step,
      connect: 'lower',
      format: {
        to: (value) => {
          if (Number.isInteger(value)) {
            return value.toFixed(0);
          }
          return value.toFixed(1);
        },
        from: (value) => parseFloat(value),
      },
    });
  }
  slider.noUiSlider.on('update', (values, handle) => {
    effectLevelValue.value = values[handle];
    image.style.filter = `${filterName}(${effectLevelValue.value}${unit})`;
  });
};

const onDestroyHandler = () => {
  if (slider.noUiSlider) {
    slider.noUiSlider.off();
    slider.noUiSlider.destroy();
  }
  imgUploadEffectLevel.classList.add('hidden');
  image.style.filter = '';
  effectLevelValue.value = '';
};

const onEffectChange = (evt) => {
  const effectRadioButton = evt.target;
  let currentEffect;
  if (effectRadioButton.matches('.effects__radio')) {
    image.classList.remove(`effects__preview--${currentEffect}`);
    currentEffect = effectRadioButton.value;
    image.classList.add(`effects__preview--${currentEffect}`);

    if (currentEffect === 'none') {
      onDestroyHandler();
    } else {
      imgUploadEffectLevel.classList.remove('hidden');
      setEffect(currentEffect);
    }
  }
};

const onEffectsInit = () => {
  currentEffect = 'none';
  image.classList.add(`effects__preview--${currentEffect}`);
  effectsList.addEventListener('change', onEffectChange);
  imgUploadEffectLevel.classList.add('hidden');
};

const onEffectsDestroy = () => {
  onDestroyHandler();
  image.classList.remove(`effects__preview--${currentEffect}`);
  effectsList.removeEventListener('change', onEffectChange);
};
onEffectsInit();
