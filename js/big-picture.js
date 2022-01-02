import { handleEsc } from './utils.js';
import { setCommentsEvent } from './set-comment.js';

const body = document.querySelector('body');
const modal = body.querySelector('.big-picture');
const bigPictureImg = body.querySelector('.big-picture__img > img');
const cancelButton = body.querySelector('.big-picture__cancel');
const likesCount = body.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');

function hideModal() { // FIXME: установить прежние данные
  body.classList.remove('modal-open');
  modal.classList.add('hidden');
  // eslint-disable-next-line no-use-before-define
  document.removeEventListener('keydown', onEsc);
  // eslint-disable-next-line no-use-before-define
  cancelButton.removeEventListener('click', handleButton);
}

function handleButton(evt) {
  evt.preventDefault();
  hideModal();
}

const onEsc = handleEsc(hideModal);

function setBigPicture(evt) {
  bigPictureImg.src = evt.target.src;
  const parent = evt.target.parentNode;
  const likes = parent.querySelector('.picture__likes');
  const comments = parent.querySelector('.picture__comments');
  likesCount.textContent = likes.textContent;
  commentsCount.textContent = comments.textContent;
}

function openPreview(evt) {
  if (evt.target.className === 'picture__img') {
    body.classList.add('modal-open');
    modal.classList.remove('hidden');
    document.addEventListener('keydown', onEsc);
    cancelButton.addEventListener('click', handleButton, { 'once': true });
    setBigPicture(evt);
    setCommentsEvent();
  }
}

function handlePreview() {
  const gallery = document.querySelector('.pictures');
  gallery.addEventListener('click', openPreview);
}

document.addEventListener('DOMContentLoaded', handlePreview);
