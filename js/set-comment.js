const commentList = document.querySelector('.social__comments');
const commentElements = document.querySelectorAll('.social__comment');
const commentCounter = document.querySelector('.social__comment-count');
const commenstLoader = document.querySelector('.comments-loader');
const LOAD_STEP = 5;
let COMMENTS_ARRAY = [];
let currentStep = 0;

const countLoaderComments = (step, arr) => {
  const counter = step >= arr.length? arr.length : step;
  commentCounter.innerHTML = `${counter} из ${arr.length} комментариев`;
};

const setCommentTemplate = (template, { avatar, message, name }) => {
  const avatarElement = template.querySelector('.social__picture');
  const messageElement = template.querySelector('.social__text');
  messageElement.textContent = message;
  avatarElement.src = avatar;
  avatarElement.alt = name;
  return template;
};

const renderComments = (arr) => {
  const fragment = document.createDocumentFragment();

  arr.forEach((comment) => {
    const newComment = setCommentTemplate(commentElements[0].cloneNode(true), comment);
    fragment.append(newComment);
  });

  commentList.appendChild(fragment);
};

const showCommentsLoader = () => {
  commenstLoader.classList.remove('hidden');
};

const clearComments = () => {
  commentList
    .querySelectorAll('.social__comment')
    .forEach(
      (item) => item.remove());

  COMMENTS_ARRAY = [];
  currentStep = 0;

  showCommentsLoader();
};

function handleComments(comments) {
  clearComments();

  COMMENTS_ARRAY = comments.slice();
  currentStep += LOAD_STEP;
  const currentComments = COMMENTS_ARRAY.slice(0, currentStep);

  renderComments(currentComments);
  countLoaderComments(currentStep, comments);
}

const hideCommentsLoader = () => {
  commenstLoader.classList.add('hidden');
};

const onCommentsLoadEvent = () => {
  const nextStep = currentStep + LOAD_STEP;
  const extraComments = COMMENTS_ARRAY.slice(currentStep, nextStep);

  renderComments(extraComments);
  countLoaderComments(nextStep, COMMENTS_ARRAY);

  if (nextStep >= COMMENTS_ARRAY.length) {
    hideCommentsLoader();
  }

  return currentStep = nextStep;
};

commenstLoader.addEventListener('click', onCommentsLoadEvent);

export { handleComments };
