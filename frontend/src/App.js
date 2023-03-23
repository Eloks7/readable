import React, { Component, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './features/post/postSlice';
import { fetchCategories } from './features/category/categorySlice';
  // import { fetchComments } from './features/comment/commentSlice';

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
    <div className="App">
      <header className="App-header">
        React
      </header>
      <ul>
        {/* {Object.keys(categories).map(category => ( */}
        {categories.map(category => (
          <li key={category.name}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
