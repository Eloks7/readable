import React, { Component, useEffect, Fragment } from 'react';
// import logo from './logo.svg';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../features/post/postSlice';
import { fetchCategories } from '../features/category/categorySlice';
  // import { fetchComments } from './features/comment/commentSlice';
import SideNav from './SideNav';
// function App() {
const App = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories)
  useEffect(() => {
          dispatch(fetchCategories())
          dispatch(fetchPosts())
          // dispatch(fetchComments())
        }, [dispatch]);
  return (
    <div className="App px-5 mx-auto">
      
      {/* <ul className="text-lg text-left">
        {categories.map(category => (
          <li key={category.name}>{category.name}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
