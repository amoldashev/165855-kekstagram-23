// Получение случайного числа

const getRandomPositiveInt = (min, max) =>
  min >= 0 && min < max
    ? ~~(min + Math.random() * (max - min + 1))
    : null;

getRandomPositiveInt(0, 1);

// Получение случайного элемента

const getRandomElFromArr = (arr) =>
  arr.length
    ? arr.splice(getRandomPositiveInt(0, arr.length - 1), 1)
    : null;

// Вызывает случайную цитату из массива сообщений

const MESSAGE_ARRAY = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

function getRandomMessage(arr) {
  return getRandomElFromArr(arr);
}

// Выставляет случайное число лайков

const MAX_LIKE_COUNT = 2000;
const MIN_LIKE = 0;

function getRandomNumber(min, max) {
  return getRandomPositiveInt(min, max);
}

// Добавляет случайное имя

const NAMES_ARRAY = [
  'Антуан',
  'Роджер',
  'Рошан',
  'Максимильян',
  'Хачатурян',
  'Вазовски',
];

function getRandomName(arr) {
  return getRandomElFromArr(arr);
}

// Описание картинки

const DESCRIPTION_ARRAY = [
  'Кекстаграммная котейка',
  'Блудливый котян',
  'Ночной пуритан',
  'Предсказуемый жрец',
  'Развратный жмурик',
  'Неистовый фрик',
  'Печальный брокер',
  'Условный знак',
];

function getRandomDescription(arr) {
  return getRandomElFromArr(arr);
}


// Создает случайное число для id

const MIN_RANDOM_ID = 1;
const MAX_RANDOM_ID = 6;


// Создает массив комментарий

const MIN_COMMENT_COUNT = 1;
const MAX_COMMENT_COUNT = 6;
const COMMENTS_ARRAY = [];

function createCommentsArr(min, max) {
  for (let commentsIdNumber = min; commentsIdNumber <= max; commentsIdNumber++) {
    COMMENTS_ARRAY.push ({
      id: commentsIdNumber,
      avatar: `img/avatar-${ getRandomNumber(MIN_RANDOM_ID, MAX_RANDOM_ID) }.svg`,
      message: getRandomMessage(MESSAGE_ARRAY),
      name: getRandomName(NAMES_ARRAY),
    });
  }
  return COMMENTS_ARRAY;
}

// Наполнение методом map

// const createComment = function (arrayIndex, index) {
//   const commentsIdNumber = index + 1;
//   return {
//     id: commentsIdNumber,
//     avatar: `img/avatar-${ getRandomNumber(MIN_RANDOM_ID, MAX_RANDOM_ID) }.svg`,
//     message: getRandomMessage(MESSAGE_ARRAY),
//     name: getRandomName(NAMES_ARRAY),
//   };
// };
// console.table(createComment(6, 0));
// Создает массив фотокарточек
//
// const getNewComments = () => COMMENTS_ARRAY.map(createCommentsArr(1, 6));

const MAX_PHOTOCARD_AMOUNT = 25;
const PHOTOCARD_ARRAY = [];

function setsPhotocardData(param) {

  for (let idNumber = 1; idNumber <= param; idNumber++) {
    PHOTOCARD_ARRAY.push ({
      id: idNumber,
      description: getRandomDescription(DESCRIPTION_ARRAY),
      likes: getRandomNumber(MIN_LIKE, MAX_LIKE_COUNT),
      comments: getRandomElFromArr(createCommentsArr(1, 25)),
    });
  }
  return PHOTOCARD_ARRAY;
}

console.table(setsPhotocardData(MAX_PHOTOCARD_AMOUNT));
//
// new Array(getRandomInteger(1, MAX_PHOTO_COMMENTS)).fill(null).map(createComment)

