const blogEl = document.getElementById('blog-posts')

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then((response) => response.json())
    .then((data) => {
        const postsArr = data.slice(0, 5)
        let html = ''
        postsArr.forEach((element) => {
            html += `
                <h1>${element.title}</h1>
                <p>${element.body}</p>
                <hr>
            `
        })
        blogEl.innerHTML = html
    })

document.getElementById('post-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const postTitle = document.getElementById('post-title').value
    const postBody = document.getElementById('post-body').value
    const data = {
        title: postTitle,
        body: postBody,
    }
    console.log(data)
})
