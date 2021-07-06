import {getValueLength, isEscEvent} from './utils.js';
import {onPopupEscKeydown} from './image-upload-form.js';

// Валидация поля хэш-тег
const inputTextHashtags = document.querySelector('.text__hashtags');
const form = document.querySelector('.img-upload__form');

const MIN_HASHTAG_LENGTH = 2;
const MAX_HASHTAG_LENGTH = 20;

const SingleHashExp = /^#[A-Za-zА-Яа-яЁё0-9]*$/;

const whiteSpace = /\s/;

const isHashtagFirst = (input) => input.value.substr(0, 1) === '#';

const validateAllHashtags = (input) => {
  const hashtags = input.value.toLowerCase().trim().split(' ').filter((hash) => hash.length > 0);
  hashtags.forEach((hash) => {
    if (!SingleHashExp.test(hash)) {
      input.setCustomValidity('Cтрока после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы, символы пунктуации и эмодзи');
    } else if (hashtags.length !== [...new Set(hashtags)].length) {
      input.setCustomValidity('Хештеги не должны повторятся');
    } else if (hashtags.length > 5) {
      input.setCustomValidity('5 хэштегов - максимум!');
    } else if (hash.length > MAX_HASHTAG_LENGTH) {
      input.setCustomValidity(`Удалите ещё ${hash.length - MAX_HASHTAG_LENGTH} симв.`);
    } else {
      input.setCustomValidity('');
    }
    input.reportValidity();
  });
};

const validateInputHashtag = (input) => {
  if (!isHashtagFirst(input)) {
    input.setCustomValidity('Начините хэштег с решетки!');
  } else if (getValueLength(input) < MIN_HASHTAG_LENGTH) {
    input.setCustomValidity(`Минимум ещё ${MIN_HASHTAG_LENGTH - getValueLength(input)} симв.`);
  } else if (whiteSpace.test(input.value)) {
    input.setCustomValidity('Введите сл. хэш-тег после пробела');
    validateAllHashtags(input);
  } else {
    input.setCustomValidity('');
  }
  input.reportValidity();
};

// Добавляет событие для поля хэштег
inputTextHashtags.addEventListener(
  'input',
  () => {
    validateInputHashtag(inputTextHashtags);
  },
);

inputTextHashtags.removeEventListener('input', validateInputHashtag)

// Валидация поля комментарий
const inputTextDescription = document.querySelector('.text__description');
const MAX_SYMBOL_LENGTH = 140;

const validateComments = (input) => {
  if (getValueLength(input) < MAX_SYMBOL_LENGTH) {
    input.setCustomValidity(`Текст не должен превышать 140 симв. Осталось ${MAX_SYMBOL_LENGTH - getValueLength(input)} симв.`);
  } else if (getValueLength(input) >= MAX_SYMBOL_LENGTH) {
    input.setCustomValidity(`Текст не должен превышать ${MAX_SYMBOL_LENGTH} симв.`);
  } else {
    input.setCustomValidity('');
  }
  input.reportValidity();
};

// Добавляет событие для поля комментарий
inputTextDescription.addEventListener(
  'input',
  () => {
    validateComments(inputTextDescription);
  },
);

inputTextDescription.removeEventListener('input', validateComments)

// Делегирует форме улавливать событие на инпуте
const onInputHashClick = (evt) => {
  if (evt.target.nodeName === 'INPUT') {
    evt.stopPropagation();
  }
  return;
}

// Добавляет событие Esc узлу window
window.addEventListener('keydown', onPopupEscKeydown)

// Добавляет форме событие по нажатию Esc
form.addEventListener(
  'keydown',
  (evt) => {
    if (isEscEvent) {
      evt.preventDefault()
      onInputHashClick(evt)
    }
  })

// Удаляеm событие c формы
form.removeEventListener('keydown', onFormClick)

// Удаляеm событие Esc
window.removeEventListener('keydown', onPopupEscKeydown)
