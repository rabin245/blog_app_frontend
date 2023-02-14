function Menu() {
  let posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=700",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=700",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=700",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=700",
    },
    {
      id: 6,
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=700",
    },
  ];
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
}

export default Menu;
