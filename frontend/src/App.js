import React, { Component, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux'
import { fetchPosts } from './features/post/postSlice';
import { fetchCategories } from './features/category/categorySlice';
  import { fetchComments } from './features/comment/commentSlice';

// class App extends Component {
//   // const dispatch = useDispatch();
//   render() {
//     useEffect(() => {
//       useDispatch(fetchCategories)
//       useDispatch(fetchPosts)
//     }, []);
//     return(
//       <div>
//         OKay
//       </div>
//     )
//   }
// }
// function App() {
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
          dispatch(fetchCategories())
          dispatch(fetchPosts())
          dispatch(fetchComments())
        },);
  return (
    <div className="App">
      <header className="App-header">
        Okay
      </header>
    </div>
  );
}

export default App;
