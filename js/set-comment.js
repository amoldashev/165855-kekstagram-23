const commentList = document.querySelector('.social__comments');
const commentElements = document.querySelectorAll('.social__comment');
const commentCounter = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const COMMENTS_STEP = 5;

const setCommentTemplate = (template, { avatar, message, name }) => {
  const avatarElement = template.querySelector('.social__picture');
  const messageElement = template.querySelector('.social__text');
  messageElement.textContent = message;
  avatarElement.src = avatar;
  avatarElement.alt = name;
  const fragment = document.createDocumentFragment();
  fragment.append(template);
  commentList.appendChild(template);
  return template;
};

const cleanCommentList = (list) => list.innerHTML = '';

const loaderClickHandler = () => {
  cleanCommentList(commentList);
};

const countComments = (arr) => commentCounter.textContent = `${arr.length < COMMENTS_STEP ? arr.length  : COMMENTS_STEP} из ${arr.length} комментариев`;

function handleComments(comments) {
  cleanCommentList(commentList);
  countComments(comments);
  comments.slice(0, COMMENTS_STEP).forEach((comment) => setCommentTemplate(commentElements[0].cloneNode(true), comment));
  commentsLoader.addEventListener('click', loaderClickHandler);
}

export { handleComments };
