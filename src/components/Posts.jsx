import React, { useEffect, useState } from 'react';

function Posts({selectedCategory}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const categoryFilter = selectedCategory ? `&categories=${selectedCategory}` : ``;
    const url = `https://public-api.wordpress.com/wp/v2/sites/nazanin46.wordpress.com/posts?per_page=20${categoryFilter}`;

    fetch(url)
      .then(res => res.json())
      .then(data => setPosts(data));
  }, [selectedCategory]);

  return (
    <div>
      {/* <h1>Flower Bucket Gallery</h1> */}
      {posts.map(post => (
        <div key={post.id} className="post-wrapper">
          <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      ))}
    </div>
  );
}

export default Posts;
