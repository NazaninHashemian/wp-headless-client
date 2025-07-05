import React, { useEffect, useState } from 'react';

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://my-headless-site.local/wp-json/wp/v2/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error('Failed to fetch categories:', err));
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(cat => (
          <li key={cat.id}>
            {cat.name} ({cat.count} posts)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
