// Массив имён

const NAMES_ARRAY = [
  'Антуан',
  'Роджер',
  'Рошан',
  'Максимильян',
  'Хачатурян',
  'Вазовски',
];

// Массив сообщений

const MESSAGE_ARRAY = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// Создает массив комментарий

const MIN_RANDOM_ID = 1;
const MAX_RANDOM_ID = 6;

const createComment = (param) => new Array(param).fill(null).map(() => ({
  id: getRandomNumber(1, 25),
  avatar: `img/avatar-${ getRandomNumber(MIN_RANDOM_ID, MAX_RANDOM_ID) }.svg`,
  message: MESSAGE_ARRAY[getRandomNumber(1, MESSAGE_ARRAY.length - 1)],
  name: NAMES_ARRAY[getRandomNumber(1, NAMES_ARRAY.length - 1)],
}));

export {NAMES_ARRAY, MESSAGE_ARRAY, MIN_RANDOM_ID, MAX_RANDOM_ID, createComment};
