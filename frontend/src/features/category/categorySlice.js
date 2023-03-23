import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCategories } from '../../readableAPI';

const initialState = {
    categories: []
}

const headers = {
    'Accept': 'application/json',
    'Authorization': 'JWT',
    // 'Content-Type': 'application/json'
}

// export const fetchCategories = createAsyncThunk('category/fetchCategories', () => {
//     return axios
//         .get(getCategories())
//         .then(res => res.data)
// })
export const fetchCategories = createAsyncThunk('post/fetchCategories', () => {
    return fetch('http://localhost:3001/categories', { headers })
        .then(res => res.json())
        .then(res => res.categories)
})

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        // getCategories: (state, action) => {
        //     state.categories = action.payload
        // }
    },
    extraReducers: (builder) => {
        // builder.addCase(fetchCategories.pending, (state) => {
        //     state.categories = {}
        // })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload
        })
        // builder.addCase(fetchCategories.rejected, (state) => {
        //     state.categories = {}
        // })
    }
})

export default categorySlice.reducer;
// export const { fetchCategories } = categorySlice.actions;