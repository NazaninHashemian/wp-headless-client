import React, { useEffect, useState } from 'react';

function Posts({selectedCategory}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const categoryFilter = selectedCategory ? `&categories=${selectedCategory}` : ``;
    fetch(`http://my-headless-site.local/wp-json/wp/v2/posts?${categoryFilter}`)
      .then(res => res.json())
      .then(data => setPosts(data));
  }, [selectedCategory]);

  return (
    <div>
      <h1>Flower Bucket Gallery</h1>
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
