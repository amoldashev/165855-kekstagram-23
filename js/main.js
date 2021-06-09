const ERROR_MESSAGE = new Error('Bad Number!');
const MAX_COMMENT_COUNT = 6;
const MAX_MESSAGE_COUNT = 6;
const NUMBER_ARRAYS = [];

const MAX_LIKE = 2000;
const MIN_LIKE = 0;
const RANDOM_LIKE = 0;
const DESCRIPTION_INDEX = 0;
const MESSAGE_INDEX = 0;
const MAX_PHOTOCARD_AMOUNT = 25;

const MESSAGE_ARRAYS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const QUOTES_ARRAYS = [
  'Кекстаграммная котейка',
  'Блудливый котян',
  'Ночной пуритан',
  'Предсказуемый кот-жрец',
  'Развратный жмурик',
];

const NAMES_ARRAYS = [
  'Антуан',
  'Роджер',
  'Рошан',
  'Максимильян',
  'Хачатурян',
  'Вазовски',
];

// Вызывает случайную цитату

function getRandomQuote() {
  DESCRIPTION_INDEX = Math.floor(Math.random()*QUOTES_ARRAYS.length);
  return QUOTES_ARRAYS[DESCRIPTION_INDEX];
}

// Выставляет случайное число лайков

function getRandomLike(MIN_LIKE, MAX_LIKE) {
  RANDOM_LIKE = Math.floor(Math.random() * (MAX_LIKE - MIN_LIKE)) + MIN_LIKE;

  if (RANDOM_LIKE >= 0, MAX_LIKE >= MIN_LIKE) {
    MIN_LIKE = Math.ceil(MIN_LIKE);
    MAX_LIKE = Math.floor(MAX_LIKE);
  } else {
    throw ERROR_MESSAGE;
  }
  return RANDOM_LIKE;
}

// Вызывает случайное сообщение

function createRandomMessage(MAX_MESSAGE_COUNT) {
  let randomMessageArrays = [];
  for (let messageCount = 0; messageCount < MAX_MESSAGE_COUNT; messageCount++) {
    let messageIndex = Math.floor(Math.random()*messageArrays.length);
    randomMessageArrays.push(messageArrays[messageIndex])
    return randomMessageArrays.toString();
  }
}

// Добавляет случайное имя



// COMMENTS. text; Array; comment list; amount = random;
// - comments;
function createCommentsBlock (MAX_COMMENT_COUNT) {
  let commentsArrays = [];
  for (let commentsIdNumber = 1; commentsIdNumber <= MAX_COMMENT_COUNT; commentsIdNumber++) {
    commentsArrays.push ({
      id: commentsIdNumber,
      avatar: `img/avatar-${{commentsIdNumber}}.svg`,
      message: createRandomMessage(),
      name: commentNames,
    });
  };
}

// Создает блок карточек

function setPhotocardData(MAX_PHOTOCARD_AMOUNT) {
  const PHOTOCARD_ARRAY = [];
  for (let idNumber = 1; idNumber <= MAX_PHOTOCARD_AMOUNT; idNumber++) {
    PHOTOCARD_ARRAY.push ({
      id: idNumber,
      url: `photos/${{idNumber}}.jpg`,
      description: getRandomQuote(),
      likes: getRandomLike(MIN_LIKE, MAX_LIKE),
      comments: createCommentsBlock(MAX_COMMENT_COUNT),
    });
  }
}
setPhotocardData(MAX_PHOTOCARD_AMOUNT);
