document.addEventListener('DOMContentLoaded', function() {
  let likes = parseInt(localStorage.getItem('likes2')) || 0;
  document.querySelector('.like-count2').textContent = likes;

  let comments = JSON.parse(localStorage.getItem('comments2')) || [];

  document.querySelector('.like-btn2').addEventListener('click', function() {
    likes++;
    document.querySelector('.like-count2').textContent = likes;
    localStorage.setItem('likes2', likes);
  });

  document.getElementById('comment-form2').addEventListener('submit', function(event) {
    event.preventDefault();
    const commentText = document.getElementById('comment-text2').value.trim();
    if (commentText !== '') {
      comments.push(commentText);
      localStorage.setItem('comments2', JSON.stringify(comments));

      const commentItem = document.createElement('li');
      commentItem.textContent = commentText;
      document.querySelector('.comment-list2').appendChild(commentItem);

      document.getElementById('comment-text2').value = '';
    }
  });

  comments.forEach(function(commentText) {
    const commentItem = document.createElement('li');
    commentItem.textContent = commentText;
    document.querySelector('.comment-list2').appendChild(commentItem);
  });
});
