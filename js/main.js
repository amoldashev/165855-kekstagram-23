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

function getRandomMessage(MESSAGE_ARRAY) {
  return getRandomElFromArr(MESSAGE_ARRAY);
}

// Выставляет случайное число лайков

const MAX_LIKE_COUNT = 2000;
const MIN_LIKE = 0;

function getRandomLike(MIN_LIKE, MAX_LIKE_COUNT) {
  return getRandomPositiveInt(MIN_LIKE, MAX_LIKE_COUNT);
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

function getRandomName(NAMES_ARRAY) {
  return getRandomElFromArr(NAMES_ARRAY);
}

// Описание картинки

const QUOTES_ARRAY = [
  'Кекстаграммная котейка',
  'Блудливый котян',
  'Ночной пуритан',
  'Предсказуемый жрец',
  'Развратный жмурик',
  'Неистовый фрик',
  'Печальный брокер',
  'Условный знак',
  'Кекстаграммная котейка',
  'Блудливый котян',
  'Ночной пуритан',
  'Предсказуемый жрец',
  'Развратный жмурик',
  'Неистовый фрик',
  'Печальный брокер',
  'Условный знак',
  'Кекстаграммная котейка',
  'Блудливый котян',
  'Ночной пуритан',
  'Предсказуемый жрец',
  'Развратный жмурик',
  'Неистовый фрик',
  'Печальный брокер',
  'Условный знак',
  'Кекстаграммная котейка',
  'Блудливый котян',
  'Ночной пуритан',
  'Предсказуемый жрец',
  'Развратный жмурик',
  'Неистовый фрик',
  'Печальный брокер',
  'Условный знак',
  'Кекстаграммная котейка',
  'Блудливый котян',
  'Ночной пуритан',
  'Предсказуемый жрец',
  'Развратный жмурик',
  'Неистовый фрик',
  'Печальный брокер',
  'Условный знак',
  'Кекстаграммная котейка',
  'Блудливый котян',
  'Ночной пуритан',
  'Предсказуемый жрец',
  'Развратный жмурик',
  'Неистовый фрик',
  'Печальный брокер',
  'Условный знак',
  'Развратный жмурик',
  'Неистовый фрик',
];

function getRandomQuote(QUOTES_ARRAY) {
  return getRandomElFromArr(QUOTES_ARRAY);
}

// Создает массив комментарий

const MIN_COMMENT_COUNT = 1;
const MAX_COMMENT_COUNT = 6;
const COMMENTS_ARRAY = [];

function createCommentsArr(MIN_COMMENT_COUNT, MAX_COMMENT_COUNT) {

  for (let commentsIdNumber = MIN_COMMENT_COUNT; commentsIdNumber <= MAX_COMMENT_COUNT; commentsIdNumber++) {
    COMMENTS_ARRAY.push ({
      id: commentsIdNumber,
      avatar: `img/avatar-${commentsIdNumber}.svg`,
      message: getRandomMessage(MESSAGE_ARRAY),
      name: getRandomName(NAMES_ARRAY),
    });
  }
  return COMMENTS_ARRAY;
}

console.table(createCommentsArr(MIN_COMMENT_COUNT, MAX_COMMENT_COUNT));
// // Создает массив фотокарточек

const MAX_PHOTOCARD_AMOUNT = 25;
const PHOTOCARD_ARRAY = [];

function setsPhotocardData(MAX_PHOTOCARD_AMOUNT) {
  for (let idNumber = 1; idNumber <= MAX_PHOTOCARD_AMOUNT; idNumber++) {
    PHOTOCARD_ARRAY.push ({
      id: idNumber,
      url: `photos/${idNumber}.jpg`,
      description: getRandomQuote(QUOTES_ARRAY),
      likes: getRandomLike(MIN_LIKE, MAX_LIKE_COUNT),
      comments: createCommentsArr(MIN_COMMENT_COUNT, MAX_COMMENT_COUNT),
    });
  }
  return PHOTOCARD_ARRAY;
}
setsPhotocardData.push

setsPhotocardData(MAX_PHOTOCARD_AMOUNT);

console.table(setsPhotocardData(MAX_PHOTOCARD_AMOUNT));
