import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getComments } from '../../readableAPI';

const initialState = {
    comments: {}
}

export const fetchComments = createAsyncThunk('comment/fetchComments', () => {
    return axios
        .get(getComments)
        .then(res => res.data)
})

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        // getComments: (state, action) => {
        //     state.comments = action.payload
        // },
        addComment: (state, action) => {
            state.comments[action.payload.id] = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchComments.pending, (state) => {
            state.comments = {}
        })
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.comments = action.payload
        })
        builder.addCase(fetchComments.rejected, (state) => {
            state.comments = {}
        })
    }
})

export default commentSlice.reducer;
// export const { getComments, addComment } = commentSlice.actions;