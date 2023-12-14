// JavaScript code to handle posting on the wall

document.getElementById('newPostForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const postContent = document.getElementById('postContent').value;
    if (postContent.trim() !== '') {
      createPost(postContent);
      document.getElementById('postContent').value = '';
    }
  });
  
  function createPost(content) {
    const postContainer = document.getElementById('postContainer');
    const post = document.createElement('div');
    post.classList.add('post');
    const now = new Date();
    const timestamp = now.toLocaleString();
    post.innerHTML = `
      <p>${content}</p>
      <p class="timestamp">${timestamp}</p>
      <button class="deleteBtn">Delete</button>
    `;
    postContainer.appendChild(post);
  
    const deleteButtons = document.querySelectorAll('.deleteBtn');
    deleteButtons.forEach(button => {
      button.addEventListener('click', function() {
        postContainer.removeChild(post);
      });
    });
  }
  