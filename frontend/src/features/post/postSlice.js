import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getPosts } from '../../readableAPI';

const initialState = {
    posts: {}
}

export const fetchPosts = createAsyncThunk('post/fetchPosts', () => {
    return axios
        .get(getPosts)
        .then(res => res.data)
})

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        // getPosts: (state, action) => {
        //     state.posts = action.payload
        // },
        addPost: (state, action) => {
            state.posts[action.payload.id] = action.payload
        }
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
    }
})

export default postSlice.reducer;