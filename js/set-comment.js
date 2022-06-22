const commentsList = document.querySelector('.social__comments');
const comments = document.querySelectorAll('.social__comment');

const handlePrviews = (preview, fetchedData) => {
  for (let idx = 0; idx < fetchedData.length; idx++) {
    const element = fetchedData[idx];
    return element;
  }
};

const handleComments = (dataComments) => {
  dataComments;
};

const fetchComments = (fetchedData) => {
  const previews = document.querySelectorAll('.picture');
  previews.forEach((preview) => handlePrviews(preview, fetchedData));
  handleComments(fetchedData);
};

const cleanCommentList = (list) => list.forEach((item) => item.remove());

function commentListener() {
  cleanCommentList(comments);
}

function setCommentsEvent() {
  document.addEventListener('click', commentListener, { once: true });
}

export { fetchComments, commentsList, setCommentsEvent };
