import { handleEsc } from './utils.js';

const body = document.querySelector('body');
const modal = body.querySelector('.big-picture');
const bigPictureImg = body.querySelector('.big-picture__img > img');
const cancelButton = body.querySelector('.big-picture__cancel');
const likesCount = body.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const descriptionEl = document.querySelector('.social__caption');
const counter = document.querySelector('.social__comment-count'); //FIXME: del later on
const loader = document.querySelector('.comments-loader'); //FIXME: del later on


function hideModal() {
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

function setBigPicture({url, likes, comments, description}) {
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  descriptionEl.textContent = description;
  counter.classList.add('hidden'); // FIXME: del later on
  loader.classList.add('hidden'); // FIXME: del later on
}

const previewClickHandler = (evt, photo) => {
  evt.preventDefault();
  body.classList.add('modal-open');
  modal.classList.remove('hidden');
  document.addEventListener('keydown', onEsc, { 'once': true });
  cancelButton.addEventListener('click', handleButton, { 'once': true });
  setBigPicture(photo);
};

export { previewClickHandler };
