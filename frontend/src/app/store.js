import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from '../features/category/categorySlice';
import postReducer from '../features/post/postSlice';
import commentReducer from '../features/comment/commentSlice';

const store = configureStore({
    reducer: {
        categories: categoryReducer,
        posts: postReducer,
        comments: commentReducer
    }
})

export default store;