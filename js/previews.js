// Задает шаблону переменную
const templateContent = document.querySelector('#picture').content;
// Шаблон блока картинки
const pictureTemplate = templateContent.querySelector('.picture');
// Блок для вывода фотографий
const gallerySection = document.querySelector('.pictures');
// Вызов функции фрагмента
const fragment = document.createDocumentFragment();

const getPreviews = (data) => {
  for (let indexNumber = 0; indexNumber < data.length; indexNumber++) {
    const element = pictureTemplate.cloneNode(true);
    element.querySelector('.picture__img').src = data[indexNumber].url;
    element.querySelector('.picture__likes').textContent = data[indexNumber].likes;
    element.querySelector('.picture__comments').textContent = data[indexNumber].comments.length;
  }
  gallerySection.appendChild(fragment);
};

export { getPreviews };
