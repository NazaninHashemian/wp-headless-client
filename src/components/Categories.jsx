import React, { useEffect, useState } from 'react';
import './Categories.css'; 

function Categories({onSelectCategory, selectedCategory}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://public-api.wordpress.com/wp/v2/sites/nazanin46.wordpress.com/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error('Failed to fetch categories:', err));
  }, []);

  return (
    <div>
      {/* <h2>Categories</h2> */}
      <ul className="categories-navbar">
        <li 
            className={selectedCategory === null ? 'active': ''}
            onClick={() => onSelectCategory(null)}
        >
            All
        </li>
        {categories.map(cat => (
            <li 
                key={cat.id} 
                className={selectedCategory === cat.id ? 'active': ''}
                onClick={() => onSelectCategory(cat.id)}
            >
                {cat.name} 
                <span>({cat.count})</span>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
