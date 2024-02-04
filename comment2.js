document.addEventListener('DOMContentLoaded', function() {
  // Load likes count from localStorage or initialize to 0
  let likes = parseInt(localStorage.getItem('likes2')) || 0;
  // Display initial likes count
  document.querySelector('.like-count2').textContent = likes;

  // Load comments from localStorage or initialize to an empty array
  let comments = JSON.parse(localStorage.getItem('comments2')) || [];

  // Update likes count and save to localStorage
  document.querySelector('.like-btn2').addEventListener('click', function() {
    likes++;
    document.querySelector('.like-count2').textContent = likes;
    localStorage.setItem('likes2', likes);
  });

  // Handle comment submission
  document.getElementById('comment-form2').addEventListener('submit', function(event) {
    event.preventDefault();
    const commentText = document.getElementById('comment-text2').value.trim();
    if (commentText !== '') {
      // Add new comment to the array
      comments.push(commentText);
      // Save updated comments array to localStorage
      localStorage.setItem('comments2', JSON.stringify(comments));

      // Create a new comment element and append it to the list
      const commentItem = document.createElement('li');
      commentItem.textContent = commentText;
      document.querySelector('.comment-list2').appendChild(commentItem);

      // Clear the comment input field
      document.getElementById('comment-text2').value = '';
    }
  });

  // Display existing comments from localStorage
  comments.forEach(function(commentText) {
    const commentItem = document.createElement('li');
    commentItem.textContent = commentText;
    document.querySelector('.comment-list2').appendChild(commentItem);
  });
});
