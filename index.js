const postForm = document.getElementById('post-form')
const blogEl = document.getElementById('blog-posts')
let postsArray = []

function renderPosts() {
    let html = ''
    for (let post of postsArray) {
        html += `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        <hr>
        `
    }
    blogEl.innerHTML = html
}

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then((response) => response.json())
    .then((data) => {
        postsArray = data.slice(0, 5)
        renderPosts()
    })

postForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const postTitle = document.getElementById('post-title').value
    const postBody = document.getElementById('post-body').value
    const data = {
        title: postTitle,
        body: postBody,
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    }

    fetch('https://apis.scrimba.com/jsonplaceholder/posts', options)
        .then((response) => response.json())
        .then((post) => {
            postsArray.unshift(post)
            renderPosts()
        })

    postForm.reset()
})

// renderPosts(postsArray)
