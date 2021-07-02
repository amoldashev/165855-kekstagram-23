import {setPhotoCard} from './set-photocard.js';
import {createComment} from './create-comment.js';


const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');

// 2. Для отображения окна нужно удалять класс hidden у элемента .big-picture и каждый раз заполнять его данными о конкретной фотографии:
const openBigPicture = () => bigPicture.classList.remove('hidden');

const bigPictureImg = document.querySelector('.big-picture__img');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');

const socialCommentsList = document.querySelectorAll('.social__comments');
const socialComment = socialCommentsList.querySelector('.social__comment');
const socialCaption = document.querySelector('.social__caption');

const getBigPicture = (data) => {
  for (let indexNumber = 0; indexNumber <= data.length; indexNumber++) {
    bigPictureImg.src = data[indexNumber].url;
    likesCount.textContent = setPhotoCard.likes;
    commentsCount.textContent = createComment.id;
    socialCaption.textContent = setPhotoCard.description;
    socialCommentsList.forEach(socialComment) (() => {
      socialComment.src = createComment.avatar;
      socialComment.alt = createComment.name;
      socialText = document.querySelector('.social__text');
      socialText.textContent = createComment.message;
    })
  }
};

getBigPicture();
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
*/

// 4. После открытия окна добавьте тегу <body> класс modal-open, чтобы контейнер с
//  фотографиями позади не прокручивался при скролле.
const modalOpen = () => body.classList.add('modal-open');

// При закрытии окна не забудьте удалить этот класс.
const modalOpenClose = () => body.classList.remove('modal-open');
