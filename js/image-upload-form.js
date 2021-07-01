import {isEscEvent, cleanInputValue} from './utils.js';

const uploadSelectImage = document.querySelector('#upload-select-image');
const inputUploadFile = uploadSelectImage.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadButton = document.querySelector('#upload-cancel');
uploadButton.tabIndex = '0';

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    imgUploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

const openUploadModal = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
};

const shutUploadModal = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
};

inputUploadFile.addEventListener(
  'change',
  () => {
    cleanInputValue(inputUploadFile);
    openUploadModal();
  },
);

inputUploadFile.removeEventListener(
  'change',
  () => {
    cleanInputValue(inputUploadFile);
    openUploadModal();
  },
);

uploadButton.addEventListener(
  'click',
  () => {
    shutUploadModal();
  },
);

uploadButton.removeEventListener(
  'click',
  () => {
    shutUploadModal();
  },
);

uploadButton.addEventListener(
  'keydown',
  (evt) => {
    cleanInputValue(inputUploadFile);
    onPopupEscKeydown(evt);
  },
);

uploadButton.removeEventListener(
  'keydown',
  (evt) => {
    cleanInputValue(inputUploadFile);
    onPopupEscKeydown(evt);
  },
);
