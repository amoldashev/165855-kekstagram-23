import {isEscEvent} from './utils.js';
import {MAX_PHOTOCARD_AMOUNT} from './data.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');

const bigPictureImg = document.querySelector('.big-picture__img');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const socialCaption = document.querySelector('.social__caption');
const socialCommentsList = document.querySelector('.social__comments');
// const socialCommentsItem = socialCommentsList.children;


const renderBigPicture = (url, likes, id, description) => {
  for (let indexNumber = 0; indexNumber <= MAX_PHOTOCARD_AMOUNT; indexNumber++) {
    bigPictureImg.src = url;
    likesCount.textContent = likes;
    commentsCount.textContent = id;
    socialCaption.textContent = description;
  }
};

// getBigPicture();
// Разметка каждого комментария должна выглядеть так:

/*
<li class="social__comment">
    <img
        class="social__picture"
        src="{{аватар}}"
        alt="{{имя комментатора}}"
        width="35" height="35">
    <p class="social__text">{{текст комментария}}</p>
</li>

    socialCommentsItem.forEach(element) (() => {

      console.log(element)
      element.querySelector('.social__picture').src = createComment.avatar;
      element.querySelector('.social__picture').alt = createComment.name;
      socialText = document.querySelector('.social__text');
      socialText.textContent = createComment.message;
    })
*/

// После открытия окна спрячьте блоки счётчика комментариев .social__comment-count
// и загрузки новых комментариев .comments-loader, добавив им класс hidden, с ними мы разберёмся позже, в другом домашнем задании.

const socialCommentCount = document.querySelector('.social__comment-count');

const hideSocialCommentCount = () => socialCommentCount.classList.add('hidden');

// 4. После открытия окна добавьте тегу <body> класс modal-open, чтобы контейнер с
//  фотографиями позади не прокручивался при скролле.
const addModalOpen = () => body.classList.add('modal-open');

// При закрытии окна не забудьте удалить этот класс.
const removeModalOpen = () => body.classList.remove('modal-open');

// По нажатию миниатюры открывается большая картника
const openBigPicture = () => {
  bigPicture.classList.remove('hidden');
  addModalOpen();
  hideSocialCommentCount();
};

// Кнопка отмены
const bigPictureCancel = document.querySelector('.big-picture__cancel');

const shutBigPicture = () => {
  bigPicture.classList.add('hidden');
  removeModalOpen();
};

window.addEventListener(
  'keydown',
  () => {
    if (isEscEvent) {
      shutBigPicture();
    }
  },
);

bigPictureCancel.addEventListener(
  'click',
  () => {
    shutBigPicture();
  });

bigPictureCancel.removeEventListener('click', shutBigPicture);

const getCancelEVent = () => {
  if (isEscEvent) {
    shutBigPicture();
  }
};

bigPictureCancel.addEventListener(
  'keydown',
  () => {
    getCancelEVent();
  });

bigPictureCancel.removeEventListener('keydown', getCancelEVent);

export {
  renderBigPicture,
  openBigPicture,
  socialCommentsList
};
