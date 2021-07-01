import {getValueLength} from './utils.js';

// Валидация поля хэш-тег
const inputTextHashtags = document.querySelector('.text__hashtags');
const MIN_HASHTAG_LENGTH = 2;
const MAX_HASHTAG_LENGTH = 20;

// const SingleHashExp = /#[A-Za-zА-Яа-яЁё0-9]/gi;
const whiteSpace = /\s/;

const validityMessage = {
  message: 'Cтрока после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы, символы пунктуации и эмодзи',
};

const isHashtagFirst = (input) => input.value.substr(0, 1) === '#';
const isExp = (input, RegExp) =>  {
  input.value.toString().match(RegExp);
};

const validateAllHashtags = (input) => {
  const hashtags = input.value.toLowerCase().trim().split(' ').filter((hash) => hash.length > 0);
  hashtags.forEach((hash) => {
    if (hashtags.length === [...new Set(hashtags)].size) {
      input.setCustomValidity('Хештеги не должны повторятся');
    } else if ([...new Set(hashtags)].size > 5) {
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
  if (input.value === '') {
    input.setCustomValidity(validityMessage.message);
  } else if (!isHashtagFirst(input)) {
    input.setCustomValidity('Начините хэштег с решетки!');
  } else if (getValueLength(input) < MIN_HASHTAG_LENGTH) {
    input.setCustomValidity(`Минимум ещё ${MIN_HASHTAG_LENGTH - getValueLength(input)} симв.`);
  } else if (getValueLength(input) >= MIN_HASHTAG_LENGTH && !isExp(input, whiteSpace)) {
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
