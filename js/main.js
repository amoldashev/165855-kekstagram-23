// AN ARRAY with 25 generated objects. Each array contains a photocard;
let Gallery = new Array (25);
// THE PHOTOCARD shall include the following:
let photocardArray = {
  id: photocardId,
  url: urlPath,
  description: SomeTextArray,
  likes: ,
  comments: ,
}

// EACH ITEM IS AN ARRAY!
// EACH ARRAY HAS REQUIREMENTS!

// ID. numeric; unique, min = 1; max = 25;
// - id;
let photocardId;

  for (let i = 1; i <= 25; i++) {
    return photocardId = i;
}

// URL. img; src 'i.jpg'; let i; min = 1; max = 25;
// - url;
let urlPath;

  for (let i = 1; i <= 25; i++) {
    urlPath = i;
    console.log(`photos/${urlPath}.jpg`);
}

// DESCRIPTION. text; generated.
// - description;
let photoDescription = 'Кекстаграммная котейка, лижет кекстаорехи';

// LIKES. numeric; random; min = 15 max = 200.
// - likes;
let likes;

// COMMENTS. text; Array; comment list; amount = random;
// - comments;
let comments;

let comentsArray = {
  id: 135,
  avatar: 'img/avatar-6.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Артём',
}

// COMMENT ID. numeric; random; unique;
let commentsId;

// COMMENT avatar. string; value min = 1 max = 6 i.e. avatar-6.svg;
// - avatar field;

// COMMENT MESSAGE. one or two sentences to be included as an examp

// Всё отлично!
// В целом всё неплохо. Но не всё.
// Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
// Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
// Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
// Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!

// СOMMENT NAMES. text; random; Optional;



/* // Первое задание. Получение целого числа + условия.
const ERROR_MESSAGE = new Error('Невозможно разобрать входные данные');

function getRandomInt(min, max) {
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

function getLength(inspectedLine, maxLength) {
  if (LENGTH_NUMBER <= maxLength) {
    return true;
  } else {
    return false;
  }
}

getLength(); */