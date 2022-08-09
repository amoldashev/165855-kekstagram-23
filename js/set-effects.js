const preview = document.querySelector('.img-upload__preview');
const effects = document.querySelectorAll('.effects__radio');

// const EFFECTS = [
//   "none",
//   "chrome",
//   "sepia",
//   "marvin",
//   "phobos",
//   "heat",
// ]

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
  start: [0],
  step: 10,
  connect: true,
  range: {
      'min': 0,
      'max': 100
  }
});

// обработчик
const effectHandler = (evt) => {
  preview.className = '';
  slider.removeAttribute('disabled');

  if (evt.target.value == 'none') {
    preview.className = `img-upload__preview effect__radio--${evt.target.value}`;
    slider.setAttribute('disabled', true);
  } return preview.className = `img-upload__preview effect__radio--${evt.target.value}`;
}
effects.forEach((effect) => effect.addEventListener('click', effectHandler))

// уровень эффекта записывается в поле .effect-level__value
// slider.setAttribute('disabled', true);
// slider.removeAttribute('disabled');
