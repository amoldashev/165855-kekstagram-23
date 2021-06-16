import { DESCRIPTION_ARRAY } from './data.js';
import { MIN_LIKE, MAX_LIKE_COUNT } from './parameters.js';
import { getRandomNumber } from './get-random-number.js';
import { createComment } from './create-comment.js';


//  Функция возврата фотокарточек

const setPhotocard = (param) => new Array(param).fill(null).map((photocard, index) => ({
  id: index + 1,
  description: DESCRIPTION_ARRAY[getRandomNumber(1, DESCRIPTION_ARRAY.length - 1)],
  likes: getRandomNumber(MIN_LIKE, MAX_LIKE_COUNT),
  comments: createComment(),
}));


export { setPhotocard };
