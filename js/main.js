// Первое задание. Получение целого числа + условия.
const ERROR_MESSAGE = new Error('Невозможно разобрать входные данные');

function getRandomInt (min, max) {
  const RANDOM = Math.floor(Math.random() * (max - min)) + min;

  if (RANDOM >= 0, max >= min) {
    min = Math.ceil(min);
    max = Math.floor(max);
  }

  if (max < min) {
    throw ERROR_MESSAGE;
  }
}

getRandomInt(-2, -5);

// Источник: [MDN] ('https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random')


// Второе задание!

const TEXT_VALUE = 'Строка - но не сто сорок символов';
const LENGTH_NUMBER = TEXT_VALUE.length;

function getLength (inspectedLine, maxLength) {
  if (LENGTH_NUMBER <= maxLength) {
    return true;
  } else {
    return false;
  }
}

getLength();

AN ARRAY with 25 generated objects. Each array contains a photocard;

THE PHOTOCARD shall include the following:

- id;
- url;
- description;
- likes;
- comments;
- avatar field;

EACH ITEM IS AN ARRAY!
EACH ARRAY HAS REQUIREMENTS!

ID. numeric; unique, min = 1; max = 25;

URL. img; src 'i.jpg'; let i; min = 1; max = 25;

DESCRIPTION. text; generated.

LIKES. numeric; random; min = 15 max = 200.

COMMENTS. text; Array; comment list; amount = random;
 {
    id: 135,
    avatar: 'img/avatar-6.svg',
    message: 'В целом не плохо. Но не все.',
    name: 'Артем',
 }

COMMENT ID. numeric; random; unique;

COMMENT avatar. string; value min = 1 max = 6 i.e. avatar-6.svg;

COMMENT MESSAGE. one or two sentences to be included as an examp

Всё отлично!
В целом всё неплохо. Но не всё.
Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!

СOMMENT NAMES. text; random; Optional;
