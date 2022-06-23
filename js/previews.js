import { previewClickHandler } from './big-picture.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const gallerySection = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const setPreviewTemplate = (template, {url, likes, comments}) => {
  template.querySelector('.picture__img').src = url;
  template.querySelector('.picture__likes').textContent = likes;
  template.querySelector('.picture__comments').textContent = comments.length;
  return template;
};

function getPreviews(photos) {
  photos.forEach((photo) => {
    const element = setPreviewTemplate(pictureTemplate.cloneNode(true), photo);
    fragment.appendChild(element);
    element.addEventListener('click', (evt) => previewClickHandler(evt, photo));
  });
  gallerySection.appendChild(fragment);
}

export { getPreviews };
