const commentList = document.querySelector('.social__comments');
const commentElements = document.querySelectorAll('.social__comment');
const commentCounter = document.querySelector('.social__comment-count');
const MAX_LENGTH = 5;

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

const showComments = (comments) => {
  commentCounter.textContent = `${comments.length < MAX_LENGTH ? comments.length  : MAX_LENGTH} из ${comments.length} комментариев`;
  comments.slice(0, 5).forEach((comment) => setCommentTemplate(commentElements[0].cloneNode(true), comment));
};

const cleanCommentList = (list) => list.innerHTML = '';

function handleComments(comments) {
  cleanCommentList(commentList);
  showComments(comments);
}

export { handleComments };
