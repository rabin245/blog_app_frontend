import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

function Single() {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/403571/pexels-photo-403571.jpeg?auto=compress&cs=tinysrgb&w=3600"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <div className="info">
            <span className="username">John</span>
            <span>Posted 2 days ago</span>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
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
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
}

export default Single;
