const ERROR_MESSAGE = 'message';

const MAX_LIKE_COUNT = 2000;
const MIN_LIKE = 0;
const MAX_PHOTOCARD_AMOUNT = 25;

const MESSAGE_ARRAY = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const QUOTES_ARRAY = [
  'Кекстаграммная котейка',
  'Блудливый котян',
  'Ночной пуритан',
  'Предсказуемый кот-жрец',
  'Развратный жмурик',
];

const NAMES_ARRAY = [
  'Антуан',
  'Роджер',
  'Рошан',
  'Максимильян',
  'Хачатурян',
  'Вазовски',
];

// Получение случайного числа
const min = 1;
const max = 10;
const getRandomPositiveInt = (min, max) =>
  min >= 0 && min < max
    ? ~~(min + Math.random() * (max - min + 1))
    : null

// Получение случайного элемента

const getRandomElFromArr = (arr) =>
  arr.length
    ? arr.splice(getRandomPositiveInt(0, arr.length - 1), 1)
    : null
    
// Вызывает случайную цитату из массива сообщений

function getRandomQuote(MESSAGE_ARRAY) {
  return getRandomElFromArr(MESSAGE_ARRAY);
}

// Выставляет случайное число лайков

function getRandomLike(MIN_LIKE, MAX_LIKE_COUNT) {
  return getRandomPositiveInt(MIN_LIKE, MAX_LIKE_COUNT);
}

// Добавляет случайное имя

function getRandomName(NAMES_ARRAY) {
  return getRandomElFromArr(NAMES_ARRAY);
}

// Описание картинки

const DESCRIPTION_TITLE = 'Краткое описание';


// Создает массив комментарий

const MIN_COMMENT_COUNT = 1;
const MAX_COMMENT_COUNT = 6;


function createCommentsArr(MIN_COMMENT_COUNT, MAX_COMMENT_COUNT) {
  const COMMENTS_ARRAY = [];
  for (let commentsIdNumber = MIN_COMMENT_COUNT; commentsIdNumber <= MAX_COMMENT_COUNT; commentsIdNumber++) {
    COMMENTS_ARRAY.push ({
      id: commentsIdNumber,
      avatar: `img/avatar-${commentsIdNumber}.svg`,
      message: getRandomQuote(MESSAGE_ARRAY),
      name: getRandomName(NAMES_ARRAY),
    });
  }
  return COMMENTS_ARRAY;
}
// console.table(createCommentsArr(MIN_COMMENT_COUNT, MAX_COMMENT_COUNT))
// // Создает массив фотокарточек

const PHOTOCARD_ARRAY = [];

function setsPhotocardData(MAX_PHOTOCARD_AMOUNT) {
  for (let idNumber = 1; idNumber <= MAX_PHOTOCARD_AMOUNT; idNumber++) {
    PHOTOCARD_ARRAY.push ({
      id: idNumber,
      url: `photos/${idNumber}.jpg`,
      description: DESCRIPTION_TITLE,
      likes: getRandomLike(MIN_LIKE, MAX_LIKE_COUNT),
      comments: createCommentsArr(MIN_COMMENT_COUNT, MAX_COMMENT_COUNT),
    });
  }
  return PHOTOCARD_ARRAY;
}
setsPhotocardData(MAX_PHOTOCARD_AMOUNT)
console.table(setsPhotocardData(MAX_PHOTOCARD_AMOUNT))