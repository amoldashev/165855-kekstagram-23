// Получение случайного числа

const getRandomPositiveInt = (min, max) =>
  min >= 0 && min < max
    ? ~~(min + Math.random() * (max - min + 1))
    : null;

// Получение случайного элемента

const getRandomElFromArr = (arr) =>
  arr.length
    ? arr.splice(getRandomPositiveInt(0, arr.length - 1), 1)
    : null;

// Массив сообщений

const MESSAGE_ARRAY = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

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

// Создает массив комментарий

const MIN_RANDOM_ID = 1;
const MAX_RANDOM_ID = 6;

const createComment = (param) => new Array(param).fill(null).map((comment, index) => ({
  id: getRandomNumber(1, 25),
  avatar: `img/avatar-${ getRandomNumber(MIN_RANDOM_ID, MAX_RANDOM_ID) }.svg`,
  message: MESSAGE_ARRAY[getRandomNumber(1, MESSAGE_ARRAY.length - 1)],
  name: NAMES_ARRAY[getRandomNumber(1, NAMES_ARRAY.length - 1)],
}))

// Создает массив фотокарточек

const MAX_PHOTOCARD_AMOUNT = 25;

const setPhotocard = (param) => new Array(param).fill(null).map((photocard, index) => ({
    id: index + 1,
    description: DESCRIPTION_ARRAY[getRandomNumber(1, DESCRIPTION_ARRAY.length - 1)],
    likes: getRandomNumber(MIN_LIKE, MAX_LIKE_COUNT),
    comments: createComment(),
  })
);

setPhotocard(MAX_PHOTOCARD_AMOUNT);