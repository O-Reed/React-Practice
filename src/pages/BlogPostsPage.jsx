import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const BlogPostsPage = () => {
  const { state } = useLocation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (state && state.posts) {
      setPosts(state.posts);
    }
  }, [state]);

  return (
    <div>
      <h1>Welcome to Posts page</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <section>
            <p>{post.content}</p>
          </section>
        </div>
      ))}
    </div>
  );
};

export default BlogPostsPage;
