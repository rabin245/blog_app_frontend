import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useParams, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import { useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { DateTime, Duration } from "luxon";
import { AuthContext } from "../context/authContext";

function Single() {
  const [post, setPost] = useState({});
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // const location = useLocation();
  // const postId = location.pathname.split("/")[2];
  const postId = useParams().id;

  const postTime = useMemo(() => {
    const currentTime = DateTime.now();
    const postTime = post?.date ? DateTime.fromISO(post.date) : DateTime.now();
    // const postTime = DateTime.fromObject({
    //   year: 2023,
    //   month: 2,
    //   day: 16,
    //   hour: 12,
    //   minute: 12,
    // });
    // const diff = currentTime.diff(postTime, [
    //   // "days",
    //   "hours",
    //   // "minutes",
    // ]);
    // console.log(diff.toObject());
    // return diff;

    const diff = currentTime
      .minus(
        Duration.fromObject({
          years: currentTime.year - postTime.year,
          months: currentTime.month - postTime.month,
          days: currentTime.day - postTime.day,
          hours: currentTime.hour - postTime.hour,
        })
      )
      .toRelativeCalendar({
        // unit: "days",
        unit: "minutes",
      });

    // console.log(diff);
    return diff;
  }, [post]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="single">
      <div className="content">
        <img src={post.img} alt="" loading="lazy" />
        <div className="user">
          {post.userImage && <img src={post.userImage} alt="" loading="lazy" />}
          <div className="info">
            <span className="username">{post.username}</span>
            <span>Posted {postTime}</span>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
        {/*
         <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, nihil
          hic fugit, nostrum nesciunt quo dolor veritatis quas voluptatem non
          eum! Quaerat fugit atque incidunt blanditiis quam possimus distinctio
          et. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          <br />
          Quibusdam, dolores labore? Placeat eligendi tempore voluptate illo
          blanditiis vitae, natus, ratione suscipit reiciendis quisquam totam!
          Minus, tempore? Dolores quam recusandae impedit? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Id ipsum culpa, earum ab obcaecati,
          <br />
          <br />
          porro, ut eaque amet fugit cupiditate quae facilis. Quisquam
          blanditiis inventore pariatur voluptatum unde! Reiciendis, adipisci?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
          porro quis impedit pariatur quidem unde dolorem possimus iste
          asperiores, quasi quas est eius molestias ea, fugiat ex ut assumenda!
          Voluptatibus!
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, nihil
          hic fugit, nostrum nesciunt quo dolor veritatis quas voluptatem non
          eum! Quaerat fugit atque incidunt blanditiis quam possimus distinctio
          et. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, nihil
          hic fugit, nostrum nesciunt quo dolor veritatis quas voluptatem non
          eum! Quaerat fugit atque incidunt blanditiis quam possimus distinctio
          et. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p> */}
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
}

export default Single;
