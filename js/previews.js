const template = document.querySelector('#picture').content;
const templatePicture = template.querySelector('a.picture');
const gallerySection = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

function getPreviews(images) {
  for (let idx = 0; idx < images.length; idx++) {
    const element = templatePicture.cloneNode(true);
    element.querySelector('.picture__img').src = images[idx].url;
    element.querySelector('.picture__likes').textContent = images[idx].likes;
    element.querySelector('.picture__comments').textContent =
      images[idx].comments.length;
    fragment.appendChild(element);
  }
  gallerySection.appendChild(fragment);
}

export { getPreviews };
