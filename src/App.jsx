import { useState } from "react";
import "./App.css";

function App() {
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);

  const handlePost = () => {
    if (post.length > 0 && post.length <= 100) {
      setPosts([...posts, post]);
      setPost("");
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>PostBox</h1>
        <p>Share your thoughts</p>
      </header>

      <main className="container">
        {/* Create Post */}
        <section className="create-card">
          <h2>Create a Post</h2>

          <textarea
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="What's on your mind?"
          />

          <div className="bottom-row">
            <span className={post.length > 100 ? "danger" : ""}>
              {post.length} / 100 characters
            </span>

            <button
              onClick={handlePost}
              disabled={post.length === 0 || post.length > 100}
            >
              Post
            </button>
          </div>

          {post.length > 100 && (
            <p className="error">⚠ Limit exceeded! Maximum 100 characters.</p>
          )}
        </section>

        {/* Posts */}
        <section className="posts-section">
          <h2>Recent Posts</h2>

          {posts.length === 0 ? (
            <div className="empty">
              <p>No posts yet.</p>
              <span>Write something above and create your first post!</span>
            </div>
          ) : (
            posts.map((item, index) => (
              <div className="post-card" key={index}>
                <div className="post-header">
                  <div className="avatar">
                    {index + 1}
                  </div>

                  <div>
                    <h3>Post {index + 1}</h3>
                    <small>Just now</small>
                  </div>
                </div>

                <p className="post-content">{item}</p>

                <div className="post-footer">
                  <span>💬 Post #{index + 1}</span>
                  <span>{item.length} characters</span>
                </div>
              </div>
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export default App;