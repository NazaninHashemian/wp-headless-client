import React, { useEffect, useState } from 'react';
import './Categories.css'; 

function Categories({onSelectCategory}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://my-headless-site.local/wp-json/wp/v2/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error('Failed to fetch categories:', err));
  }, []);

  return (
    <div>
      {/* <h2>Categories</h2> */}
      <ul className="categories-navbar">
        <li onClick={() => onSelectCategory(null)}>All</li>
        {categories.map(cat => (
          <li key={cat.id} onClick={() => onSelectCategory(cat.id)}>
            {cat.name} 
            ({cat.count} items)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
