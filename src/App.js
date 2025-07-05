import React from 'react';
import Posts from './components/Posts';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content-wrapper">
        <Categories />
        <Posts />
      </div>
    </div>
  );
}

export default App;
