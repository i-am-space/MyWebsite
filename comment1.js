document.addEventListener('DOMContentLoaded', function() {
  let likes = parseInt(localStorage.getItem('likes')) || 0;
  document.querySelector('.like-count').textContent = likes;

  let comments = JSON.parse(localStorage.getItem('comments')) || [];
  
  function resetLocalStorage() {
    localStorage.removeItem('likes');
    localStorage.removeItem('comments');
    likes = 0;
    comments = [];
    document.querySelector('.like-count').textContent = likes;
    document.querySelector('.comment-list').innerHTML = '';
    localStorage.removeItem('likes2');
    localStorage.removeItem('comments2');
    likes = 0;
    comments = [];
    document.querySelector('.like-count2').textContent = likes;
    document.querySelector('.comment-list2').innerHTML = '';
  }

  document.querySelector('.like-btn').addEventListener('click', function() {
    likes++;
    document.querySelector('.like-count').textContent = likes;
    localStorage.setItem('likes', likes);
  });

  document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const commentText = document.getElementById('comment-text').value.trim();
    if (commentText !== '') {
      comments.push(commentText);
      localStorage.setItem('comments', JSON.stringify(comments));

      const commentItem = document.createElement('li');
      commentItem.textContent = commentText;
      document.querySelector('.comment-list').appendChild(commentItem);

      document.getElementById('comment-text').value = '';
    }
  });

  comments.forEach(function(commentText) {
    const commentItem = document.createElement('li');
    commentItem.textContent = commentText;
    document.querySelector('.comment-list').appendChild(commentItem);
  });

  document.getElementById('reset-btn').addEventListener('click', resetLocalStorage);
});
