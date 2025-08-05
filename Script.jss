javascript

function loadPosts() {
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p><a href="post.html?id=${index}">View</a>`;
        postList.appendChild(postDiv);
    });
}

document.getElementById('post-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push({ title, content });
    localStorage.setItem('posts', JSON.stringify(posts));
    window.location.href = 'index.html';
});
