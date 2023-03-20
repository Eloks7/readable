import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getPosts, addPost, deletePost, votePost, editPost, getPost } from '../../readableAPI';

const initialState = {
    posts: {}
}

export const fetchPosts = createAsyncThunk('post/fetchPosts', () => {
    return axios
        .get(getPosts)
        .then(res => res.data)
})

export const createPost = createAsyncThunk('post/createPost', () => {
    return axios
        .post(addPost)
        .then(res => res.post)
})

export const removePost = createAsyncThunk('post/removePost', () => {
    return axios
        .post(deletePost)
        .then(res => res.post)
})

export const updatePost = createAsyncThunk('post/updatePost', () => {
    return axios
        .post(editPost)
        .then(res => res.post)
})

export const ratePost = createAsyncThunk('post/ratePost', () => {
    return axios
        .post(votePost)
        .then(res => res.post)
})

// export const postDetails = createAsyncThunk('post/postDetails', () => {
//     return axios
//         .post(getPost)
//         .then(res => res.post)
// })

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        // getPosts: (state, action) => {
        //     state.posts = action.payload
        // },
        // addPost: (state, action) => {
        //     state.posts[action.payload.id] = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.posts = {}
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload
        })
        builder.addCase(fetchPosts.rejected, (state) => {
            state.posts = {}
        })
        // builder.addCase(createPost.pending, (state) => {})
        builder.addCase(createPost.fulfilled, (state, action) => {
            state.posts[action.payload.id] = action.payload
        })
        // builder.addCase(createPost.rejected, (state) => {})
    }
})

export default postSlice.reducer;