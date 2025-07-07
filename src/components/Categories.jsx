import React, { useEffect, useState } from 'react';
import './Categories.css'; 

function Categories({ onSelectCategory, selectedCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://public-api.wordpress.com/wp/v2/sites/nazanin46.wordpress.com/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error('Failed to fetch categories:', err));
  }, []);

  const handleChange = (e) => {
    const value = e.target.value === "null" ? null : Number(e.target.value);
    onSelectCategory(value);
  };

  return (
    <div className="categories-container">
      <h1 className="categories-heading">Flower Bucket Gallery</h1>

      <div className="category-select-wrapper">
        <label htmlFor="category-select" className="category-label">
          Categories:
        </label>
        <select 
          id="category-select"
          value={selectedCategory ?? "null"} 
          onChange={handleChange} 
          className="categories-select"
        >
          <option value="null">All</option>
          {categories
            .filter(cat => cat.count > 0)
            .map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.name} ({cat.count})
              </option>
            ))}
        </select>
      </div>

    </div>
  );
}

export default Categories;
