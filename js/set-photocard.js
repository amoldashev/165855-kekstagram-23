import { DESCRIPTION_ARRAY, MIN_LIKE, MAX_LIKE_COUNT } from './data.js';
import { getRandomPositiveInt } from './utils.js';
import { createComment } from './create-comment.js';

//  Функция возврата фотокарточек

const setPhotocard = (param) => new Array(param).fill(null).map((photocard, index) => ({
  id: index + 1,
  description: DESCRIPTION_ARRAY[getRandomPositiveInt(1, DESCRIPTION_ARRAY.length - 1)],
  likes: getRandomPositiveInt(MIN_LIKE, MAX_LIKE_COUNT),
  comments: createComment(),
}));

export { setPhotocard };
