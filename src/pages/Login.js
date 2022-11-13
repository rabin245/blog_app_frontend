import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder="username" requried />
        <input type="password" placeholder="password" requried />
        <button>Login</button>
        <p>there is an error!</p>
        <span>
          Don't have an acoount? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
