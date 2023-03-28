import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";

export async function homeLoader({ request }) {
  const url = new URL(request.url);
  // const searchParams = url.searchParams.get("cat");
  const searchParams = url.search;
  try {
    const res = await axios.get(`/posts${searchParams}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

function Home() {
  const data = useLoaderData();
  const posts = data || [];

  // const getDescriptionText = (html) => {
  //   const doc = new DOMParser().parseFromString(html, "text/html");
  //   return doc.body.textContent;
  // };
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await axios.get(`/posts${cat}`);
  //       setPosts(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchData();
  // }, [cat]);

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" loading="lazy" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <div className="content-description">
                  {parse(`${post.desc}`)}
                </div>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
