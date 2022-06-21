import { getPreviews } from './previews.js';
import { setBigPicture } from './big-picture.js';
import './create-comment.js';
import './image-upload-form.js';
import './validation.js';

const dataBind = getPreviews.bind(null, setBigPicture);

async function fetchData() {
  const res = await fetch('https://23.javascript.pages.academy/kekstagram/data');
  const data = await res.json();
  dataBind(data);
}

document.addEventListener('DOMContentLoaded', fetchData);
