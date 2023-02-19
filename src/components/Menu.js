import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Menu({ cat, currentPostId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);

        const filteredData = [...res.data]
          .filter((post) => post.id != currentPostId)
          .sort(() => 0.5 - Math.random())
          .slice(0, 5);

        setPosts(filteredData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [cat, currentPostId]);

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <Link to={`/post/${post.id}`}>
            <button>Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Menu;
