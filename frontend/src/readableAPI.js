import { v4 as uuidv4 } from 'uuid';
const api = 'http://localhost:3001';

const headers = {
    'Accept': 'application/json',
    'Authorization': 'JWT',
    // 'Content-Type': 'application/json'
}

// CATEGORIES
export const getCategories = () => 
    fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories)


// POSTS
// Posts per category
export const getCategoryPosts = (category) =>
    fetch(`${api}/${category.id}/posts`, { headers })
        .then(res => res.json())
        .then(data => data)

// All posts
export const getAllPosts = () =>
    fetch(`${api}/posts`, { headers })
        .then(res => res.json())
        .then(data => data)

// New post
export const newPost = (post) => {
    const url = `${api}/posts`;
    const config = {
        method: 'POST',
        headers,
        body: JSON.stringify({
            id: uuidv4(),
            timestamp: Date.now(),
            author: post.author,
            title: post.title,
            body: post.body,
            category: post.category,
        })
    }

    return fetch(url, config)
        .then(res => res.json())
}
// Post Details
export const getPost = (id) =>
    fetch(`${api}/posts/${id}`, { headers })
        .then(res => res.json())
        .then(data => data)

// Post voting
export const votePost = (id, voteType) => {
    const config = {
        method: 'POST',
        headers,
        body: JSON.stringify({option: voteType})
    }

    return fetch(`${api}/posts/${id}`, config)
        .then(res => res.json())
        .then(data => data)
}