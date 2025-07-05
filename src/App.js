import React from 'react';
import Posts from './components/Posts';
import Categories from './components/Categories';
import { useState } from 'react';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="App">
      <div className="content-wrapper">
        <Categories onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
        <Posts selectedCategory={selectedCategory}/>
      </div>
    </div>
  );
}

export default App;
