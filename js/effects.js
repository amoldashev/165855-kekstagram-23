const imageUploadPreview = document.querySelector('.img-upload__preview');
const image = imageUploadPreview.querySelector('img');
const imgUploadEffectLevel = document.querySelector('.img-upload__effect-level');
const effectLevelValue = imgUploadEffectLevel.querySelector('.effect-level__value');
const slider = imgUploadEffectLevel.querySelector('.effect-level__slider');
const effectsList = document.querySelector('.effects__list');

const DEFAULT_VALUE = 100;
const MIN_RANGE_VALUE = 0;
const COMMON_MAX_VALUE = 1;
const MAIN_STEP_VALUE = 0.1;
const OPTIONAL_MAX_VALUE = 3;
const MIN_HEAT = 1;
const MARVIN_STEP = 1;
let currentEffectName;

const EffectNameToFilter = {
  chrome: {
    name: 'grayscale',
    min: MIN_RANGE_VALUE,
    max: COMMON_MAX_VALUE,
    step: MAIN_STEP_VALUE,
  },
  sepia: {
    name: 'sepia',
    min: MIN_RANGE_VALUE,
    max: COMMON_MAX_VALUE,
    step: MAIN_STEP_VALUE,
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
    step: MAIN_STEP_VALUE,
    unit: 'px',
  },
  heat: {
    name: 'brightness',
    min: MIN_HEAT,
    max: OPTIONAL_MAX_VALUE,
    step: MAIN_STEP_VALUE,
  },
};

const setEffect = (nameEffect) => {
  const {
    min,
    max,
    step,
    name: filterName,
    unit = '',
  } = EffectNameToFilter[nameEffect];

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

const onEffectDestroyHandler = () => {
  if (slider.noUiSlider) {
    slider.noUiSlider.off();
    slider.noUiSlider.destroy();
  }
  imgUploadEffectLevel.classList.add('hidden');
  image.style.filter = '';
  effectLevelValue.value = '';
};

const onEffectChangeHandler = (evt) => {
  const effectRadioButton = evt.target;
  if (effectRadioButton.matches('.effects__radio')) {
    image.classList.remove(`effects__preview--${currentEffectName}`);
    currentEffectName = effectRadioButton.value;
    image.classList.add(`effects__preview--${currentEffectName}`);

    if (currentEffectName === 'none') {
      onEffectDestroyHandler();
    } else {
      imgUploadEffectLevel.classList.remove('hidden');
      setEffect(currentEffectName);
    }
  }
};

const onEffectsInit = () => {
  currentEffectName = 'none';
  image.classList.add(`effects__preview--${currentEffectName}`);
  effectsList.addEventListener('change', onEffectChangeHandler);
  imgUploadEffectLevel.classList.add('hidden');
};

const onEffectsDestroy = () => {
  onEffectDestroyHandler();
  image.classList.remove(`effects__preview--${currentEffectName}`);
  effectsList.removeEventListener('change', onEffectChangeHandler);
};

onEffectsInit();
