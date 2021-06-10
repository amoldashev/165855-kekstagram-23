const ERROR_MESSAGE = 'message';
const MAX_COMMENT_COUNT = 6;
const MAX_MESSAGE_COUNT = 6;
const MAX_NAME_COUNT = 6;
const MAX_LIKE_COUNT = 2000;
const MIN_LIKE = 0;
const RANDOM_LIKE = 0;
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

// Вызывает случайную цитату

let descriptionIndex;

function getRandomQuote() {
  descriptionIndex = Math.floor(Math.random()*QUOTES_ARRAY.length);
  return QUOTES_ARRAY[descriptionIndex];
}

// Выставляет случайное число лайков

let randomLike;

function getRandomLike(MIN_LIKE, MAX_LIKE_COUNT) {
  randomLike = Math.floor(Math.random() * (MAX_LIKE_COUNT - MIN_LIKE)) + MIN_LIKE;

  if (RANDOM_LIKE >= 0, MAX_LIKE_COUNT >= MIN_LIKE) {
    MIN_LIKE = Math.ceil(MIN_LIKE);
    MAX_LIKE_COUNT = Math.floor(MAX_LIKE_COUNT);
  } else {
    throw new Error(ERROR_MESSAGE);
  }
  return randomLike;
}

// Вызывает случайное сообщение

function createRandomMessage(MAX_MESSAGE_COUNT) {
  let randomMessageArrays = [];
  let messageIndex = 0;
  for (let messageCount = 0; messageCount < MAX_MESSAGE_COUNT; messageCount++) {
    messageIndex = Math.floor(Math.random()*MESSAGE_ARRAY.length);
    randomMessageArrays.push(MESSAGE_ARRAY[messageIndex]);
    return randomMessageArrays.toString();
  }
}

// Добавляет случайное имя

function getRandomName(MAX_NAME_COUNT) {
  let randomNameArrays = [];
  let nameIndex = 0;
  for (let nameCount = 1; nameCount < MAX_NAME_COUNT; nameCount++) {
    nameIndex = Math.floor(Math.random()*NAMES_ARRAY.length);
    randomNameArrays.push(NAMES_ARRAY[nameIndex]);
    return randomNameArrays.toString();
  }
}

// Создает массив комментарий
let commentsArrays = [];
function createCommentsBlock(MAX_COMMENT_COUNT) {
  for (let commentsIdNumber = 1; commentsIdNumber <= MAX_COMMENT_COUNT; commentsIdNumber++) {
    commentsArrays.push ({
      id: commentsIdNumber,
      avatar: `img/avatar-${{commentsIdNumber}}.svg`,
      message: createRandomMessage(),
      name: getRandomName(MAX_NAME_COUNT),
    });
  }
}

// Создает массив карточек
const PHOTOCARD_ARRAY = [];
function setPhotocardData(MAX_PHOTOCARD_AMOUNT) {
  for (let idNumber = 1; idNumber <= MAX_PHOTOCARD_AMOUNT; idNumber++) {
    PHOTOCARD_ARRAY.push ({
      id: idNumber,
      url: `photos/${{idNumber}}.jpg`,
      description: getRandomQuote(),
      likes: getRandomLike(MIN_LIKE, MAX_LIKE_COUNT),
      comments: createCommentsBlock(MAX_COMMENT_COUNT),
    });
  }
  return PHOTOCARD_ARRAY;
}

setPhotocardData(MAX_PHOTOCARD_AMOUNT);
