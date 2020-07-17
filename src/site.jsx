var site = {
    "title": "Tech Blog Title",
    "navbarTitle": "Tech Blog",
    "blog": {
        "posts": 'https://jsonplaceholder.typicode.com/posts',
        "post": (id) => `https://jsonplaceholder.typicode.com/posts/${id}`
    },
    "author": {
        "get": (id) => `https://jsonplaceholder.typicode.com/author/${id}`,
        "all": "https://jsonplaceholder.typicode.com/author"
    }
}

export default site