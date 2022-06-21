const commentsList = document.querySelector('.social__comments');
const comments = document.querySelectorAll('.social__comment');

const fetchComments = () => {
  // console.log(data)
};

const cleanCommentList = (list) => list.forEach((item) => item.remove());

function commentListener() {
  cleanCommentList(comments);
  fetchComments();
}

function setCommentsEvent() {
  document.addEventListener('click', commentListener, { once: true });
}

export { fetchComments, commentsList, setCommentsEvent };
