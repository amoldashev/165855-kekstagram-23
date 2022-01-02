import './big-picture.js';
import { fetchData } from './fetch.js';

const template = document.querySelector('#picture').content;
const templatePicture = template.querySelector('a.picture');
const gallerySection = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

function getPreviews(data) {
  for (let idx = 0; idx < data.length; idx++) {
    const element = templatePicture.cloneNode(true);
    element.querySelector('.picture__img').src = data[idx].url;
    element.querySelector('.picture__likes').textContent = data[idx].likes;
    element.querySelector('.picture__comments').textContent =
      data[idx].comments.length;
    fragment.appendChild(element);
  }
  gallerySection.appendChild(fragment);
}

document.addEventListener('DOMContentLoaded', fetchData);

export { getPreviews };
