const commentList = document.querySelector('.social__comments');
const commentElements = document.querySelectorAll('.social__comment');
const commentCounter = document.querySelector('.social__comment-count');
const commenstLoader = document.querySelector('.comments-loader');
const MAX_LENGTH = 5;
const LOAD_STEP = 5;

const countComments = (arr) => {
  commentCounter.innerHTML = `${arr.length < MAX_LENGTH ? arr.length  : MAX_LENGTH} из ${arr.length} комментариев`;
};

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

const showComments = (comments, step) => {
  countComments(comments);
  const currentComments = comments.slice(0, step);
  currentComments.forEach((item) => setCommentTemplate(commentElements[0].cloneNode(true), item));
};

const cleanCommentList = (list) => list.innerHTML = '';

function handleComments(comments) {
  cleanCommentList(commentList);
  const currentStep = LOAD_STEP;
  commenstLoader.addEventListener('click', showComments(comments, currentStep));
}

export { handleComments };
