import './big-picture.js';
import './previews.js';
import { setPhotocard } from './set-photocard.js';
import { MAX_PHOTOCARD_AMOUNT } from './data.js';
import './create-comment.js';
import './image-upload-form.js';
import './validation.js';

setPhotocard(MAX_PHOTOCARD_AMOUNT);

// const dataArray = new Array();
// fetch(dataUrl)
//   .then((blob) => blob.json())
//   .then(data => dataArray.push(...data));
//   // .then((data) => dataArray.push(...data));
// getPreviews(dataArray);
