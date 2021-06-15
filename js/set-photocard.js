// Создает массив фотокарточек

const MAX_PHOTOCARD_AMOUNT = 25;

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

const setPhotocard = (param) => new Array(param).fill(null).map((photocard, index) => ({
  id: index + 1,
  description: DESCRIPTION_ARRAY[getRandomNumber(1, DESCRIPTION_ARRAY.length - 1)],
  likes: getRandomNumber(MIN_LIKE, MAX_LIKE_COUNT),
  comments: createComment(),
}));

export {MAX_PHOTOCARD_AMOUNT, DESCRIPTION_ARRAY, setPhotocard};
