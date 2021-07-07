import {getValueLength, isEscEvent} from './utils.js';
import {onPopupEscKeydown} from './image-upload-form.js';

const inputTextHashtags = document.querySelector('.text__hashtags');
const form = document.querySelector('.img-upload__form');
const inputTextDescription = document.querySelector('.text__description');

const MAX_SYMBOL_LENGTH = 140;
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
      input.setCustomValidity('Хеш-теги не должны повторятся');
    } else if (hashtags.length > 5) {
      input.setCustomValidity('5 хэш-тегов - максимум!');
    } else if (hash.length > MAX_HASHTAG_LENGTH) {
      input.setCustomValidity(`Удалите ещё ${hash.length - MAX_HASHTAG_LENGTH} симв.`);
    } else {
      return hashtags;
    }
  });
};

const validateInputHashtag = (input) => {
  if (!isHashtagFirst(input)) {
    input.setCustomValidity('Начините хэштег с решетки!');
  } else if (getValueLength(input) < MIN_HASHTAG_LENGTH) {
    input.setCustomValidity(`Минимум ещё ${MIN_HASHTAG_LENGTH - getValueLength(input)} симв.`);
  } else if (!whiteSpace.test(input.value) === false) {
    input.setCustomValidity('Вводите хэш-теги, разделяя каждый хеш-тег пробелом');
    validateAllHashtags(input);
  } else {
    input.setCustomValidity('');
  }
  input.reportValidity();
};

inputTextHashtags.addEventListener(
  'input',
  () => {
    validateInputHashtag(inputTextHashtags);
  },
);

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

inputTextDescription.addEventListener(
  'input',
  () => {
    validateComments(inputTextDescription);
  },
);

window.addEventListener('keydown', onPopupEscKeydown);

const FormClickHandler = (evt) => {
  evt.stopPropagation();
};

form.addEventListener(
  'keydown',
  (evt) => {
    if (isEscEvent) {
      FormClickHandler(evt);
    }
  });

inputTextHashtags.removeEventListener('input', validateInputHashtag);
