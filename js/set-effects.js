const preview = document.querySelector('.img-upload__preview');
const effects = document.querySelectorAll('.effects__radio');
const container = document.querySelector('.effect-level__slider');
container.setAttribute('id', 'slider');
const slider = document.getElementById('slider');

const sliderHandler = () => {
  noUiSlider.create(slider, {
    start: [100],
    step: 10,
    connect: true,
    range: {
      min: 0,
      max: 100,
    },
  });

  slider.classList.add('hidden');
};

window.addEventListener('DOMContentLoaded', sliderHandler);

const Effects = {
  default: {
    filter: 'unset',
    step: 0,
    max: 100,
    postfix: '',
  },
  chrome: {
    filter: 'grayscale',
    step: 0.1,
    max: 1,
    postfix: '',
  },
  sepia: {
    filter: 'sepia',
    step: 0.1,
    max: 1,
    postfix: '',
  },
  marvin: {
    filter: 'invert',
    step: 1,
    max: 100,
    postfix: '%',
  },
  phobos: {
    filter: 'blur',
    step: 0.1,
    max: 3,
    postfix: 'px',
  },
  heat: {
    filter: 'brightness',
    step: 0.1,
    max: 3,
    postfix: '',
  },
};

const setEffect = (targetValue) => {
  // let hiddenField = document.querySelector('.effect-level__value').value;

  if (targetValue === 'none') {
    slider.noUiSlider.off();
    slider.noUiSlider.reset();
    preview.style.filter = '';
  } else {
    slider.noUiSlider.updateOptions({
      step: Effects[`${targetValue}`].step,
      connect: true,
      range: {
        min: 0,
        max: Effects[`${targetValue}`].max,
      },
    });

    slider.noUiSlider.on('slide', () => {
      slider.noUiSlider.updateOptions({
        step: Effects[`${targetValue}`].step,
        connect: true,
        range: {
          min: 0,
          max: Effects[`${targetValue}`].max,
        },
      });
      preview.style.filter = `${Effects[`${targetValue}`].filter}(${Math.ceil(
        slider.noUiSlider.get(),
      )}${Effects[`${targetValue}`].postfix})`;
    });
  }
};

// обработчик
const effectHandler = (evt) => {
  if (evt.target.value === 'none') {
    setEffect(evt.target.value);
    preview.className = `img-upload__preview effects__preview--${evt.target.value}`;
    slider.classList.add('hidden');
    slider.setAttribute('disabled', true);
  } else {
    setEffect(evt.target.value);
    slider.classList.remove('hidden');
    slider.removeAttribute('disabled');
    slider.noUiSlider.reset();
    preview.className = '';
    return (preview.className = `img-upload__preview effects__preview--${evt.target.value}`);
  }
};

effects.forEach((effect) => effect.addEventListener('click', effectHandler));
