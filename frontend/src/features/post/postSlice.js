import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { getPosts, addPost, deletePost, votePost, editPost, getPost } from '../../readableAPI';

const initialState = {
    posts: []
}
const headers = {
    'Accept': 'application/json',
    'Authorization': 'JWT',
    // 'Content-Type': 'application/json'
}
// export const fetchPosts = createAsyncThunk('post/fetchPosts', () => {
    // return axios
    //     .get(getPosts())
    //     .then(res => res.data)

// })

export const fetchPosts = createAsyncThunk('post/fetchPosts', () => {
    return fetch('http://localhost:3001/posts', { headers })
        .then(res => res.json())
        // .then(res => res.data)
})

// export const fetchCategoryPosts = createAsyncThunk('post/fetchCategoryPosts', (category) => {
//     return fetch(`http://localhost:3001/${category}/posts`, { headers })
//         .then(res => res.json())
        // .then(res => res.data)
// })
// export const fetchPosts = createAsyncThunk(
//     'post/fetchPosts',
//     async (p, { rejectWithValue }) => {
//         try {
//             const { data } = await axios.get('http://localhost:3001/posts');
//             return data;
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     }
// )

// export const createPost = createAsyncThunk('post/createPost', (post) => {
//     return axios
//         .post(addPost, { post })
//         .then(res => res.post)
// })

// export const removePost = createAsyncThunk('post/removePost', () => {
//     return axios
//         .post(deletePost)
//         .then(res => res.post)
// })

// export const updatePost = createAsyncThunk('post/updatePost', () => {
//     return axios
//         .post(editPost)
//         .then(res => res.post)
// })

// export const ratePost = createAsyncThunk('post/ratePost', () => {
//     return axios
//         .post(votePost)
//         .then(res => res.post)
// })

// export const postDetails = createAsyncThunk('post/postDetails', () => {
//     return axios
//         .post(getPost)
//         .then(res => res.post)
// })

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase(fetchPosts.pending, (state) => {
        //     state.posts = {}
        // })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload
        })
        builder.addCase(fetchCategoryPosts, (state, action) => {
            
        })
        // builder.addCase(fetchPosts.rejected, (state) => {
        //     state.posts = {}
        // })
    }
})

export default postSlice.reducer;