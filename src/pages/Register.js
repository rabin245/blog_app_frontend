import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input type="text" placeholder="username" requried />
        <input type="email" placeholder="email" requried />
        <input type="password" placeholder="password" requried />
        <button>Register</button>
        <p>there is an error!</p>
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
