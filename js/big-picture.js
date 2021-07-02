// import './previews.js';

const bigPicture = document.querySelector('.big-picture');
const hidden = document.querySelector('section.hidden');
const body = document.querySelector('body');

// 2. Для отображения окна нужно удалять класс hidden у элемента .big-picture и каждый раз заполнять его данными о конкретной фотографии:

const openBigPicture = () => bigPicture.classList.remove('hidden');

// - Адрес изображения url подставьте как src изображения внутри блока .big-picture__img.
const bigPictureImg = document.querySelector('.big-picture__img');

// - Количество лайков likes подставьте как текстовое содержание элемента .likes-count.
const likesCount = document.querySelector('.likes-count');
const likesCountContent = likesCount.textContent;

// - Количество комментариев comments подставьте как текстовое содержание элемента .comments-count.
const commentsCount = document.querySelector('.comments-count');
const commentsCountContent = commentsCount.textContent;
// - Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments.
const socialCommentsList = document.querySelector('.social__comments');
const socialCommentsItem = socialCommentsList.querySelectorAll('.social__comment');
console.log(socialCommentsItem)
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
