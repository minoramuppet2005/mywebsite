// JavaScript code for the blog functionality
document.getElementById('post-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload

    // Get input values
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;

    // Create a new post element
    const post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
    `;

    // Append post to the container
    document.getElementById('posts-container').appendChild(post);

    // Clear form inputs
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
});
